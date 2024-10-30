import { AnswersState } from '../../redux/checkListSlice';

interface Option {
  id: number;
  name: string;
  description?: string;
  value?: boolean;
}

interface Condition {
  stateCondition: keyof AnswersState;
  expectedAnswer: boolean | string | number;
}

export interface Question {
  id: number;
  nameState: keyof AnswersState;
  question: string;
  smallQuestion?: string;
  inputType: 'radio' | 'select' | 'text';
  options: Option[];
  multiple?: boolean;
  condition?: Condition;
}
