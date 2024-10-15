export interface Isubscription {
  id: number;
  price: number;
  nextCharge: string;
  name: string;
  description: string;
  status: string;
}

export const subscriptions: Isubscription[] = [
  {
    id: 1,
    name: 'Nvoye community membership',
    description: 'description',
    price: 200.0,
    nextCharge: '2025-03-04T00:00:00.000Z',
    status: 'active',
  },
  {
    id: 2,
    name: 'Translation service',
    description: 'Bridge the Gap: TranslateFast',
    price: 99.99,
    nextCharge: '2024-06-02T00:00:00.000Z',
    status: 'active',
  },
  {
    id: 3,
    name: 'service whit a very long name service whit a very long name ',
    description:
      'service whit a very long description service whit a very long description ',
    price: 100,
    nextCharge: '2024-06-02T00:00:00.000Z',
    status: 'active',
  },
];
