import { TableBody } from '@mui/material';
import React from 'react';
import { invoicesMock } from '../../mocks/invoices';
import InvoicesTableRow from './InvoicesTableRow';

type Props = {};

export default function InvoicesTableBody({}: Props) {
  return (
    <TableBody>
      {invoicesMock.map((invoice, index) => (
        <InvoicesTableRow key={index} invoice={invoice} />
      ))}
    </TableBody>
  );
}
