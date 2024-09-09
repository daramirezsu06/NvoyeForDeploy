import { Box, Container, Stack, Button, Divider } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import DropdownMenu1 from './shares/dropdownMenuCopy';
import { UseAnswers } from '../hooks/useAnswers';
import { useMemo } from 'react';

const Pets = ({
  onNext,
  onBack,
  step,
}: {
  onNext: () => void;
  onBack: () => void;
  step: number;
}) => {
  const HousingImage = '/images/Housing.png';

  const questions = useMemo(
    () => [
      {
        id: 1,
        nameState: 'isBringingPets',
        question: 'Will you be bringing any pets with you?',
        inputType: 'radio',
        options: ['Yes', 'No'],
      },
    ],
    []
  );

  const conditionalQuestion = {
    id: 1,
    question: 'Please specify:',
    nameState: 'typeOfPets',
    inputType: 'select',
    multiple: true,
    options: ['Cat', 'Bird', 'Dog', 'Rabbit'],
    condition: {
      stateCondition: 'isBringingPets',
      expectedAnswer: 'Yes',
    },
  };

  const conditionalQuestion2 = {
    id: 2,
    question: 'Are you considering adopting a pet upon arrival?',
    nameState: 'wantAdoptingPet',
    inputType: 'radio',
    options: ['Yes', 'No', 'Maybe'],
    condition: {
      stateCondition: 'isBringingPets',
      expectedAnswer: 'No',
    },
  };

  const { buttonDisabled, answers, handleAnswerChange, handleChangeOptions } =
    UseAnswers([...questions, conditionalQuestion, conditionalQuestion2]);

  const showTypeOfPetsQuestion = answers.isBringingPets === 'Yes';
  const showWantAdoptingPetQuestion = answers.isBringingPets === 'No';

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
              key={question.nameState}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            >
              {showTypeOfPetsQuestion ? (
                <DropdownMenu1
                  question={conditionalQuestion}
                  key={conditionalQuestion.nameState}
                  answers={answers}
                  handleChangeOptions={handleChangeOptions}
                />
              ) : null}
            </CuestionBase>
          ))}

          {showWantAdoptingPetQuestion && (
            <>
              <Divider />
              <CuestionBase
                question={conditionalQuestion2}
                key={conditionalQuestion2.nameState}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
              />
            </>
          )}

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

export default Pets;
