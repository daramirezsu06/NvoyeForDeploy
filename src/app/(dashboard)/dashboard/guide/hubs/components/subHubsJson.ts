export const subHubsJson = {
  GenericHubName: {
    id: 1,
    name: 'Generic Hub Name',
    description: 'General description of the hub',
    tags: ['tag1', 'tag2', 'tag3'],
    overview: 'This is a generic overview for the hub.',
    PrincipalContent: [
      {
        type: 'table',
        data: {
          title: 'Table Title 1',
          columns: ['Column A', 'Column B', 'Column C'],
          rows: [
            ['otro dato', 'vamos bien', 'Data C1'],
            ['Data A2', 'Data B2', 'Data C2'],
            ['Data A3', 'Data B3', 'Data C3'],
          ],
        },
      },
      {
        type: 'list',
        data: {
          title: 'List Title 1',
          items: ['List item 1', 'List item 2', 'List item 3'],
        },
      },
      {
        type: 'table',
        data: {
          title: 'Table Title 1',
          columns: ['Column A', 'Column B', 'Column C'],
          rows: [
            ['Data A1', 'Data B1', 'Data C1'],
            ['Data A2', 'Data B2', 'Data C2'],
            ['Data A3', 'Data B3', 'Data C3'],
          ],
        },
      },
    ],
    rightContend: [
      {
        type: 'recomendedTasks',
        data: {
          title: 'Recomended Tasks',
          items: [
            { title: 'Task 1', description: 'Description of task 1' },
            { title: 'Task 2', description: 'Description of task 2' },
            { title: 'Task 3', description: 'Description of task 3' },
          ],
        },
      },
      {
        type: 'financial',
        data: {
          title: 'Financial',
          items: [
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
        },
      },
      {
        type: 'resource',
        data: {
          title: 'Resource',
          items: [
            { title: 'Product Comparator', link: 'https://www.vergelijk.nl/' },
            {
              title: 'Municipal Tax Calculator',
              link: 'https://denhaag.lokalelastenmeter.nl/a',
            },
          ],
        },
      },
    ],
    isActive: true,
    hubId: 4,
  },
  Banking: {
    id: 1,
    name: 'Banking',
    description: 'General description of the hub',
    tags: ['Convenient banking', 'Easy payments', 'Atm access'],
    overview:
      'To sign any contract in the Netherlands it is required to have a bank account in a national bank. The bank most used by diplomatic officials in The Hague is ABN AMRO NV, which has an office near the Embassy (30 Koningskade Street), whose opening hours are Monday to Friday from 9:00 a.m. to 5:00 p.m., and Thursday from 9:00 a.m. to 8:00 p.m., and on Saturday from 10:00 a.m. to 2:00 p.',
    PrincipalContent: [
      {
        type: 'table',
        data: {
          title: 'Digital and physical banks for diplomats',
          columns: ['Corporate/Commercial banks', 'Digital and mobile banks'],
          rows: [
            ['ABN AMRO ', 'bunq'],
            ['ING', 'Revolut'],
            ['Rabobank', 'Wise'],
          ],
        },
      },
    ],
    rightContend: [
      {
        type: 'recomendedTasks',
        data: {
          title: 'Recomended Tasks',
          items: [
            {
              title: 'Open a bank account',
              description: 'Description of task 1',
            },
          ],
        },
      },
      {
        type: 'financial',
        data: {
          title: 'Financial',
          items: [
            {
              title: 'ATM withdrawals',
              secounText: 'Maximum daily withdrawal',
              value: '$285-$570',
            },
          ],
        },
      },
    ],
    isActive: true,
    hubId: 4,
  },
  ForeignCurrencyUsage: {
    id: 1,
    name: 'Foreign currency usage',
    description: 'General description of the hub',
    tags: ['Exchange facilities', 'Forex services'],
    overview: 'This is a generic overview for the hub.',
    PrincipalContent: [
      {
        type: 'list',
        data: {
          title: 'Exchange regulations',
          items: [
            'Avoid exchanging dollars at local banks due to high commissions.',
            'Prefer exchanging dollars at exchange offices, located at central stations in main cities and airports.',
          ],
        },
      },
      {
        type: 'list',
        data: {
          title: 'Banking operations and compliance',
          items: [
            'Open a current account in a Dutch bank due to international anti-money laundering and corruption measures.',
            'Foreign accounts can be used but may require additional information or scrutiny by the bank.',
          ],
        },
      },
      {
        type: 'list',
        data: {
          title: 'Preparing for arrival',
          items: [
            'Crediting funds from a New York bank check to a local account can take up to four weeks.',
            'Essential to bring: An internationally accepted credit card, cash in euros (preferably bills up to one hundred euros) and smaller bills for neighborhood stores, which may refuse one hundred euro bills.',
          ],
        },
      },
    ],
    rightContend: [
      {
        type: 'recomendedTasks',
        data: {
          title: 'Recomended Tasks',
          items: [{ title: 'Task 1', description: 'Description of task 1' }],
        },
      },
      {
        type: 'financial',
        data: {
          title: 'Financial',
          items: [
            {
              title: 'USD to Euro conversion',
              secounText: 'Conversion rates may vary',
              value: '$1= 0.92€',
            },
          ],
        },
      },
    ],
    isActive: true,
    hubId: 4,
  },
  TheCostOfLiving: {
    id: 1,
    name: 'The cost of living',
    description: 'General description of the hub',
    tags: ['Housing affordability', 'Different wages', 'Variable food price'],
    overview:
      'The cost of living in the Netherlands in 2024 can vary depending on the city and lifestyle. In the Hague, the average cost of living in 2024 is slightly less expensive than in Amsterdam but still above many other Dutch cities. The Hague is ranked as the second most expensive city in the Netherlands, with a Price Index of 136, meaning it is 36% more expensive than the base city in the index',
    PrincipalContent: [
      {
        type: 'table',
        data: {
          title: 'Cost of living and budgeting in the Netherlands',
          columns: ['Category', 'Cost(monthly)', 'Notes'],
          rows: [
            ['Single household', '', ''],
            ['Monthly Costs (excluding rent)', '€953.8', ''],
            ['Rent (expensive area)', '€1,354', '45 m² furnished studio'],
            ['Rent (normal area)', '€1,032', '45 m² furnished studio'],
          ],
        },
      },
    ],
    rightContend: [
      {
        type: 'recomendedTasks',
        data: {
          title: 'Recomended Tasks',
          items: [
            {
              title: 'New sim/ mobile phone contract',
              description: 'Description of task 1',
            },
            {
              title: 'Electricity contracts',
              description: 'Description of task 2',
            },
            { title: 'Water contracts', description: 'Description of task 3' },
            {
              title: 'Internet contracts',
              description: 'Description of task 3',
            },
          ],
        },
      },
      {
        type: 'financial',
        data: {
          title: 'Finance',
          items: [
            {
              title: 'Familys estimated monthly cost',
              secounText: 'Without reny',
              value: '€3,614.7',
            },
          ],
        },
      },
      {
        type: 'resource',
        data: {
          title: 'Resource',
          items: [
            { title: 'Product Comparator', link: 'https://www.vergelijk.nl/' },
          ],
        },
      },
    ],
    isActive: true,
    hubId: 4,
  },
};