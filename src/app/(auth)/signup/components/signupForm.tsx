import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from '@/src/app/state/store';

export default function SignupForm() {
  const dispatch = useAppDispatch();
  const { isCodeSent, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState(2);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signUp({ email, userType }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Email address"
              type="email"
              fullWidth
              variant="outlined"
              onChange={handleEmailChange}
              InputProps={{
                sx: { borderRadius: '16px', marginBottom: 2 },
              }}
              required
            />
            {isCodeSent && (
              <>
                <Typography variant="subtitle2" align="center">
                  We have sent a verification code to your email
                </Typography>
                <Typography variant="caption" align="center">
                  Please check your inbox and paste the signup code below
                </Typography>

                <TextField
                  label="Enter verification code"
                  type="text"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: '16px', marginBottom: 2 },
                  }}
                  required
                />
              </>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isCodeSent ? 'Continue' : 'Sign Up'}
            </Button>
          </form>
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
