export const billingStatus = [
  {
    id: 1,
    name: 'Pending',
    description: 'Invoice is created and awaiting payment.',
  },
  {
    id: 2,
    name: 'Paid',
    description: 'Payment has been successfully completed.',
  },
  {
    id: 3,
    name: 'Failed',
    description: 'Payment attempt failed or was declined.',
  },
  {
    id: 4,
    name: 'Overdue',
    description: 'Payment was not made by the due date.',
  },
  {
    id: 5,
    name: 'Canceled',
    description: 'The invoice was canceled and no payment is required.',
  },
];
