import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { login } from '../../redux';
import { useAppDispatch, useAppSelector } from '@/src/app/state/hooks';
import { getProfile } from '@/src/app/(dashboard)/redux/profileThunks';
import { selectProfile } from '@/src/app/(dashboard)/redux/profileSlice';
import { useRedirectionProfile } from '@/src/app/hooks/useRedirectConditional';
import Image from 'next/image';

export default function LoginForm() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const redirectToProfile = useRedirectionProfile();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password }));
      const profile = await dispatch(getProfile());
      console.log(
        'profile optenido en el handlelogin de el login form',
        profile
      );
      redirectToProfile(profile.payload.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     console.log('profile', profile);

  //     redirectToProfile();
  //   }
  // }, [profile, isLoggedIn]);

  return (
    <Container component="main" maxWidth="md">
      <Stack sx={{ marginBottom: 4 }}>
        <Typography align="center" variant="h4">
          Log in
        </Typography>
      </Stack>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email address"
          type="email"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 2 },
          }}
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 1 },
          }}
          onChange={handlePasswordChange}
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />
        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5 }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Log in
        </Button>
        <Divider>Or</Divider>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <Image
              src="/images/google_icon.png"
              alt="Google"
              width={24}
              height={24}
              priority
            />
          }
          sx={{ mt: 2, mb: 2 }}
        >
          Continue with Google
        </Button>
        <Typography align="center" variant="body2">
          Having trouble logging in?
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="/forgot-password">Reset password</Link> or{' '}
          <Link href="#">Visit our help center</Link>
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          New to Nvoye?
          <Link href="/signup">Create an account</Link>
        </Typography>
      </form>
    </Container>
  );
}
