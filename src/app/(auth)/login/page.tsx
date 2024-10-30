'use client';
import { Container, Box, Alert } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/app/state/store';
import LoginForm from './components/LoginForm';
import iconnamewhite from '@/src/icons/iconnamewhite.png';

const LoginPage = () => {
  const { error, isLoggedIn } = useSelector((state: RootState) => state.auth);

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
          }}
        >
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

          transform: { xs: 'translateY(-60px)', sm: 'none' },
        }}
      >
        {error && (
          <Alert severity="error" sx={{ margin: 4 }}>
            {typeof error === 'string'
              ? error
              : 'Ha ocurrido un error inesperado.'}
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
          <LoginForm></LoginForm>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
