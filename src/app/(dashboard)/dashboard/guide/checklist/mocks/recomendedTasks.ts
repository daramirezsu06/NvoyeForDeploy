interface ITaskCategory {
  taskId: number | null;
  recommendedTaskId: number;
  categoryId: number;
  isActive: boolean;
  category: {
    name: string;
    description: string;
  };
}

interface ITaskStatus {
  name: string;
  description: string;
}

interface ITaskType {
  name: string;
  description: string;
}

interface IPriority {
  name: string;
  description: string;
}

export interface IRecomendedTask {
  id: number;
  userId: number;
  taskTypeId: number;
  taskStatusId: number;
  priorityId: number;
  notes: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  taskStatus: ITaskStatus;
  taskType: ITaskType;
  priority: IPriority;
  categories: ITaskCategory[];
}

export const recomendedTasksMocks: IRecomendedTask[] = [
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
      name: 'Visa Processing',
      description: 'Tasks related to processing diplomat visas',
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
          name: 'Legal Documentation',
          description:
            'Tasks related to the legal documentation required for migration',
        },
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 2,
    priorityId: 2,
    notes: 'Complete embassy establishment tasks.',
    isActive: true,
    createdAt: '2024-10-24T14:56:02.817Z',
    updatedAt: null,
    taskStatus: {
      name: 'In Progress',
      description: 'Task is currently in progress',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'Tasks related to establishing a new embassy in a foreign country',
    },
    priority: {
      name: 'Medium',
      description: 'Tasks that are important but not urgent',
    },
    categories: [
      {
        taskId: null,
        recommendedTaskId: 2,
        categoryId: 1,
        isActive: true,
        category: {
          name: 'Diplomatic Mission',
          description: 'Tasks related to setting up diplomatic missions abroad',
        },
      },
    ],
  },
  {
    id: 3,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 3,
    priorityId: 3,
    notes: 'Finalize diplomat housing arrangement.',
    isActive: true,
    createdAt: '2024-10-24T14:56:02.817Z',
    updatedAt: null,
    taskStatus: {
      name: 'Completed',
      description: 'Task has been completed successfully',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'Tasks related to establishing a new embassy in a foreign country',
    },
    priority: {
      name: 'Low',
      description: 'Tasks that can be addressed later',
    },
    categories: [],
  },
];
