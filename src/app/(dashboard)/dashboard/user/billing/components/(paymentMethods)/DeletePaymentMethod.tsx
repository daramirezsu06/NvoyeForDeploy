import React from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import { Box, Typography, Button } from '@mui/material';

export default function DeletePaymentMethod({
  paymentMethod,
  handleCloseDeleteMethod,
  handleDeletePaymentMethod,
}: {
  paymentMethod: IPaymentMethod;
  handleCloseDeleteMethod: () => void;
  handleDeletePaymentMethod: () => void;
}) {
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
        <Typography variant="h5">Delete payment method </Typography>
        <Typography variant="body1">
          Do you really want to delete this payment method?
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
            onClick={handleCloseDeleteMethod}
          >
            No
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ textTransform: 'none', borderRadius: 2 }}
            onClick={handleDeletePaymentMethod}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
