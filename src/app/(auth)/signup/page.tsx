'use client';
import React from 'react';
import { Container, Box, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import SignupForm from './components/signupForm';
import { RootState } from '@/src/app/state/store';
import Confirmation from './components/confirmation';
import iconnamewhite from '@/src/icons/iconnamewhite.png';

const SignUpPage = () => {
  const { isPasswordCreated, isCodeSent, isOtpVerified, error } = useSelector(
    (state: RootState) => state.auth
  );

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
              zIndex: 20, // Asegura que el logo esté por encima de la imagen grande
              width: '230px', // Ajusta el tamaño del logo
              height: 'auto',
              transform: 'rotate(90deg)',
            }}
          >
            <Image src={iconnamewhite} alt="logo" layout="intrinsic" priority />
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
            src="/images/login_movil.png"
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
        {error && (
          <Alert severity="error" sx={{ margin: 4 }}>
            {error}
          </Alert>
        )}

        {!error && !isOtpVerified && isCodeSent && (
          <Alert severity="info" sx={{ margin: 4 }}>
            Verification code sent to your email
          </Alert>
        )}

        <Box
          sx={{
            maxWidth: 425,
            width: { xs: '90%', sm: '100%' },
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#f5f5f5',
          }}
        >
          {!isPasswordCreated && <SignupForm />}

          {isPasswordCreated && <Confirmation />}
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
