export interface Iinvoice {
  id: number;
  amount: number;
  createdAt: string;
  paidAt: null;
  name: string;
  description: string;
  stripeDetail: null;
  updatedAt: null;
  billingStatusId: number;
  currency: string;
  billingStatus: {
    name: string;
    description: string;
  };
}

export const invoicesMock: Iinvoice[] = [
  {
    id: 1111,
    amount: 9.99,
    createdAt: '2024-08-26T03:05:03.400Z',
    paidAt: null,
    name: 'Basic Plan',
    description: 'Access to basic features and limited content.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 1,
    currency: 'USD',
    billingStatus: {
      name: 'Pending',
      description: 'Invoice is created and awaiting payment.',
    },
  },
  {
    id: 2222,
    amount: 99.99,
    createdAt: '2024-02-26T03:05:03.400Z',
    paidAt: null,
    name: 'Housekeeping',
    description: 'Keeping your house clean and in order.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 3,
    currency: 'USD',
    billingStatus: {
      name: 'Failed',
      description: 'Payment attempt failed or was declined.',
    },
  },
  {
    id: 3333,
    amount: 109.99,
    createdAt: '2024-03-26T03:05:03.400Z',
    paidAt: null,
    name: 'Basic Plan',
    description: 'Access to basic features and limited content.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 4,
    currency: 'USD',
    billingStatus: {
      name: 'Overdue',
      description: 'Payment was not made by the due date.',
    },
  },
  {
    id: 4444,
    amount: 19.99,
    createdAt: '2024-04-26T03:05:03.400Z',
    paidAt: null,
    name: 'Translation service',
    description: 'Document translation.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 2,
    currency: 'USD',
    billingStatus: {
      name: 'Paid',
      description: 'Payment has been successfully completed.',
    },
  },
  {
    id: 5555,
    amount: 149.99,
    createdAt: '2024-05-26T03:05:03.400Z',
    paidAt: null,
    name: 'Landing package',
    description: 'Access to basic features and limited content.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 5,
    currency: 'USD',
    billingStatus: {
      name: 'Canceled',
      description: 'The invoice was canceled and no payment is required.',
    },
  },
];
