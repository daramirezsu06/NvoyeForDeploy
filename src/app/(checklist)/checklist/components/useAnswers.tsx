import { useContext } from 'react';
import { AnswersContext, AnswersContextType } from './answersContext';
export const UseAnswers = (): AnswersContextType => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error('useAnswers debe usarse dentro de un AnswersProvider');
  }
  return context;
};
