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

    const parsedValue =
      value === 'true' ? true : value === 'false' ? false : value;

    dispatch(
      setAnswer({ name: name as keyof typeof answers, value: parsedValue })
    );

    console.log(answers);
  };
  const handleAnswerChangeMultichose = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionId: number
  ) => {
    const { name } = e.target;

    // Obtener las respuestas actuales para esta pregunta
    const currentAnswers = answers[name] || [];

    // Añadir o quitar la opción seleccionada
    const newAnswers = currentAnswers.includes(optionId)
      ? currentAnswers.filter((id: number) => id !== optionId) // Eliminar si ya está seleccionado
      : [...currentAnswers, optionId]; // Añadir si no está seleccionado

    dispatch(setAnswer({ name, value: newAnswers }));
  };

  const handleChangeOptions = (event: SelectChangeEvent<string[]>) => {
    const { value, name } = event.target;
    console.log({ value, name });

    dispatch(setAnswer({ name: name as keyof typeof answers, value }));
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

  return {
    answers,
    handleAnswerChange,
    buttonDisabled,
    handleChangeOptions,
    handleAnswerChangeMultichose,
  };
};
