'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';

interface Props {
  handleCloseEditMethod: () => void;
  paymentMethod: IPaymentMethod;
}

export default function EditPaymentMethod({
  handleCloseEditMethod,
  paymentMethod,
}: Props) {
  const [cardNumber, setCardNumber] = useState(paymentMethod.cardNumber);
  const [cardholderName, setCardholderName] = useState(
    paymentMethod.cardHolderName
  );
  const [expirationDate, setExpirationDate] = useState(
    paymentMethod.expiryMonth + '/' + paymentMethod.expiryYear
  );
  const [cvv, setCvv] = useState('');

  const handleConfirm = () => {
    console.log('sending data to back');
    console.log(cardNumber, cardholderName, expirationDate, cvv);
    //TODO send info to backend
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '10px',
        paddingY: { xs: 3, sm: 2 },
        paddingX: { xs: 2, sm: 3 },
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#F8F6F5',
        width: { xs: '95%', sm: '500px' },
      }}
    >
      <Typography variant="h5">Edit payment method</Typography>

      <TextField
        variant="outlined"
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="4242 **** **** ****"
        sx={{
          // width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
        }}
      ></TextField>

      <TextField
        variant="outlined"
        label="Cardholder name"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
        placeholder="Full name"
        sx={{
          // width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          borderRadius: 2,
        }}
      ></TextField>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          alignSelf: 'stretch',
        }}
      >
        <TextField
          variant="outlined"
          label="Expiration date"
          placeholder="MM/YY"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="CVV"
          placeholder="123"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignSelf: 'stretch',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: '',
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
            }}
            onClick={handleCloseEditMethod}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
            }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
