import { useRedirectionProfile } from '@/src/app/hooks/useRedirectConditional';
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
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 100,
          },
          height: {
            xs: 100,
            sm: 100,
          },
          borderRadius: '100%',
          bgcolor: '#3f51b5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '48px',
        }}
      >
        ✓
      </Box>
      <Typography variant="h4" component={'h4'}>
        You’re in!
      </Typography>
      <Typography variant="body1" align="center" component={'span'}>
        Welcome to Nvoy’s exclusive diplomatic community. Ready to take a look
        around?
      </Typography>
      <Button variant="contained" color="primary" onClick={redirectToProfile}>
        Access Account
      </Button>
    </Stack>
  );
};
