export interface ITask {
  id: number;
  title: string;
  description?: string;
  complete: boolean;
  category?: string[];
  hasNote: boolean;
  note?: string;
  hasDueDate?: boolean;
  dueDate?: string;
  priority: 'Low' | 'Medium' | 'High' | 'No';
  hasAttachment: boolean;
  attachment?: string;
  createdDate?: string;
  hasReminder?: boolean;
  reminderDate?: string;
}

export const tasksList: ITask[] = [
  {
    id: 1,
    title: 'EHIC registration',
    description:
      'Register for the EHIC online application. Fill in the form and submit it.',
    complete: false,
    category: ['Healthcare'],
    hasNote: false,
    hasAttachment: false,
    priority: 'No',
  },
  {
    id: 2,
    title: 'Find resident GP',
    description: 'Find a GP in your area. Fill in the form and submit it.',
    complete: false,
    category: ['Living'],
    hasNote: false,
    hasAttachment: false,
    priority: 'Low',
  },
  {
    id: 3,
    title: 'Museum card collection',
    description: 'Collect the card ',
    complete: false,
    category: ['Living'],
    hasNote: false,
    hasAttachment: false,
    priority: 'Medium',
  },
  {
    id: 4,
    title: 'Purchase vehicle insurance',
    description: 'This is important so you can move around with your car.',
    complete: false,
    category: ['Transport'],
    hasNote: false,
    hasAttachment: false,
    priority: 'High',
  },
  {
    id: 5,
    title: 'Purchase local transport ticket',
    description: 'This is important so you can move around in the city.',
    complete: true,
    category: ['Transport'],
    hasNote: false,
    hasAttachment: false,
    priority: 'High',
  },
];
