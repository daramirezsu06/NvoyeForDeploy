'use client';
import { useState } from 'react';
import IntroPage from './components/introPage';
import Housing from './components/Housing';
import PreChecklistCompletion from './components/PreChecklistCompletion';
import { Container, Box } from '@mui/material';
import FamilyCare from './components/FamilyCare';
import Pets from './components/Pets';
import HealthCare from './components/HealthCare';
import Transportation from './components/Transportation';
import GeneralLiving from './components/GeneralLiving';

export default function PreChecklist() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const sections = [
    { component: <IntroPage setStart={handleNext} />, key: 'intro' },
    {
      component: (
        <Housing onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: (
        <FamilyCare onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: <Pets onNext={handleNext} onBack={handleBack} step={step} />,
      key: 'housing',
    },
    {
      component: (
        <HealthCare onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: (
        <Transportation onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: (
        <GeneralLiving onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
  ];

  return !completed ? (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        '@media (min-width: 900px)': {
          flexDirection: 'row',
        },
      }}
    >
      {!completed && sections[step].component}
    </Container>
  ) : (
    <PreChecklistCompletion />
  );
}
