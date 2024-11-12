import { title } from 'process';

export const jsonPropuesto = {
  statusCode: 200,
  message: 'Operation successful',
  data: {
    id: 1,
    name: 'Banking',
    description: 'Banking services and facilities',
    tags: ['Convenient banking', 'Easy payments', 'Atm access'],
    overview:
      'To sign any contract in the Netherlands, diplomats must open a national bank account. ABN AMRO NV, located near the Embassy in The Hague, is popular.',
    detail: {
      bulletedLists: [
        {
          title: 'Exchange regulations',
          content: [
            'Avoid exchanging dollars at local banks due to high commissions.',
            'Prefer exchanging dollars at exchange offices, located at central stations in main cities and airports.',
          ],
        },
        {
          title: 'Banking operations and compliance',
          content: [
            'Open a current account in a Dutch bank due to international anti-money laundering and corruption measures.',
            'Foreign accounts can be used but may require additional information or scrutiny by the bank.',
          ],
        },
        {
          title: 'Preparing for arrival',
          content: [
            'Crediting funds from a New York bank check to a local account can take up to four weeks.',
            'Essential to bring: An internationally accepted credit card, cash in euros (preferably bills up to one hundred euros) and smaller bills for neighborhood stores, which may refuse one hundred euro bills.',
          ],
        },
      ],
      tables: [
        {
          title: 'Digital and physical banks for diplomats',
          colums: ['Corporate/Commercial banks', 'Digital and mobile banks'],
          rows: [
            ['ABN AMRO', 'bunq'],
            ['ING', 'Revolut'],
            ['Rabobank', 'Wise'],
          ],
        },
        {
          title: 'Cost of living and budgeting in the Netherlands',
          colums: ['Category', 'Cost(monthly)', 'Notes'],
          rows: [
            ['Single household', '', ''],
            ['Monthly Costs (excluding rent)', '€953.8', ''],
            ['Rent (expensive area)', '€1,354', '45 m² furnished studio'],
            ['Rent (normal area)', '€1,032', '45 m² furnished studio'],
          ],
        },
      ],
      recomendedTasks: [
        {
          title: 'OV chipcard',
          description: 'Register your OV chipcard with the Dutch government.',
        },
        { title: 'list item', description: 'List item description' },
        { title: 'list item', description: 'List item description' },
      ],
      finance: [
        {
          title: 'Familys estimated monthly cost',
          secounText: 'Without reny',
          value: '€1,032',
        },
        {
          title: 'Mobile telephony subscriptions',
          secounText: 'Per month',
          value: '$130',
        },
      ],

      resources: [
        { title: 'Product Comparator', link: 'https://www.vergelijk.nl/' },
        {
          title: 'Municipal Tax Calculator',
          link: 'https://denhaag.lokalelastenmeter.nl/a',
        },
      ],
    },

    isActive: true,
    hubId: 4,
  },
  success: true,
};
