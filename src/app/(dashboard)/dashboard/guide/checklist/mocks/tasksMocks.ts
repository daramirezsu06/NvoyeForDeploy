export interface IBackendTasks {
  id: number;
  userId?: number;
  taskTypeId?: number;
  taskStatusId: number;
  remindDate: string | null;
  dueDate: string | null;
  priorityId: number | undefined;
  documents: IDocument[];
  notes: string;
  subTasks: ISubTask[];
  customTitle: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  taskStatus: ITaskStatus;
  taskType: ITaskType;
  priority: IPriority;
  categories?: ICategory[] | undefined;
}

export interface IDocument {
  url?: string;
  name: string;
}

export interface ISubTask {
  title: string;
  status: string;
}

interface ITaskStatus {
  name: string;
  description: string;
}

interface ITaskType {
  name: string;
  description: string;
}

export interface IPriority {
  name: string;
  description: string;
}

export interface ICategory {
  categoryId: number;
  category: ICategoryDetail;
}

export interface ICategoryDetail {
  name: string;
  description: string;
}

export const backendTasksListMock: IBackendTasks[] = [
  {
    id: 2,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 3,
    remindDate: '2024-11-15T09:00:00.000Z',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 1,
    documents: [],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Gather necessary documents', status: 'in-progress' },
      { title: 'Submit application', status: 'not-started' },
    ],
    customTitle: 'Country Y Visa Application',
    isActive: true,
    createdAt: '2024-10-25T13:33:02.880Z',
    updatedAt: null,
    taskStatus: {
      name: 'Completed',
      description: 'Task has been completed successfully',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task involves completing and submitting the necessary documents for obtaining a visa for Country Y. It includes gathering and organizing all required paperwork for a smooth visa process.',
    },
    priority: {
      name: 'High',
      description: 'Urgent tasks that need immediate attention',
    },
    categories: [],
  },
  {
    id: 8,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 3,
    remindDate: '2024-11-15T09:00:00.000Z',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 1,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Gather necessary documents', status: 'in-progress' },
      { title: 'Submit application', status: 'not-started' },
    ],
    customTitle: 'Visa Processing for Country Z',
    isActive: true,
    createdAt: '2024-10-26T04:14:11.486Z',
    updatedAt: null,
    taskStatus: {
      name: 'Completed',
      description: 'Task has been completed successfully',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task includes the process of organizing and submitting documentation required for visa processing in Country Z. This step is critical to ensure entry and residency permissions are granted.',
    },
    priority: {
      name: 'High',
      description: 'Urgent tasks that need immediate attention',
    },
    categories: [],
  },
  {
    id: 9,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 1,
    remindDate: '2024-11-15T09:00:00.000Z',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 2,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Complete paperwork', status: 'in-progress' },
      { title: 'Schedule appointment', status: 'not-started' },
    ],
    customTitle: 'Citizenship Documents Verification',
    isActive: true,
    createdAt: '2024-10-26T04:14:36.056Z',
    updatedAt: null,
    taskStatus: { name: 'Pending', description: 'Task is pending approval' },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task focuses on verifying documents for citizenship application. It includes a detailed review of all documents and ensures compliance with legal requirements for citizenship.',
    },
    priority: {
      name: 'Medium',
      description: 'Tasks that are important but not urgent',
    },
    categories: [
      {
        categoryId: 1,
        category: {
          name: 'Diplomatic Mission',
          description: 'Tasks related to setting up diplomatic missions abroad',
        },
      },
      {
        categoryId: 2,
        category: {
          name: 'Legal Documentation',
          description:
            'Tasks related to the legal documentation required for migration',
        },
      },
    ],
  },
  {
    id: 10,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 2,
    remindDate: '2024-11-15T09:00:00.000Z',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 3,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Prepare financial reports', status: 'in-progress' },
      { title: 'Submit budget proposal', status: 'not-started' },
    ],
    customTitle: 'Budget Report Submission',
    isActive: true,
    createdAt: '2024-10-26T04:16:25.325Z',
    updatedAt: null,
    taskStatus: {
      name: 'In Progress',
      description: 'Task is currently in progress',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task entails the preparation and submission of a comprehensive budget report, essential for financial planning and resource allocation in the embassy setup.',
    },
    priority: { name: 'Low', description: 'Tasks that can be addressed later' },
    categories: [],
  },
  {
    id: 11,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 1,
    remindDate: '',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 1,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Gather necessary documents', status: 'in-progress' },
      { title: 'Submit application', status: 'not-started' },
    ],
    customTitle: 'Employee Transfer Documents',
    isActive: true,
    createdAt: '2024-10-26T04:17:43.715Z',
    updatedAt: null,
    taskStatus: { name: 'Pending', description: 'Task is pending approval' },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task involves organizing and completing documents required for the employee transfer process. It ensures smooth relocation and adherence to all relevant policies.',
    },
    priority: {
      name: 'High',
      description: 'Urgent tasks that need immediate attention',
    },
    categories: [
      {
        categoryId: 1,
        category: {
          name: 'Diplomatic Mission',
          description: 'Tasks related to setting up diplomatic missions abroad',
        },
      },
      {
        categoryId: 2,
        category: {
          name: 'Legal Documentation',
          description:
            'Tasks related to the legal documentation required for migration',
        },
      },
    ],
  },
  {
    id: 12,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 2,
    remindDate: '2024-11-15T09:00:00.000Z',
    dueDate: '',
    priorityId: 2,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Plan itinerary', status: 'in-progress' },
      { title: 'Confirm reservations', status: 'not-started' },
    ],
    customTitle: 'International Meeting Preparation',
    isActive: true,
    createdAt: '2024-10-26T04:18:36.798Z',
    updatedAt: null,
    taskStatus: {
      name: 'In Progress',
      description: 'Task is currently in progress',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task is dedicated to preparing for an upcoming international meeting, including travel arrangements, document readiness, and meeting logistics for successful diplomatic engagement.',
    },
    priority: {
      name: 'Medium',
      description: 'Tasks that are important but not urgent',
    },
    categories: [
      {
        categoryId: 1,
        category: {
          name: 'Diplomatic Mission',
          description: 'Tasks related to setting up diplomatic missions abroad',
        },
      },
      {
        categoryId: 3,
        category: {
          name: 'International Cooperation',
          description:
            'Tasks involving partnerships and cooperation with other nations',
        },
      },
    ],
  },
  {
    id: 13,
    userId: 1,
    taskTypeId: 2,
    taskStatusId: 3,
    remindDate: '',
    dueDate: '2024-12-01T17:00:00.000Z',
    priorityId: 3,
    documents: [
      { url: 'https://example.com/documents/passport.pdf', name: 'Passport' },
      { url: 'https://example.com/documents/visa.pdf', name: 'Visa' },
    ],
    notes: 'Ensure all documents are submitted before the due date.',
    subTasks: [
      { title: 'Plan activities', status: 'in-progress' },
      { title: 'Organize resources', status: 'not-started' },
    ],
    customTitle: 'Event Planning for National Holiday',
    isActive: true,
    createdAt: '2024-10-26T04:19:08.477Z',
    updatedAt: null,
    taskStatus: {
      name: 'Completed',
      description: 'Task has been completed successfully',
    },
    taskType: {
      name: 'Embassy Establishment',
      description:
        'This task involves the detailed planning and organization of an event to celebrate a national holiday, ensuring all logistics, activities, and resources are coordinated efficiently for a successful event.',
    },
    priority: { name: 'Low', description: 'Tasks that can be addressed later' },
    categories: [
      {
        categoryId: 2,
        category: {
          name: 'Legal Documentation',
          description:
            'Tasks related to the legal documentation required for migration',
        },
      },
    ],
  },
];
