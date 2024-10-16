'use client';

import React from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import { Box, Button, Typography } from '@mui/material';

export default function DefaultPayment({
  paymentMethod,
  handleCloseSetDefault,
}: {
  paymentMethod: IPaymentMethod;
  handleCloseSetDefault: () => void;
}) {
  const handleSetDefault = () => {
    console.log(paymentMethod);

    //!TODO funcion que mande al back la info correspondiente y muestre alerta
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '40px',
        padding: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          width: { xs: '100%', md: '566px' },
          // height: { xs: '100%', md: '800px' },
          borderRadius: '16px',
          backgroundColor: '#F8F6F5',
          elevation: 8,
          paddingY: 4,
          paddingX: 4,
          boxShadow: ' 0px 18px 20px 1px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="h5">Default payment method change</Typography>
        <Typography variant="body1">
          Do you really want to change your default payment method?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 2,
            alignSelf: 'stretch',
          }}
        >
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ textTransform: 'none', borderRadius: 2 }}
            onClick={handleCloseSetDefault}
          >
            No
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ textTransform: 'none', borderRadius: 2 }}
            onClick={handleSetDefault}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
