import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  Grid,
} from '@mui/material';
import { useAppDispatch } from '@/src/app/state/hooks';
import { signUp } from '../../redux/authSlice';

export default function SignUp() {
  const dispatch = useAppDispatch();

  const handleSignUp = async (event: React.FormEvent) => {
    dispatch(signUp('test@test.nl')); // hardcoded for now
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Divider>Or</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <img
                src="/images/google_icon.png"
                alt="Google"
                style={{ width: 24, height: 24 }}
              />
            }
            sx={{ mt: 2, mb: 2 }}
          >
            Continue with Google
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            By proceeding, you agree to Nvoye's{' '}
            <Link href="#">Terms of Services</Link> and{' '}
            <Link href="#">Privacy Policy</Link>.
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link href="/login">Log in</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
