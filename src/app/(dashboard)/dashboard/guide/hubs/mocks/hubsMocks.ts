import HealthIcon from '@/src/icons/healthicon.png';
import GeneralLiving from '@/src/icons/GeneralLiving.png';
import Housing from '@/src/icons/HousingIcon.png';
import Finance from '@/src/icons/FinanceIcon.png';
import TransportationIcon from '@/src/icons/TransportationIcon.png';
import FamilyIcon from '@/src/icons/FamilyIcon.png';
import EducationIcon from '@/src/icons/EducationIcon.png';
import SafetyIcon from '@/src/icons/SafetyIcon.png';

export const hubMocks = [
  {
    icon: HealthIcon,
    title: 'health',
    topics: 'Systems, Insurance',
  },
  {
    icon: Housing,
    title: 'housing',
    topics: 'Rent, Moving',
  },
  {
    icon: GeneralLiving,
    title: 'general Living',
    topics: 'Geography, Culture',
  },
  {
    icon: Finance,
    title: 'finance',
    topics: 'Banking, Cost of living',
  },
  {
    icon: TransportationIcon,
    title: 'transportation',
    topics: 'Movility, Transport',
  },
  {
    icon: FamilyIcon,
    title: 'family',
    topics: 'Childcare, Pet care',
  },
  {
    icon: EducationIcon,
    title: 'education',
    topics: 'Schooling, Childcare',
  },
  {
    icon: SafetyIcon,
    title: 'safety & Securety',
    topics: 'Inclusivity, Security',
  },
];

export interface IBackendHub {
  id: number;
  name: string;
  description: string;
  tags: string[];
  isActive: boolean;
}

export const backendHubs: IBackendHub[] = [
  {
    id: 1,
    name: 'General Living',
    description: 'Geography, Culture',
    tags: ['Geography', 'Culture'],
    isActive: true,
  },
  {
    id: 2,
    name: 'Transportation',
    description: 'Systems, Finance',
    tags: ['Systems', 'Finance'],
    isActive: true,
  },
  {
    id: 3,
    name: 'Housing',
    description: 'Rent, Moving',
    tags: ['Rent', 'Moving'],
    isActive: true,
  },
  {
    id: 4,
    name: 'Finance',
    description: 'Banking, Cost of living',
    tags: ['Banking', 'Cost of living'],
    isActive: true,
  },
  {
    id: 5,
    name: 'Family',
    description: 'Childcare, Pet care',
    tags: ['Childcare', 'Pet care'],
    isActive: true,
  },
  {
    id: 6,
    name: 'Education',
    description: 'Schooling, Childcare',
    tags: ['Schooling', 'Childcare'],
    isActive: true,
  },
  {
    id: 7,
    name: 'Health',
    description: 'Systems, Insurance',
    tags: ['Systems', 'Insurance'],
    isActive: true,
  },
  {
    id: 8,
    name: 'Safety & Security',
    description: 'Inclusivity, Security',
    tags: ['Inclusivity', 'Security'],
    isActive: true,
  },
];
