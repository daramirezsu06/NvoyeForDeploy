export const jsonGenerico3 = {
  statusCode: 200,
  message: 'Operation successful',
  data: {
    id: 1,
    name: 'Generic Hub Name',
    description: 'General description of the hub',
    tags: ['tag1', 'tag2', 'tag3'],
    overview: 'This is a generic overview for the hub.',
    leftContent: [
      {
        type: 'header',
        data: { name: 'Generic Hub Name', tags: ['tag1', 'tag2', 'tag3'] },
      },
      { type: 'overview', data: 'This is a generic overview for the hub.' },
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
          ],
        },
      },
      {
        type: 'list',
        data: {
          /* otro listado... */
        },
      },
      // Más componentes principales según sea necesario
    ],
    rightContent: [
      {
        type: 'task',
        data: { title: 'Task 1', description: 'Description of task 1' },
      },
      {
        type: 'financial',
        data: {
          title: 'Financial Item 1',
          subtitle: 'Additional info',
          value: '$1000',
        },
      },
      {
        type: 'resource',
        data: { title: 'Resource 1', link: 'https://example.com/resource1' },
      },
      {
        type: 'task',
        data: { title: 'Task 2', description: 'Description of task 2' },
      },
      {
        type: 'financial',
        data: {
          title: 'Financial Item 2',
          subtitle: 'Additional info',
          value: '$2000',
        },
      },
      // Más componentes secundarios según sea necesario
    ],
    isActive: true,
    hubId: 4,
  },
  success: true,
};
