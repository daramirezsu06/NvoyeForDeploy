'use client';

import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  Drawer,
} from '@mui/material';
import CuestionBase from './shares/cuestionBase';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import theme from '@/src/app/theme';
import ProgressLine from './shares/progressLine';
import { UseAnswers } from '../hooks/useAnswers';
import Brandlogo from '@/src/icons/BrandLogo';
import CuestionBaseMultichose from './shares/cuestionBaseMultiChose';
import { Question } from '../types/question.types';
import { useState } from 'react';

const GeneralLiving = ({
  onNext,
  onBack,
  step,
  hobbies,
}: {
  onNext: () => void;
  onBack: () => void;
  step: number;
  hobbies: { id: number; name: string; description: string }[];
}) => {
  const questions: Question[] = [
    {
      id: 1,
      nameState: 'hobbies',
      question: 'What are your hobbies and favorite activities?',
      smallQuestion:
        'Feel free to select multiple options for both your hobbies and activities.',
      inputType: 'select',
      multiple: true,
      options: hobbies,
    },
  ];
  const { buttonDisabled, answers, handleAnswerChangeMultichose } =
    UseAnswers(questions);

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpenDrawer(newOpen);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        pl: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      <Box sx={{ flex: { xs: '', md: 1 }, position: 'relative' }}>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            height: '100%',
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
            src="/images/living-big.jpg"
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
            <Typography variant="h3" color="#F7910B" component={'h1'}>
              Insight
            </Typography>
            <Typography
              variant="h5"
              color="#FFFFFFDE"
              sx={{
                width: '90%',
              }}
              component={'h2'}
            >
              The Netherlands is a cyclist&apos; paradise with extensive bike
              paths, making it a fun and healthy way to explore the beautiful
              scenery and charming towns, while also serving as a magnet for
              professionals in agriculture tech, life sciences, and
              sustainability, thanks to its focus on innovation and leadership
              in these sectors.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 2, md: 6 },
          transform: { xs: 'translateY(-20px)', sm: 'none' },
          mt: 7,
        }}
      >
        <Button
          size="large"
          color="secondary"
          variant="text"
          endIcon={<ChevronRight />}
          sx={{
            textTransform: 'none',
            fontSize: '1.2rem',
            display: { sx: 'flex', md: 'none' },
          }}
          onClick={toggleDrawer(true)}
        >
          See insight
        </Button>
        <ProgressLine step={step} />
        <Drawer
          open={isOpenDrawer}
          onClose={toggleDrawer(false)}
          anchor="bottom"
        >
          <Box sx={{ flex: { xs: 1, md: 1 }, position: 'relative' }}>
            <Box
              sx={{
                height: '70vh',
                width: '100vw',
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
                src="/images/living-big.jpg"
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
                <Typography variant="h3" color="#F7910B" component={'h1'}>
                  Insight
                </Typography>
                <Typography
                  variant="h5"
                  color="#FFFFFFDE"
                  sx={{
                    width: '90%',
                  }}
                  component={'h2'}
                >
                  The Netherlands is a cyclist&apos; paradise with extensive
                  bike paths, making it a fun and healthy way to explore the
                  beautiful scenery and charming towns, while also serving as a
                  magnet for professionals in agriculture tech, life sciences,
                  and sustainability, thanks to its focus on innovation and
                  leadership in these sectors.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
        <Box
          sx={{
            padding: {
              sx: 4,
              md: 4,
            },
            paddingBottom: {
              xs: 10,
              md: 4,
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 4,
            backgroundColor: {
              xs: theme.custom.paperElevationOne,
              sm: theme.custom.paperElevationTwo,
            },
          }}
        >
          {questions.map((question) => (
            <CuestionBaseMultichose
              question={question}
              key={question.id}
              answers={answers}
              handleAnswerChangeMultichose={handleAnswerChangeMultichose}
            />
          ))}

          <Stack direction="row" justifyContent="end" spacing={4}>
            <Button
              sx={{ px: 3, py: 1, borderRadius: 1, textTransform: 'none' }}
              variant="outlined"
              onClick={onBack}
              disabled={false}
            >
              <ChevronLeft /> Back
            </Button>
            <Button
              variant="contained"
              sx={{ px: 3, py: 1, borderRadius: 1, textTransform: 'none' }}
              disabled={buttonDisabled}
              onClick={onNext}
            >
              Complete
            </Button>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default GeneralLiving;
