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

// export const invoicesMock: Iinvoice[] = [
//   {
//     id: 1111,
//     amount: 9.99,
//     createdAt: '2024-08-26T03:05:03.400Z',
//     paidAt: null,
//     name: 'Basic Plan',
//     description: 'Access to basic features and limited content.',
//     stripeDetail: null,
//     updatedAt: null,
//     billingStatusId: 1,
//     currency: 'USD',
//     billingStatus: {
//       name: 'Pending',
//       description: 'Invoice is created and awaiting payment.',
//     },
//   },
//   {
//     id: 2222,
//     amount: 99.99,
//     createdAt: '2024-02-26T03:05:03.400Z',
//     paidAt: null,
//     name: 'Housekeeping',
//     description: 'Keeping your house clean and in order.',
//     stripeDetail: null,
//     updatedAt: null,
//     billingStatusId: 3,
//     currency: 'USD',
//     billingStatus: {
//       name: 'Failed',
//       description: 'Payment attempt failed or was declined.',
//     },
//   },
//   {
//     id: 3333,
//     amount: 109.99,
//     createdAt: '2024-03-26T03:05:03.400Z',
//     paidAt: null,
//     name: 'Basic Plan',
//     description: 'Access to basic features and limited content.',
//     stripeDetail: null,
//     updatedAt: null,
//     billingStatusId: 4,
//     currency: 'USD',
//     billingStatus: {
//       name: 'Overdue',
//       description: 'Payment was not made by the due date.',
//     },
//   },
//   {
//     id: 4444,
//     amount: 19.99,
//     createdAt: '2024-04-26T03:05:03.400Z',
//     paidAt: null,
//     name: 'Translation service',
//     description: 'Document translation.',
//     stripeDetail: null,
//     updatedAt: null,
//     billingStatusId: 2,
//     currency: 'USD',
//     billingStatus: {
//       name: 'Paid',
//       description: 'Payment has been successfully completed.',
//     },
//   },
//   {
//     id: 5555,
//     amount: 149.99,
//     createdAt: '2024-05-26T03:05:03.400Z',
//     paidAt: null,
//     name: 'Landing package',
//     description: 'Access to basic features and limited content.',
//     stripeDetail: null,
//     updatedAt: null,
//     billingStatusId: 5,
//     currency: 'USD',
//     billingStatus: {
//       name: 'Canceled',
//       description: 'The invoice was canceled and no payment is required.',
//     },
//   },
// ];

export const invoicesMock: Iinvoice[] = [
  {
    id: 10001,
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
    id: 10002,
    amount: 99.99,
    createdAt: '2024-02-15T11:15:23.400Z',
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
    id: 10003,
    amount: 109.99,
    createdAt: '2024-03-30T12:22:11.400Z',
    paidAt: null,
    name: 'Premium Plan',
    description: 'Full access to all features and content.',
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
    id: 10004,
    amount: 19.99,
    createdAt: '2024-04-10T15:40:23.400Z',
    paidAt: null,
    name: 'Translation Service',
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
    id: 10005,
    amount: 149.99,
    createdAt: '2024-05-02T09:30:43.400Z',
    paidAt: null,
    name: 'Landing Package',
    description: 'Professional landing page design services.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 5,
    currency: 'USD',
    billingStatus: {
      name: 'Canceled',
      description: 'The invoice was canceled and no payment is required.',
    },
  },
  {
    id: 10006,
    amount: 49.99,
    createdAt: '2024-06-15T07:25:13.400Z',
    paidAt: null,
    name: 'Website Maintenance',
    description: 'Monthly website maintenance services.',
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
    id: 10007,
    amount: 19.99,
    createdAt: '2024-07-10T18:55:03.400Z',
    paidAt: null,
    name: 'SEO Optimization',
    description: 'Improve search engine visibility.',
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
    id: 10008,
    amount: 199.99,
    createdAt: '2024-08-21T05:33:22.400Z',
    paidAt: null,
    name: 'Marketing Campaign',
    description: 'Digital marketing campaign management.',
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
    id: 10009,
    amount: 59.99,
    createdAt: '2024-01-11T13:21:03.400Z',
    paidAt: null,
    name: 'Logo Design',
    description: 'Custom logo design services.',
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
    id: 10010,
    amount: 129.99,
    createdAt: '2024-03-09T10:40:03.400Z',
    paidAt: null,
    name: 'App Development',
    description: 'Mobile app development services.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 5,
    currency: 'USD',
    billingStatus: {
      name: 'Canceled',
      description: 'The invoice was canceled and no payment is required.',
    },
  },
  {
    id: 10011,
    amount: 89.99,
    createdAt: '2024-07-19T14:45:23.400Z',
    paidAt: null,
    name: 'Graphic Design',
    description: 'Graphic design for marketing materials.',
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
    id: 10012,
    amount: 29.99,
    createdAt: '2024-02-25T09:03:53.400Z',
    paidAt: null,
    name: 'Social Media Management',
    description: 'Monthly social media management services.',
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
    id: 10013,
    amount: 79.99,
    createdAt: '2024-04-14T17:30:03.400Z',
    paidAt: null,
    name: 'E-commerce Setup',
    description: 'Setting up an e-commerce platform.',
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
    id: 10014,
    amount: 49.99,
    createdAt: '2024-05-27T11:10:33.400Z',
    paidAt: null,
    name: 'Email Marketing',
    description: 'Email marketing campaign setup.',
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
    id: 10015,
    amount: 129.99,
    createdAt: '2024-06-05T08:50:43.400Z',
    paidAt: null,
    name: 'Consultation',
    description: 'Business consultation services.',
    stripeDetail: null,
    updatedAt: null,
    billingStatusId: 5,
    currency: 'USD',
    billingStatus: {
      name: 'Canceled',
      description: 'The invoice was canceled and no payment is required.',
    },
  },
  {
    id: 10016,
    amount: 59.99,
    createdAt: '2024-03-12T10:22:03.400Z',
    paidAt: null,
    name: 'Photo Editing',
    description: 'Professional photo editing services.',
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
    id: 10017,
    amount: 69.99,
    createdAt: '2024-04-29T04:12:33.400Z',
    paidAt: null,
    name: 'Video Production',
    description: 'Video production and editing services.',
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
    id: 10018,
    amount: 39.99,
    createdAt: '2024-07-07T13:05:53.400Z',
    paidAt: null,
    name: 'Content Writing',
    description: 'Content writing for blogs and websites.',
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
    id: 10019,
    amount: 119.99,
    createdAt: '2024-08-22T16:30:23.400Z',
    paidAt: null,
    name: 'Custom Illustration',
    description: 'Custom illustrations for branding.',
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
    id: 10020,
    amount: 149.99,
    createdAt: '2024-06-13T11:11:33.400Z',
    paidAt: null,
    name: 'Web Hosting',
    description: 'Yearly web hosting service.',
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
