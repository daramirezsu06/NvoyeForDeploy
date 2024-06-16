import { Box, Button, Stack, Typography } from '@mui/material';

export const ProfileCompletion: React.FC = () => (
  <Stack spacing={2} alignItems="center">
    <Box
      sx={{
        width: 100,
        height: 100,
        borderRadius: '50%',
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
    <Typography variant="h4">You’re in!</Typography>
    <Typography variant="body1" align="center">
      Welcome to Nvoy’s exclusive diplomatic community. Ready to take a look
      around?
    </Typography>
    <Button variant="contained" color="primary">
      Access Account
    </Button>
  </Stack>
);
