'use client';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import InvoicesTableQueries from './InvoicesTableQueries';
import dayjs, { Dayjs } from 'dayjs';
import { invoicesMock } from '../../mocks/invoices';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import InvoicesTableRow from './InvoicesTableRow';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

type Filters = {
  status: string;
  amountFilterValues: [number, number];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  searchText: string;
};

interface Iinvoice {
  id: number;
  amount: number;
  paidAt: Dayjs | null;
  name: string;
  description: string;
  stripeDetail: any; // Ajustar según lo que realmente sea
  updatedAt: Dayjs | null;
  billingStatusId: number;
  currency: string;
  billingStatus: {
    name: string;
    description: string;
  };
  createdAt: Dayjs; // Cambiar de 'string' a 'Dayjs'
}

const invoices = invoicesMock.map((invoice) => ({
  ...invoice,
  createdAt: dayjs(invoice.createdAt),
}));

export default function InvoicesTable() {
  const [filters, setFilters] = useState<Filters>({
    status: '',
    amountFilterValues: [0, 1000],
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
    searchText: '',
  });
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  // pagination
  const [page, setPage] = useState(0); // current page
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const paginatedInvoices = filteredInvoices.slice(
  //   page * rowsPerPage,
  //   page * rowsPerPage + rowsPerPage
  // );
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reiniciar a la primera página cuando se cambia la cantidad de filas por página
  };

  //order
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<keyof Iinvoice>('createdAt');
  const handleSort = (property: keyof Iinvoice) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const compare = (a: Iinvoice, b: Iinvoice, orderBy: keyof Iinvoice) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  };

  const sortedInvoices = filteredInvoices.sort((a, b) =>
    compare(a, b, orderBy)
  );

  const paginatedInvoices = sortedInvoices.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getSortIcon = (column: keyof Iinvoice) => {
    if (orderBy !== column) return null;
    return order === 'asc' ? (
      <ArrowUpward
        fontSize="small"
        style={{ translate: '2px 4px', opacity: 0.7 }}
      />
    ) : (
      <ArrowDownward
        fontSize="small"
        style={{ translate: '2px 4px', opacity: 0.7 }}
      />
    );
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);

    // Reinicia la lista de facturas antes de aplicar nuevos filtros
    const filteredInvoices = invoices.filter((invoice) => {
      const matchesStatus = newFilters.status
        ? invoice.billingStatus.name === newFilters.status
        : true;

      const matchesAmount =
        invoice.amount >= newFilters.amountFilterValues[0] &&
        invoice.amount <= newFilters.amountFilterValues[1];

      const matchesDate =
        (newFilters.startDate
          ? invoice.createdAt.isSameOrAfter(newFilters.startDate)
          : true) &&
        (newFilters.endDate
          ? invoice.createdAt.isSameOrBefore(newFilters.endDate)
          : true);

      const matchesSearchText =
        newFilters.searchText?.trim() === '' ||
        invoice.name
          .toLowerCase()
          .includes(newFilters.searchText.toLowerCase());

      return matchesStatus && matchesAmount && matchesDate && matchesSearchText;
    });

    // Establece las facturas filtradas en el estado
    setFilteredInvoices(filteredInvoices);

    console.log(filteredInvoices);
  };
  // console.log(invoices);
  // console.log(invoicesMock);

  return (
    <Box>
      {/* Desktop Table */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
        }}
      >
        <InvoicesTableQueries handleApplyFilters={handleApplyFilters} />
        <TableContainer
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    gap: 1,
                  }}
                  onClick={() => handleSort('name')}
                >
                  Name {getSortIcon('name')}
                </TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    gap: 1,
                  }}
                  onClick={() => handleSort('amount')}
                >
                  Amount {getSortIcon('amount')}
                </TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    gap: 1,
                  }}
                  onClick={() => handleSort('createdAt')}
                >
                  Date {getSortIcon('createdAt')}
                </TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    gap: 1,
                  }}
                  onClick={() => handleSort('billingStatusId')}
                >
                  Status {getSortIcon('billingStatusId')}
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedInvoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                    {invoices.length === 0
                      ? 'You have no invoices'
                      : 'There are no results matching your filtering options'}
                  </TableCell>
                </TableRow>
              ) : (
                paginatedInvoices.map((invoice: any) => (
                  <InvoicesTableRow key={invoice.id} invoice={invoice} />
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={filteredInvoices.length} // Total facturas filtradas
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          component="div"
        ></TablePagination>
      </Box>

      {/* mobile Table */}

      <TableContainer
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
        }}
      >
        <InvoicesTableQueries handleApplyFilters={handleApplyFilters} />
        <Table
          sx={{
            tableLayout: 'fixed',
            width: '100%',
          }}
        >
          <TableBody>
            {paginatedInvoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                  {invoices.length === 0
                    ? 'You have no invoices'
                    : 'There are no results matching your filtering options'}
                </TableCell>
              </TableRow>
            ) : (
              paginatedInvoices.map((invoice: any) => (
                <InvoicesTableRow key={invoice.id} invoice={invoice} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={filteredInvoices.length} // Total facturas filtradas
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        component="div"
        sx={{
          display: { xs: 'flex', sm: 'none' },
        }}
      ></TablePagination>
    </Box>
  );
}
