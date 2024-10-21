'use client';

import { TableBody } from '@mui/material';
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
    </TableBody>
  );
}
