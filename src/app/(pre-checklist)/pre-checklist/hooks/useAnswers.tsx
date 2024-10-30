import { useAppDispatch, useAppSelector } from '@/src/app/state/hooks';
import {
  AnswersState,
  selectAnswers,
  setAnswer,
} from '../../redux/checkListSlice';
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Question } from '../types/question.types';

export const UseAnswers = (
  questions: Question[],
  trackButton: boolean = true
) => {
  const answers = useAppSelector(selectAnswers);
  const dispatch = useAppDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;

    const parsedValue =
      value === 'true' ? true : value === 'false' ? false : value;

    // Asegúrate de que `name` es una clave válida en AnswersState
    dispatch(
      setAnswer({ name: name as keyof AnswersState, value: parsedValue })
    );

    console.log(answers);
  };

  const handleAnswerChangeMultichose = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionId: number
  ) => {
    const { name } = e.target;

    const currentAnswers = (answers[name as keyof AnswersState] ||
      []) as number[];

    const newAnswers = currentAnswers.includes(optionId)
      ? currentAnswers.filter((id: number) => id !== optionId)
      : [...currentAnswers, optionId];

    dispatch(
      setAnswer({ name: name as keyof AnswersState, value: newAnswers })
    );
  };

  const handleChangeOptions = (event: SelectChangeEvent<number | number[]>) => {
    const { value, name } = event.target;
    console.log({ value, name });

    // Asegúrate de que `name` es una clave válida en AnswersState
    dispatch(setAnswer({ name: name as keyof AnswersState, value }));
  };

  useEffect(() => {
    const shouldQuestionBeAnswered = (question: Question) => {
      if (!question.condition) {
        return true;
      }

      const { stateCondition, expectedAnswer } = question.condition;
      return answers[stateCondition] === expectedAnswer;
    };

    if (trackButton) {
      const allQuestionsAnswered = questions.every((question) => {
        if (!shouldQuestionBeAnswered(question)) {
          return true;
        }

        const answer = answers[question.nameState];
        return answer !== undefined && answer !== null;
      });

      setButtonDisabled(!allQuestionsAnswered);
    }
  }, [answers, questions, trackButton]);

  return {
    answers,
    handleAnswerChange,
    buttonDisabled,
    handleChangeOptions,
    handleAnswerChangeMultichose,
  };
};
