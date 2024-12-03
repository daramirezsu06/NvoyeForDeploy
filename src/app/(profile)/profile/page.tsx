'use client';
import { Container, Box } from '@mui/material';
import Image from 'next/image';
import LanguageSkills from './components/LanguageSkills';
import MissionDetails from './components/MissionDetails';
import IdentityEssentials from './components/IdentityEssentials';
import { useState } from 'react';
import { ProfileCompletion } from './components/ProfileCompletion';
import iconnamewhite from '@/src/icons/iconnamewhite.png';

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
          {/* Imagen para pantallas grandes */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              position: 'relative',
              height: '100%',
            }}
          >
            {/* Logo en la esquina superior izquierda */}
            <Box
              sx={{
                position: 'absolute',
                top: '100px',
                right: '-70px',
                zIndex: 20,
                width: '230px',
                height: 'auto',
                transform: 'rotate(90deg)',
              }}
            >
              <Image
                src={iconnamewhite}
                alt="logo"
                layout="intrinsic"
                priority
              />
            </Box>

            <Image
              src="/images/sign_up.png"
              alt="Profile image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>

          {/* Imagen para pantallas pequeñas */}
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              position: 'relative',
              height: '140%',
              width: '102%',
              transform: { xs: 'translateX(-2px)', sm: 'none' },
            }}
          >
            <Image
              src="/images/login-movil.png"
              alt="Profile image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 3,
            pl: { xs: 0, sm: 0 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ml: {
              xs: 0,
              sm: 'auto',
            },
            // Mueve el formulario hacia arriba en pantallas pequeñas
            transform: { xs: 'translateY(-60px)', sm: 'none' },
          }}
        >
          <Box
            sx={{
              maxWidth: 425,
              width: { xs: '90%', sm: '100%' },
              padding: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: '#f5f5f5',
              position: 'relative',
              // minHeight: '400px', // Fija una altura mínima
              // maxHeight: '500px', // Fija una altura máxima
              overflowY: 'auto', // Habilita el scroll vertical
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
