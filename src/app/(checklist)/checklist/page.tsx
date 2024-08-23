'use client';
import { Container, Box } from '@mui/material';
import QuestionContainer from './components/principalContainer';
import { AnswersProvider } from './components/answersContext';
import GetStarted from './components/getStarted';
import { useState } from 'react';

export default function Checklist() {
  const [start, setStart] = useState(false);
  return (
    <AnswersProvider>
      <Container
        sx={{
          display: 'flex',
          height: '100vh',
        }}
      >
        {start ? <QuestionContainer /> : <GetStarted setStart={setStart} />}
      </Container>
    </AnswersProvider>
  );
}
