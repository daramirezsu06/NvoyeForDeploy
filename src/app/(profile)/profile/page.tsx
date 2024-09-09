'use client';
import { Container, Box } from '@mui/material';
import Image from 'next/image';
import LanguageSkills from './components/LanguageSkills';
import MissionDetails from './components/MissionDetails';
import IdentityEssentials from './components/IdentityEssentials';
import { useState } from 'react';
import { ProfileCompletion } from './components/ProfileCompletion';

export default function Profile() {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < 3) {
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

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          height: '100vh',
          padding: 0,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box sx={{ flex: 1, position: 'relative' }}>
          <Image
            src="/images/sign_up.png"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box
          sx={{
            flex: 2,
            pl: { xs: 0, sm: 4 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              maxWidth: 425,
              width: '100%',
              padding: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: '#f5f5f5',
            }}
          >
            {!completed && step === 1 && (
              <MissionDetails onNext={handleNext} step={step} />
            )}
            {!completed && step === 2 && (
              <IdentityEssentials
                onNext={handleNext}
                onBack={handleBack}
                step={step}
              />
            )}
            {!completed && step === 3 && (
              <LanguageSkills
                onBack={handleBack}
                onNext={handleNext}
                step={step}
              />
            )}
            {completed && <ProfileCompletion />}
          </Box>
        </Box>
      </Container>
    </>
  );
}
