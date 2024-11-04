const jsonGenerico = {
  statusCode: 200,
  message: 'Operation successful',
  data: {
    id: 1,
    name: 'Generic Hub Name',
    description: 'General description of the hub',
    tags: ['tag1', 'tag2', 'tag3'],
    overview: 'This is a generic overview for the hub.',
    details: {
      lists: [
        {
          title: 'List Title 1',
          items: ['List item 1', 'List item 2', 'List item 3'],
        },
        {
          title: 'List Title 2',
          items: ['Another list item 1', 'Another list item 2'],
        },
      ],
      tables: [
        {
          title: 'Table Title 2',
          columns: ['Column A', 'Column B', 'Column C'],
          rows: [
            ['Data A1', 'Data B1', 'Data C1'],
            ['Data A2', 'Data B2', 'Data C2'],
          ],
        },
      ],
      tasks: [
        { title: 'Task 1', description: 'Description of task 1' },
        { title: 'Task 2', description: 'Description of task 2' },
      ],
      financialData: [
        {
          title: 'Financial Item 1',
          subtitle: 'Additional info',
          value: '$1000',
        },
        {
          title: 'Financial Item 2',
          subtitle: 'Additional info',
          value: '$2000',
        },
      ],
      resources: [
        { title: 'Resource 1', link: 'https://example.com/resource1' },
        { title: 'Resource 2', link: 'https://example.com/resource2' },
      ],
    },
    isActive: true,
    hubId: 4,
  },
  success: true,
};
