import { Box, Container, Stack, Button } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { UseAnswers } from '../hooks/useAnswers';
import DropdownMenu1 from './shares/dropdownMenuCopy';

const HealthCare = ({
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
      nameState: 'hasHealthInsurance',
      question: 'Do you have health insurance?',
      smallQuestion:
        'It could be a health insurance from your home country or an international health insurance',
      inputType: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 2,
      nameState: 'hasChronicConditions',
      question: 'Any chronic or medical conditions?',
      smallQuestion:
        'Please let us know if you, your partner, or children have any chronic or medical conditions',
      inputType: 'radio',
      options: ['Yes', 'No'],
    },
  ];

  const conditionalQuestion = {
    id: 1,
    question: 'Please specify:',
    inputType: 'select',
    nameState: 'TypeOfInsurance',
    multiple: false,
    options: ['Home country insurance', 'International insurance'],
    condition: {
      stateCondition: 'hasHealthInsurance',
      expectedAnswer: 'Yes',
    },
  };
  const conditionalQuestion2 = {
    id: 1,
    question: 'Please specify:',
    nameState: 'ChronicConditions',
    inputType: 'select',
    multiple: true,
    options: ['Cancer', 'Diabetes', 'Hypertension', 'Asthma'],
    condition: {
      stateCondition: 'hasChronicConditions',
      expectedAnswer: 'Yes',
    },
  };
  const { answers, handleAnswerChange, buttonDisabled, handleChangeOptions } =
    UseAnswers([...questions, conditionalQuestion, conditionalQuestion2], true);

  const showTypeOfInsurance = answers.hasHealthInsurance === 'Yes';
  const showChronicConditions = answers.hasChronicConditions === 'Yes';

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
            <CuestionBase
              question={questions[0]}
              key={questions[0].nameState}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            >
              {showTypeOfInsurance && (
                <DropdownMenu1
                  question={conditionalQuestion}
                  key={conditionalQuestion.nameState}
                  answers={answers}
                  handleChangeOptions={handleChangeOptions}
                />
              )}
            </CuestionBase>
            <CuestionBase
              question={questions[1]}
              key={questions[1].nameState}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
            >
              {showChronicConditions && (
                <DropdownMenu1
                  question={conditionalQuestion2}
                  key={conditionalQuestion2.nameState}
                  answers={answers}
                  handleChangeOptions={handleChangeOptions}
                />
              )}
            </CuestionBase>

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

export default HealthCare;
