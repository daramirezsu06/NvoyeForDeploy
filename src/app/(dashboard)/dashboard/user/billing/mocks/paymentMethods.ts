export interface IPaymentMethod {
  id: number;
  cardCompany: string;
  cardNumber: string;
  last4: string;
  cardHolderName: string;
  expiryMonth: number;
  expiryYear: number;
  cvc: string;
  isDefault: boolean;
  billingAddress: string;
}

export const paymentMethods: IPaymentMethod[] = [
  {
    id: 1,
    cardCompany: 'Visa',
    cardNumber: '4111111111111111',
    last4: '1111',
    cardHolderName: 'John Doee',
    expiryMonth: 12,
    expiryYear: 2025,
    cvc: '123',
    isDefault: true,
    billingAddress: 'some address',
  },
  {
    id: 2,
    cardCompany: 'Mastercard',
    cardNumber: '1111 2222 3333 4444 ',
    last4: '4444',
    cardHolderName: 'Natalia Natalia',
    expiryMonth: 12,
    expiryYear: 2025,
    cvc: '123',
    isDefault: false,
    billingAddress: 'Adress2',
  },
];
