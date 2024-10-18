export interface IPaymentMethod {
  id: number;
  cardNumber: string;
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
    cardNumber: '4111111111111111',
    cardHolderName: 'John Doee',
    expiryMonth: 12,
    expiryYear: 2025,
    cvc: '123',
    isDefault: true,
    billingAddress: 'some address',
  },
  {
    id: 2,
    cardNumber: '5111222233334444',
    cardHolderName: 'Natalia Natalia',
    expiryMonth: 12,
    expiryYear: 2025,
    cvc: '123',
    isDefault: false,
    billingAddress: 'Adress2',
  },
];
