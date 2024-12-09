import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
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
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function LoginForm() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const redirectToProfile = useRedirectionProfile();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
        {/* <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 1 },
          }}
          onChange={handlePasswordChange}
          required
          
        /> */}
        <FormControl
          sx={{ width: '100%', marginBottom: 1 }}
          variant="outlined"
          required
          onChange={handlePasswordChange}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            sx={{
              borderRadius: '16px',
              // '& .MuiOutlinedInput-notchedOutline': {
              //   borderRadius: '16px',
              // },
            }}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />
        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5, textTransform: 'none' }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Log in
        </Button>
        <Divider>Or</Divider>
        {/* //TODO give function to this button */}
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
          sx={{ mt: 2, mb: 2, textTransform: 'none' }}
        >
          Continue with Google
        </Button>
        <Typography align="center" variant="body2">
          Having trouble logging in?
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="/forgot-password">Reset password</Link> or{' '}
          {/* //TODO give link to this link */}
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
