export const proposalJSON = {
  statusCode: 200,
  message: 'Operation successful',
  data: {
    id: 1,
    name: 'Generic Hub Name',
    description: 'General description of the hub',
    tags: ['tag1', 'tag2', 'tag3'],
    overview: 'This is a generic overview for the hub.',
    PrincipalContent: [
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
  success: true,
};
