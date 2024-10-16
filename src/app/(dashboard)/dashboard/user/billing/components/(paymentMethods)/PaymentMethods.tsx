'use client';

import { Add } from '@mui/icons-material';
import { Box, Button, Icon, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import PaymentMethodsTable from './PaymentMethodsTable';
import AddPaymentMethod from './AddPaymentMethod';

type Props = {};

export default function PaymentMethods({}: Props) {
  const [isAddMethodOpen, setIsAddMethodOpen] = useState(false);
  const handleOpenAddMethod = () => setIsAddMethodOpen(true);
  const handleCloseAddMethod = () => setIsAddMethodOpen(false);

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
          onClick={handleOpenAddMethod}
        >
          Add
        </Button>
        <Modal
          open={isAddMethodOpen}
          onClose={handleCloseAddMethod}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <AddPaymentMethod handleCloseAddMethod={handleCloseAddMethod} />
        </Modal>
      </Stack>

      {/* Payment methods Table */}
      <PaymentMethodsTable />
    </Box>
  );
}
