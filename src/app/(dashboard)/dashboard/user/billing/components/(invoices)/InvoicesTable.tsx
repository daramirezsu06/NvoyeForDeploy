import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import InvoicesTableBody from './InvoicesTableBody';
import InvoicesTableQueries from './InvoicesTableQueries';

type Props = {};

export default function InvoicesTable({}: Props) {
  return (
    <Box>
      {/* Desktop Table */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
        }}
      >
        <InvoicesTableQueries />
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
            <InvoicesTableBody />
          </Table>
        </TableContainer>
      </Box>

      {/* mobile Table */}
      <TableContainer
        sx={{
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Table
          sx={{
            tableLayout: 'fixed', // Fuerza a las celdas a respetar los anchos asignados
            width: '100%', // Asegura que la tabla ocupe todo el ancho posible
          }}
        >
          <InvoicesTableQueries />

          <InvoicesTableBody />
        </Table>
      </TableContainer>
    </Box>
  );
}
