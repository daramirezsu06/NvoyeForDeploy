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
import { Iinvoice, invoicesMock } from '../../mocks/invoices';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import InvoicesTableRow from './InvoicesTableRow';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

type Filters = {
  status: string;
  amountFilterValues: [number, number];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  searchText: string;
};

const invoices = invoicesMock.map((invoice) => ({
  ...invoice,
  createdAt: dayjs(invoice.createdAt), // Convertir 'createdAt' a Dayjs
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
  console.log(invoices);
  console.log(invoicesMock);

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
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredInvoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                    {invoices.length === 0
                      ? 'You have no invoices'
                      : 'There are no results matching your filtering options'}
                  </TableCell>
                </TableRow>
              ) : (
                filteredInvoices.map((invoice: any) => (
                  <InvoicesTableRow key={invoice.id} invoice={invoice} />
                ))
              )}
            </TableBody>
            {/* //TODO add pagination */}
            {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={10}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          ></TablePagination> */}
          </Table>
        </TableContainer>
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
            {invoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                  You have no invoices
                </TableCell>
              </TableRow>
            ) : filteredInvoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                  There are no results matching your filtering options
                </TableCell>
              </TableRow>
            ) : (
              filteredInvoices.map((invoice: any) => (
                <InvoicesTableRow key={invoice.id} invoice={invoice} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
