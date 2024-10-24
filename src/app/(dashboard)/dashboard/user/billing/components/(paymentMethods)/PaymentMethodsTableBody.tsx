'use client';

import { TableBody, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { paymentMethods } from '../../mocks/paymentMethods';
import PaymentMethodsTableRow from './PaymentMethodsTableRow';

type Props = {};

export default function PaymentMethodsTableBody({}: Props) {
  //!TODO call the get payment methods -> {{url}}/payment-methods/getAll
  // const [paymentMethods, setPaymentMethods] = useState([])
  // useEffect(() => {
  //   fetchPaymentMethods().then((res) => {
  //     setPaymentMethods(res)
  //   })
  // })

  return (
    <TableBody>
      {paymentMethods.map((paymentMethod, index) => (
        <PaymentMethodsTableRow key={index} paymentMethod={paymentMethod} />
      ))}
      {paymentMethods.length === 0 && (
        <TableRow>
          <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
            You have no saved payment methods
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
