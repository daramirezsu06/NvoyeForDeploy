import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import InvoicesTable from './InvoicesTable';

type Props = {};

export default function Invoices({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingY: 3,
        paddingX: { xs: 1, sm: 4 },
        backgroundColor: '#F8F6F5',
        borderRadius: 2,
      }}
    >
      {/* Title and chip */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          paddingBottom: '24px',
        }}
      >
        <Typography variant="h5">Invoices</Typography>
        <Typography variant="subtitle2">
          Click to view or select to download multiple invoices.
        </Typography>
      </Stack>

      <InvoicesTable />
    </Box>
  );
}
