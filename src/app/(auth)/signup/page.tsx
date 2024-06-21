'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import Image from 'next/image';
import SignUp from './components/SignUp'; // Ensure the correct path to the SignUp component

const SignUpPage = () => {
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
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
      <Box
        sx={{
          flex: 2,
          pl: { xs: 0, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
          <SignUp />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
