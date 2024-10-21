'use client';

import React from 'react';
import { Iinvoice } from '../../mocks/invoices';
import {
  Box,
  Button,
  Checkbox,
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import {
  CheckBoxOutlineBlank,
  ChevronRight,
  ExpandLess,
  ExpandMore,
  FiberManualRecordRounded,
} from '@mui/icons-material';

type Props = {};

export default function InvoicesTableRow({ invoice }: { invoice: Iinvoice }) {
  const date = new Date(invoice.createdAt);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const statusColor =
    invoice.billingStatus.name === 'Paid'
      ? 'success.main'
      : invoice.billingStatus.name === 'Overdue'
        ? 'warning.main'
        : invoice.billingStatus.name === 'Failed' ||
            invoice.billingStatus.name === 'Canceled'
          ? 'error.main'
          : 'info';
  return (
    <>
      {/* desktop row */}
      <TableRow
        key={invoice.id}
        sx={{
          display: { xs: 'none', sm: 'table-row' },
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox></Checkbox>
        </TableCell>
        <TableCell>{invoice.name}</TableCell>
        <TableCell>${formatPrice(invoice.amount)}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell
          sx={{
            color: statusColor,
          }}
        >
          {invoice.billingStatus.name}
        </TableCell>
        <TableCell>
          <Button
            variant="outlined"
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            View
          </Button>
        </TableCell>
      </TableRow>

      {/* mobile row */}
      <TableRow
        key={invoice.id}
        sx={{
          display: { xs: 'table-row', sm: 'none' },
          width: '100%',
          gap: 1,
        }}
      >
        <TableCell
          align="center"
          sx={{
            width: 20,
            maxWidth: 20,
            padding: 0,
          }}
        >
          <FiberManualRecordRounded
            sx={{ color: statusColor, fontSize: '20px', width: '20px' }}
          />
        </TableCell>
        <TableCell
          align="left"
          sx={{
            width: 100,
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
              {' '}
              {invoice.name}
            </Typography>
            <Typography variant="caption"> {formattedDate}</Typography>
          </Box>
        </TableCell>
        <TableCell
          align="right"
          sx={{
            width: 100,
            paddingX: 0,
          }}
        >
          ${formatPrice(invoice.amount)}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            width: 100,
            paddingX: 0,
          }}
        >
          {' '}
          <IconButton
            onClick={() => {
              // handleShowPaymentMethodDetail();
            }}
          >
            <Icon>
              <ChevronRight />
            </Icon>
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
