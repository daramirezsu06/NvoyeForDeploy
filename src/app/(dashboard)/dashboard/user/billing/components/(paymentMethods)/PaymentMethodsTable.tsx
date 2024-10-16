import React from 'react';

import { Box, Table, TableContainer } from '@mui/material';
import PaymentMethodsTableBody from './PaymentMethodsTableBody';

type Props = {};

export default function PaymentMethodsTable({}: Props) {
  return (
    <Box>
      <TableContainer>
        <Table>
          <PaymentMethodsTableBody />
        </Table>
      </TableContainer>
    </Box>
  );
}
