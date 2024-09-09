import { Box, Container, Stack, Button } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { UseAnswers } from '../hooks/useAnswers';
import DropdownMenu1 from './shares/dropdownMenuCopy';

const Transportation = ({
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
      nameState: 'isTransportingVehicle',
      question: 'Do you plan to transport or move your vehicle?',
      smallQuestion:
        'Choose Yes, if you intend to move a car, bike, or bicycle to your new place of posting.',
      inputType: 'radio',
      options: ['Yes', 'No'],
    },
  ];
  const conditionalQuestion = {
    id: 1,
    question: 'Please specify:',
    nameState: 'typeOfVehicle',
    inputType: 'select',
    multiple: true,
    options: ['Bicycle', 'Car', 'Motorbike'],
    condition: {
      stateCondition: 'isTransportingVehicle',
      expectedAnswer: 'Yes',
    },
  };
  const { buttonDisabled, answers, handleAnswerChange, handleChangeOptions } =
    UseAnswers([...questions, conditionalQuestion]);
  const showTypeOfVehicle = answers.isTransportingVehicle === 'Yes';
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
              >
                {showTypeOfVehicle ? (
                  <DropdownMenu1
                    question={conditionalQuestion}
                    key={conditionalQuestion.nameState}
                    answers={answers}
                    handleChangeOptions={handleChangeOptions}
                  />
                ) : null}
              </CuestionBase>
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
    </>
  );
};

export default Transportation;
