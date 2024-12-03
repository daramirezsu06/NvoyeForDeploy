import { useRedirectionProfile } from '@/src/app/hooks/useRedirectConditional';
import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

export const ProfileCompletion: React.FC = () => {
  // Usamos el hook para obtener la función que hará la redirección condicional
  const redirectToProfile = useRedirectionProfile();

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent={'center'}
      sx={{ width: '100%', height: 350, gap: 2 }}
    >
      <CheckCircleOutline
        sx={{ width: '125px', height: '125px' }}
        color="primary"
      />

      <Typography variant="h4" component={'h4'}>
        You’re in!
      </Typography>
      <Typography variant="body1" align="center" component={'span'}>
        Welcome to Nvoye’s exclusive diplomatic community. Ready to take a look
        around?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={redirectToProfile}
        sx={{ textTransform: 'none' }}
      >
        Access Account
      </Button>
    </Stack>
  );
};
