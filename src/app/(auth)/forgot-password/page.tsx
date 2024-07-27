'use client';

import { Container, Box, Alert } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/app/state/store';
import ForgotPasswordForm from './components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  const { isOtpSent, isOtpVerified, error } = useSelector(
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
          flexDirection: 'column',
        }}
      >
        {isOtpSent && !isOtpVerified && (
          <Alert severity="info" sx={{ margin: 4 }}>
            Recovery code sent to your email.
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ margin: 4 }}>
            {error}
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
          <ForgotPasswordForm></ForgotPasswordForm>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
