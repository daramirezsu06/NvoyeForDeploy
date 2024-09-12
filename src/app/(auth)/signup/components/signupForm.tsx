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
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { useAppDispatch } from '@/src/app/state/hooks';
import { RootState } from '@/src/app/state/store';
import { useSelector } from 'react-redux';

import { setPassword, signUp, verifyOtp } from '../../redux';
import {
  IValidateInput,
  validatefield,
} from '@/src/utils/validation.ts/validateForm';
import { fields } from '@/src/utils/validation.ts/fieldsValidation';

export default function SignupForm() {
  const dispatch = useAppDispatch();
  const { isCodeSent, isOtpVerified, error } = useSelector(
    (state: RootState) => state.auth
  );
  const [email, setEmail] = useState('');
  const [userTypeId, setUserType] = useState(2); // hardcoded for now
  const [code, setOtp] = useState<string>('');
  const [password, setNewPassword] = useState<string>('');
  const [inputError, setError] = useState<IValidateInput[]>([]);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isOtpVerified) {
      dispatch(setPassword({ email, code, password }));
    } else if (isCodeSent) {
      dispatch(verifyOtp({ email, code }));
    } else {
      dispatch(signUp({ email, userTypeId }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(Number(event.target.value));
    console.log(userTypeId);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setError(validatefield(name as keyof typeof fields, value));

    console.log(inputError);

    setNewPassword(value);
  };

  return (
    <Container component="main" maxWidth="md">
      {/* <CssBaseline /> */}
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography sx={{ mb: 4 }} component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <form onSubmit={handleSignUp}>
            {!isCodeSent && (
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Join as</FormLabel>
                <RadioGroup
                  row
                  value={userTypeId}
                  onChange={handleUserTypeChange}
                >
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Diplomat"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="Service Provider"
                  />
                </RadioGroup>
              </FormControl>
            )}
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
              disabled={isCodeSent}
            />

            {isCodeSent && !isOtpVerified && (
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
                  onChange={handleOtpChange}
                  InputProps={{
                    sx: { borderRadius: '16px', marginBottom: 2 },
                  }}
                  required
                />
              </>
            )}

            {isOtpVerified && (
              <>
                <TextField
                  name="password"
                  label="Create your password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  onChange={handlePasswordChange}
                  InputProps={{
                    sx: { borderRadius: '16px', marginBottom: 2 },
                  }}
                  required
                />
                {inputError.map((itemError, index) => (
                  <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {itemError.test ? (
                      <Check
                        color={itemError.test ? 'success' : 'error'}
                        fontSize="small"
                      />
                    ) : (
                      <Close
                        color={itemError.test ? 'success' : 'error'}
                        fontSize="small"
                      />
                    )}

                    <Typography
                      variant="caption"
                      key={index}
                      display="block"
                      color={itemError.test ? 'success.main' : 'error'}
                    >
                      {itemError.textValidation}
                    </Typography>
                  </div>
                ))}
              </>
            )}
            <Button
              disabled={inputError.some((item) => item.test == false)}
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
            disabled={isCodeSent || isOtpVerified}
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
