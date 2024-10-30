import { Box, Container, Stack, Button, Typography } from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { UseAnswers } from '../hooks/useAnswers';
import DropdownMenu1 from './shares/dropdownMenuCopy';
import Brandlogo from '@/src/icons/BrandLogo';
import GetInsuranceTypes from '@/src/utils/api/prechecklist/getInsuranceType';
import { Question } from '../types/question.types';

const HealthCare = ({
  onNext,
  onBack,
  step,
  insuranceTypes,
  chronicDiseases,
}: {
  onNext: () => void;
  onBack: () => void;
  step: number;
  insuranceTypes: { id: number; name: string; description: string }[];
  chronicDiseases: { id: number; name: string; description: string }[];
}) => {
  const questions: Question[] = [
    {
      id: 1,
      nameState: 'hasHealthInsurance',
      question: 'Do you have health insurance?',
      smallQuestion:
        'It could be a health insurance from your home country or an international health insurance',
      inputType: 'radio',
      options: [
        { id: 1, name: 'yes', value: true },
        { id: 2, name: 'NO', value: false },
      ],
    },
    {
      id: 2,
      nameState: 'hasChronicConditions',
      question: 'Any chronic or medical conditions?',
      smallQuestion:
        'Please let us know if you, your partner, or children have any chronic or medical conditions',
      inputType: 'radio',
      options: [
        { id: 1, name: 'yes', value: true },
        { id: 2, name: 'NO', value: false },
      ],
    },
  ];

  const conditionalQuestion: Question = {
    id: 1,
    question: 'Please specify:',
    inputType: 'select',
    nameState: 'insuranceTypeId',
    multiple: false,
    options: insuranceTypes,
    condition: {
      stateCondition: 'hasHealthInsurance',
      expectedAnswer: true,
    },
  };
  const conditionalQuestion2: Question = {
    id: 1,
    question: 'Please specify:',
    nameState: 'chronicDiseasesId',
    inputType: 'select',
    multiple: false,
    options: chronicDiseases,
    condition: {
      stateCondition: 'hasChronicConditions',
      expectedAnswer: true,
    },
  };
  const { answers, handleAnswerChange, buttonDisabled, handleChangeOptions } =
    UseAnswers([...questions, conditionalQuestion, conditionalQuestion2], true);

  const showTypeOfInsurance = answers.hasHealthInsurance === true;
  const showChronicConditions = answers.hasChronicConditions === true;

  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        pl: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        flexDirection: { xs: 'column', sm: 'row' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'relative',
            height: '100%',
            // width: 700,
          }}
        >
          {' '}
          {/* Logo en la esquina superior izquierda */}
          <Box
            sx={{
              position: 'absolute',
              top: '100px',
              left: '170px',
              zIndex: 20,
              width: '120px',
              height: 'auto',
              scale: '3',
              // transform: 'rotate(90deg)',
            }}
          >
            <Brandlogo />
          </Box>
          <Image
            src="/images/health-big.jpg"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              justifyContent: 'center',
              gap: 4,
              bottom: 100,
              left: 50,
              zIndex: 2,
            }}
          >
            <Typography variant="h3" color="#F7910B">
              Insight
            </Typography>
            <Typography
              variant="h5"
              color="#FFFFFFDE"
              sx={{
                width: '90%',
              }}
            >
              In the Netherlands, while basic health insurance is mandatory and
              covers a lot, dental care for adults is not included in the
              standard package. This means many people in the Netherlands opt
              for additional dental insurance to cover checkups, cleanings, and
              other procedures.
            </Typography>
          </Box>
        </Box>
        {/* Imagen para pantallas pequeñas */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: 'relative',
            height: 350,
            width: '100%',
            transform: { xs: 'translateX(0px)', sm: 'none' },
          }}
        >
          <Image
            src="/images/health-big.jpg"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))',
              zIndex: 1,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              position: 'absolute',
              top: '25%',
              left: '10%',
              // transform: 'translate(-55%, -0%)',
              color: 'white',
              width: '80%',
              // textAlign: 'center',
              fontSize: '1.2rem',
              zIndex: 2,
            }}
          >
            In the Netherlands, while basic health insurance is mandatory and
            covers a lot, dental care for adults is not included in the standard
            package. This means many people in the Netherlands opt for
            additional dental insurance to cover checkups, cleanings, and other
            procedures.
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // justifyItems: 'center',
          padding: { xs: 2, md: 6 }, // Diferente padding para móvil y desktop
          transform: { xs: 'translateY(-20px)', sm: 'none' },
        }}
      >
        <ProgressLine step={step} />

        <Box
          sx={{
            padding: {
              sx: 4,
              sm: 4,
            },
            paddingBottom: {
              xs: 10,
              sm: 4,
            },
            boxShadow: {
              xs: 0,
              sm: 3,
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 4,
            backgroundColor: {
              xs: theme.custom.paperElevationOne,
              sm: theme.custom.paperElevationTwo,
            },

            // width: '90%',
            // margin: 'auto',
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
    </Container>
  );
};

export default HealthCare;
