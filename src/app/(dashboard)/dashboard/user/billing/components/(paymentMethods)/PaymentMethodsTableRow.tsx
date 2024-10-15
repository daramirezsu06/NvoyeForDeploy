'use client';
import {
  Icon,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Button,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import {
  ChevronRight,
  CreditCardOutlined,
  EditOutlined,
} from '@mui/icons-material';

export default function PaymentMethodsTableRow({
  paymentMethod,
}: {
  paymentMethod: IPaymentMethod;
}) {
  return (
    <>
      <TableRow key={paymentMethod.id}>
        <TableCell>
          <Icon>
            <CreditCardOutlined />
          </Icon>
        </TableCell>
        <TableCell>
          {paymentMethod.cardCompany} ending in {paymentMethod.last4}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {paymentMethod.cardHolderName}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          <Typography
            onClick={() => {
              console.log('delete');
            }}
            color="red"
            sx={{ cursor: 'pointer' }}
          >
            Delete
          </Typography>
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {paymentMethod.isDefault ? (
            <Typography variant="body2" color="GrayText">
              Default
            </Typography>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                console.log('setting default');
              }}
              sx={{
                textTransform: 'none',
              }}
            >
              Set as default
            </Button>
          )}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          <IconButton>
            <Icon>
              <EditOutlined />
            </Icon>
          </IconButton>
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'table-cell', sm: 'none' },
          }}
        >
          <IconButton>
            <Icon>
              <ChevronRight />
            </Icon>
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
