import { Box, Button, Container, Typography } from '@mui/material';

export default function Confirmation() {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center">
        Account Created!
      </Typography>
      <Typography variant="body1" align="center">
        Just a few more questions to help us complete your profile.
      </Typography>
      <Box textAlign="center">
        <Button variant="contained" sx={{ borderRadius: 2 }}>
          Continue
        </Button>
      </Box>
    </Container>
  );
}
