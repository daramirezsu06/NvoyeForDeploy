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

export interface ITask {
  id: number;
  userId: number;
  title: string;
  description?: string;
  taskStatus: ITaskStatus;
  category?: string[];
  hasNote: boolean;
  note?: string;
  hasDueDate?: boolean;
  dueDate?: string;
  priority: IPriority;
  hasAttachment: boolean;
  attachment?: string;
  createdDate?: string;
  hasReminder?: boolean;
  reminderDate?: string;
}

export const tasksListMock: ITask[] = [
  {
    id: 1,
    userId: 1,
    title: 'EHIC registration',
    description:
      'Register for the EHIC online application. Fill in the form and submit it.',
    taskStatus: {
      name: 'Pending',
      description: 'Task is pending approval',
    },
    category: ['Healthcare'],
    hasNote: false,
    hasAttachment: false,
    priority: {
      name: 'Low',
      description: 'Tasks that can be addressed later',
    },
  },
  {
    id: 2,
    userId: 1,
    title: 'Find resident GP',
    description: 'Find a GP in your area. Fill in the form and submit it.',
    taskStatus: {
      name: 'In Progress',
      description: 'Task is currently in progress',
    },
    category: ['Living'],
    hasNote: false,
    hasAttachment: false,
    priority: {
      name: 'Low',
      description: 'Tasks that can be addressed later',
    },
  },
  {
    id: 3,
    userId: 1,
    title: 'Museum card collection',
    description: 'Collect the card ',
    taskStatus: {
      name: 'Pending',
      description: 'Task is pending approval',
    },
    category: ['Living'],
    hasNote: false,
    hasAttachment: false,
    priority: {
      name: 'Medium',
      description: 'Tasks that are important but not urgent',
    },
  },
  {
    id: 4,
    userId: 1,
    title: 'Purchase vehicle insurance',
    description: 'This is important so you can move around with your car.',
    taskStatus: {
      name: 'Pending',
      description: 'Task is pending approval',
    },
    category: ['Transport'],
    hasNote: false,
    hasAttachment: false,
    priority: {
      name: 'High',
      description: 'Urgent tasks that need immediate attention',
    },
  },
  {
    id: 5,
    userId: 1,
    title: 'Purchase local transport ticket',
    description: 'This is important so you can move around in the city.',
    taskStatus: {
      name: 'Completed',
      description: 'Task has been completed successfully',
    },
    category: ['Transport'],
    hasNote: false,
    hasAttachment: false,
    priority: {
      name: 'High',
      description: 'Urgent tasks that need immediate attention',
    },
  },
];
