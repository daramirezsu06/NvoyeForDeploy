import { SelectChangeEvent } from '@mui/material';
import React, { createContext, useState } from 'react';

// Definir el tipo de contexto
export interface AnswersContextType {
  answers: { [key: string]: string };
  handleAnswerChange: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => void;
}

// Crear el contexto con un valor por defecto
export const AnswersContext = createContext<AnswersContextType | undefined>(
  undefined
);

// Crear un proveedor para el contexto
export const AnswersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    console.log('hola');
    console.log(answers);

    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  return (
    <AnswersContext.Provider value={{ answers, handleAnswerChange }}>
      {children}
    </AnswersContext.Provider>
  );
};
