'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import {
  formatCardNumber,
  formatExpirationDate,
  validateCardNumber,
  validateExpirationDate,
  validateCardholderName,
  validateCvv,
} from './utils/paymentUtils';

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
  const [isFormValid, setIsFormValid] = useState(false);

  const [cardNumberError, setCardNumberError] = useState('');
  const [cardholderNameError, setCardholderNameError] = useState('');
  const [expirationDateError, setExpirationDateError] = useState('');
  const [cvvError, setCvvError] = useState('');

  useEffect(() => {
    const hasErrors =
      !!cardNumberError ||
      !!cardholderNameError ||
      !!expirationDateError ||
      !!cvvError;

    const isCardNumberValid = cardNumber.replace(/\s/g, '').length === 16; // Verificar si la tarjeta tiene 16 dígitos
    const isCardholderNameValid = cardholderName.trim() !== '';
    const isExpirationDateValid = expirationDate.length === 7; // Formato MM/YYYY (7 caracteres)
    const isCvvValid = cvv.length === 3 || cvv.length === 4; // Verificar si el CVV tiene 3 o 4 dígitos

    setIsFormValid(
      !hasErrors && // No debe haber errores
        isCardNumberValid &&
        isCardholderNameValid &&
        isExpirationDateValid &&
        isCvvValid
    );
  }, [
    cardNumber,
    cardholderName,
    expirationDate,
    cvv,
    cardNumberError,
    cardholderNameError,
    expirationDateError,
    cvvError,
  ]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedCardNumber = formatCardNumber(inputValue);
    setCardNumber(formattedCardNumber);
    setCardNumberError(validateCardNumber(formattedCardNumber));
  };

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const nameValue = e.target.value;
    setCardholderName(nameValue);
    setCardholderNameError(validateCardholderName(nameValue));
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const formattedDate = formatExpirationDate(inputValue);
    setExpirationDate(formattedDate);
    setExpirationDateError(validateExpirationDate(formattedDate));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvvValue = e.target.value;
    setCvv(cvvValue);
    setCvvError(validateCvv(cvvValue));
  };

  const handleConfirm = () => {
    const cardNumberToSend = cardNumber.replace(/\s/g, ''); // Elimina los espacios antes de enviar
    const [expiryMonth, expiryYear] = expirationDate.split('/'); // Dividir mes y año
    console.log('Enviando datos al backend:');
    console.log({
      cardNumber: cardNumberToSend,
      cardholderName,
      expiryMonth: Number(expiryMonth),
      expiryYear: Number(expiryYear),
      cvv,
    });
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
        onChange={handleCardNumberChange}
        placeholder="4242 **** **** ****"
        error={!!cardNumberError}
        helperText={cardNumberError}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
        }}
      />

      <TextField
        variant="outlined"
        label="Cardholder name"
        value={cardholderName}
        onChange={handleCardholderNameChange}
        placeholder="Full name"
        error={!!cardholderNameError}
        helperText={cardholderNameError}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          borderRadius: 2,
        }}
      />

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
          placeholder="MM/YYYY"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          error={!!expirationDateError}
          helperText={expirationDateError}
        />
        <TextField
          variant="outlined"
          label="CVV"
          placeholder="123"
          value={cvv}
          onChange={handleCvvChange}
          error={!!cvvError}
          helperText={cvvError}
        />
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
            disabled={!isFormValid}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
}