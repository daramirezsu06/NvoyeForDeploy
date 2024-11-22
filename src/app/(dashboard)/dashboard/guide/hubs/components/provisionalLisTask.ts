export const provisionalListTasks = {
  title: 'Recomended Tasks',
  items: [
    {
      id: 1,
      userId: 1,
      taskTypeId: 1,
      taskStatusId: 1,
      priorityId: 1,
      notes: 'Ensure all migration documents are verified.',
      isActive: true,
      createdAt: '2024-10-24T14:56:02.817Z',
      updatedAt: null,
      taskStatus: {
        name: 'Pending',
        description: 'Task is pending approval',
      },
      taskType: {
        name: 'Open a bank account',
        description: 'Tasks related to opening a bank account',
      },
      priority: {
        name: 'High',
        description: 'Urgent tasks that need immediate attention',
      },
      categories: [
        {
          taskId: null,
          recommendedTaskId: 1,
          categoryId: 2,
          isActive: true,
          category: {
            name: 'Banking',
            description: 'Tasks related to the banking and financial services',
          },
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      taskTypeId: 1,
      taskStatusId: 1,
      priorityId: 1,
      notes: 'Ensure all migration documents are verified.',
      isActive: true,
      createdAt: '2024-10-24T14:56:02.817Z',
      updatedAt: null,
      taskStatus: {
        name: 'Pending',
        description: 'Task is pending approval',
      },
      taskType: {
        name: 'Open a bank account',
        description: 'Tasks related to opening a bank account',
      },
      priority: {
        name: 'High',
        description: 'Urgent tasks that need immediate attention',
      },
      categories: [
        {
          taskId: null,
          recommendedTaskId: 1,
          categoryId: 2,
          isActive: true,
          category: {
            name: 'Banking',
            description: 'Tasks related to the banking and financial services',
          },
        },
      ],
    },
  ],
};
