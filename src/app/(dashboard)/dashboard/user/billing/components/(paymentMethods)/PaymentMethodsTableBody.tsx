import { TableBody } from '@mui/material';
import React from 'react';
import { paymentMethods } from '../../mocks/paymentMethods';
import PaymentMethodsTableRow from './PaymentMethodsTableRow';

export default function PaymentMethodsTableBody() {
  return (
    <TableBody>
      {paymentMethods.map((paymentMethod, index) => (
        <PaymentMethodsTableRow key={index} paymentMethod={paymentMethod} />
      ))}
    </TableBody>
  );
}
