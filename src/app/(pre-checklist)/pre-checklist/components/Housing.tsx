import { Box, Container, Stack, Button } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { useMemo } from 'react';
import { UseAnswers } from '../hooks/useAnswers';

const Housing = ({
  onNext,
  onBack,
  step,
}: {
  onNext: () => void;
  onBack: () => void;
  step: number;
}) => {
  const questions = useMemo(
    () => [
      {
        id: 1,
        nameState: 'hepWhenArrive',
        question: 'Would you like help finding housing when you arrive?',
        smallQuestion:
          'Tell us more about you to help us make your journey better and more personalized?',
        inputType: 'radio',
        options: ['Yes, I need assistance', "It's already taken care of"],
      },
    ],
    []
  );
  const { buttonDisabled, answers, handleAnswerChange } = UseAnswers(questions);
  const HousingImage = '/images/Housing.png';

  return (
    <>
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src={HousingImage}
          alt="Profile image"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Container
        sx={{
          flex: 1,
          py: 6,
          px: 6,
        }}
      >
        <ProgressLine step={step} />

        <Box
          sx={{
            maxWidth: 624,
            width: '100%',
            padding: 6,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            borderRadius: 4,
            backgroundColor: theme.custom.paperElevationTwo,
          }}
        >
          {questions.map((question) => (
            <CuestionBase
              question={question}
              key={question.id}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            />
          ))}

          <Stack direction="row" justifyContent="end" spacing={4}>
            <Button
              sx={{ px: 3, py: 1, borderRadius: 1 }}
              variant="outlined"
              onClick={onBack}
              disabled={false}
            >
              <ChevronLeft /> Back
            </Button>
            <Button
              variant="contained"
              sx={{ px: 3, py: 1, borderRadius: 1 }}
              disabled={buttonDisabled}
              onClick={onNext}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Housing;
