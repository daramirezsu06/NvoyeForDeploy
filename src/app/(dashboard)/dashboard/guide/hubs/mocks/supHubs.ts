import AuxiliarCostIcon from '@/src/icons/subHubs/Auxiliary_cost.svg';
import BankingIcon from '@/src/icons/subHubs/Banking.svg';
import CostOfLivingIcon from '@/src/icons/subHubs/Cost_of_living.svg';
import ForeignCurrencyUsageIcon from '@/src/icons/subHubs/Foreign_currency_usage.svg';
import InvestmentIcon from '@/src/icons/subHubs/Investment.svg';

export const subHubMocks = [
  {
    icon: BankingIcon,
    title: 'Banking',
  },
  {
    icon: ForeignCurrencyUsageIcon,
    title: 'Foreign currency usage',
  },
  {
    icon: CostOfLivingIcon,
    title: 'Cost of living',
  },
  {
    icon: InvestmentIcon,
    title: 'Investment',
  },
  {
    icon: AuxiliarCostIcon,
    title: 'Auxiliary cost',
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
