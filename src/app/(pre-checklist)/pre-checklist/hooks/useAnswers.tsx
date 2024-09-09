import { useAppDispatch, useAppSelector } from '@/src/app/state/hooks';
import { selectAnswers, setAnswer } from '../../redux/checkListSlice';
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export const UseAnswers = (questions: any[], trackButton: boolean = true) => {
  const answers = useAppSelector(selectAnswers);
  const dispatch = useAppDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    dispatch(setAnswer({ name: name as keyof typeof answers, value }));
    console.log(answers);
  };

  const handleChangeOptions = (event: SelectChangeEvent<string[]>) => {
    const { value, name } = event.target;
    const options = typeof value === 'string' ? value.split(',') : value;
    dispatch(setAnswer({ name: name as keyof typeof answers, value: options }));
  };

  const shouldQuestionBeAnswered = (question) => {
    if (!question.condition) {
      return true;
    }

    const { stateCondition, expectedAnswer } = question.condition;
    return answers[stateCondition] === expectedAnswer;
  };

  useEffect(() => {
    if (trackButton) {
      const allQuestionsAnswered = questions.every((question) => {
        if (!shouldQuestionBeAnswered(question)) {
          return true;
        }

        const answer = answers[question.nameState];
        return answer !== undefined && answer !== null && answer !== '';
      });

      setButtonDisabled(!allQuestionsAnswered);
    }
  }, [answers, questions, trackButton]);

  return { answers, handleAnswerChange, buttonDisabled, handleChangeOptions };
};
