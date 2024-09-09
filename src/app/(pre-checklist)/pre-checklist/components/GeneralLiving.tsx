import { Box, Container, Stack, Button } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { UseAnswers } from '../hooks/useAnswers';

const GeneralLiving = ({
  onNext,
  onBack,
  step,
}: {
  onNext: () => void;
  onBack: () => void;
  step: number;
}) => {
  const HousingImage = '/images/Housing.png';
  const questions = [
    {
      id: 1,
      nameState: 'hobbiesAndActivities',
      question: 'What are your hobbies and favorite activities?',
      smallQuestion:
        'Feel free to select multiple options for both your hobbies and activities.',
      inputType: 'select',
      multiple: true,
      options: [
        'Reading',
        'Cooking',
        'Traveling',
        'Photography',
        'Gardening',
        'Hiking',
      ],
    },
  ];
  const { buttonDisabled, answers, handleAnswerChange } = UseAnswers(questions);
  return (
    <>
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
                Complete
              </Button>
            </Stack>
          </Box>
        </Container>
      </>
    </>
  );
};

export default GeneralLiving;
