// utils/paymentUtils.ts

import valid from 'card-validator';

// Formatea el número de tarjeta con espacios cada 4 dígitos
export const formatCardNumber = (value: string) => {
  return value
    .replace(/\s?/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();
};

// Formatea la fecha de expiración como MM/YYYY
export const formatExpirationDate = (value: string) => {
  const sanitizedValue = value.replace(/\D/g, '');

  if (sanitizedValue.length <= 2) {
    return sanitizedValue; // Solo mes
  } else if (sanitizedValue.length > 2) {
    return sanitizedValue.slice(0, 2) + '/' + sanitizedValue.slice(2, 6);
  }
  return sanitizedValue;
};

// Validar número de tarjeta usando card-validator
export const validateCardNumber = (number: string) => {
  const cardValidation = valid.number(number.replace(/\s/g, ''));
  return cardValidation.isValid ? '' : 'Invalid card number';
};

// Validar fecha de expiración usando card-validator
export const validateExpirationDate = (expirationDate: string) => {
  const [expiryMonth, expiryYear] = expirationDate.split('/');
  const expiryValidation = valid.expirationDate({
    month: expiryMonth,
    year: expiryYear,
  });
  return expiryValidation.isValid ? '' : 'Invalid expiration date';
};

// Validar nombre del titular de la tarjeta
export const validateCardholderName = (name: string) => {
  return name.trim() !== '' ? '' : 'Cardholder name is required';
};

// Validar CVV usando card-validator
export const validateCvv = (cvv: string) => {
  const cvvValidation = valid.cvv(cvv);
  return cvvValidation.isValid ? '' : 'Invalid CVV';
};
