import React, { useState } from 'react';

import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '@/src/app/state/hooks';
import { RootState } from '@/src/app/state/store';
import { useSelector } from 'react-redux';
import { sendOtp, verifyOtp, setPassword } from '../../redux';

export default function ForgotPasswordForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [code, setOtp] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { isOtpSent, isOtpVerified } = useSelector(
    (state: RootState) => state.auth
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleForgotPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isOtpVerified) {
      dispatch(setPassword({ email, code, password: newPassword }));
    } else if (isOtpSent) {
      dispatch(verifyOtp({ email, code }));
    } else {
      dispatch(sendOtp({ email }));
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" sx={{ marginBottom: 1 }}>
        Forgot your password?
      </Typography>
      {isOtpSent && !isOtpVerified && (
        <Typography variant="body1" align="center" gutterBottom>
          Don’t worry, it happens to the best of us.
        </Typography>
      )}
      <form onSubmit={handleForgotPassword}>
        {!isOtpVerified && (
          <TextField
            label="Email address"
            type="email"
            fullWidth
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '16px', marginBottom: 1 },
            }}
            onChange={handleEmailChange}
            required
            margin="normal"
          />
        )}

        {isOtpSent && !isOtpVerified && (
          <Stack>
            <Typography variant="subtitle2" align="center">
              We have sent a recovery code to your email
            </Typography>
            <Typography variant="caption" align="center">
              Please check your inbox and paste the recovery code below
            </Typography>
            <TextField
              label="Enter recovery code"
              type="password"
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { borderRadius: '16px', marginBottom: 1.5 },
              }}
              onChange={handleOtpChange}
              required
              margin="normal"
            />
          </Stack>
        )}

        {isOtpVerified && (
          <Stack>
            <TextField
              label="Enter new password"
              type="password"
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { borderRadius: '16px', marginBottom: 1 },
              }}
              onChange={handleNewPasswordChange}
              required
              margin="normal"
            />
            <TextField
              label="Confirm password"
              type="password"
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { borderRadius: '16px', marginBottom: 1.5 },
              }}
              onChange={handleConfirmPasswordChange}
              required
              margin="normal"
            />
          </Stack>
        )}

        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5 }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          {isOtpVerified
            ? 'Update password'
            : isOtpSent
              ? 'Request recovery mode'
              : 'Submit code'}
        </Button>

        {isOtpSent && !isOtpVerified && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ marginBottom: 1.5 }}
          >
            <Typography variant="subtitle2">
              Didnt receive your email?
            </Typography>
            <Button variant="text" color="primary" size="small">
              Resend code in 50s
            </Button>
          </Stack>
        )}

        <Stack sx={{ marginBottom: 1.5 }}>
          <Typography variant="body1" align="center" gutterBottom>
            Having trouble?
          </Typography>
          <Typography align="center">
            <Link href="#" variant="body2" align="center">
              Visit our help center
            </Link>
          </Typography>
        </Stack>
        {!isOtpVerified && (
          <Typography align="center">
            <Link href="/login" variant="body2" align="center">
              Back to log in
            </Link>
          </Typography>
        )}
      </form>
    </Container>
  );
}
