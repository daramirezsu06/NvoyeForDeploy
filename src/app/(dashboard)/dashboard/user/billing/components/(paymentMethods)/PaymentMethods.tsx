import { Add } from '@mui/icons-material';
import { Box, Button, Icon, Stack, Typography } from '@mui/material';
import React from 'react';
import PaymentMethodsTable from './PaymentMethodsTable';

type Props = {};

export default function PaymentMethods({}: Props) {
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
          flexDirection: 'row',
          padding: '10px',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        }}
      >
        <Stack>
          <Typography variant="h5">Payment methods</Typography>
          <Typography variant="subtitle2">
            Add or edit your payment methods.
          </Typography>
        </Stack>

        {/* chip */}
        <Button
          color="primary"
          variant="contained"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
            paddingY: '6px',
            paddingX: '16px',
            borderRadius: 2,
          }}
          startIcon={<Add />}
        >
          Add
        </Button>
      </Stack>

      {/* Payment methods Table */}
      <PaymentMethodsTable />
    </Box>
  );
}
