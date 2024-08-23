'use client';
import React from 'react';
import { Container, Box, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import SignupForm from './components/signupForm';
import { RootState } from '@/src/app/state/store';
import Confirmation from './components/confirmation';

const SignUpPage = () => {
  const { isPasswordCreated, isCodeSent, isOtpVerified, error } = useSelector(
    (state: RootState) => state.auth
  );

  return (
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
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      <Container
        sx={{
          flex: 2,
          pl: { xs: 0, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
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
            width: '100%',
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#f5f5f5',
          }}
        >
          {!isPasswordCreated && <SignupForm />}

          {isPasswordCreated && <Confirmation />}
        </Box>
      </Container>
    </Container>
  );
};

export default SignUpPage;
