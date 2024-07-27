'use client';
import { Container, Box, Alert } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/app/state/store';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  const { error } = useSelector((state: RootState) => state.auth);

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
          <LoginForm></LoginForm>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
