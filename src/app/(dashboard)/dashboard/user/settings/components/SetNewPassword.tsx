import {
  IValidateInput,
  validatefield,
} from '@/src/utils/validations/validateForm';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Button,
  Alert,
  AlertTitle,
  Collapse,
} from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {};

export default function SetNewPassword({}: Props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState<IValidateInput[]>([]);
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState<
    IValidateInput[]
  >([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const router = useRouter();

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

  // Función para validar el currentPassword
  const validatePassword = (value: string) => {
    setPassword(value);
    const errors = validatefield('password', value); // Si tienes reglas similares
    setPasswordErrors(errors.filter((err) => !err.test));
  };

  // Función para validar el confirmNewPassword
  const validateConfirmPassword = (value: string) => {
    setConfirmPassword(value);
    const errors = validatefield('confirmNewPassword', value, password); // Pasar newPassword para la comparación
    setConfirmPasswordErrors(errors.filter((err) => !err.test));
  };

  const isFormValid =
    password &&
    confirmPassword &&
    !passwordErrors.length &&
    !confirmPasswordErrors.length;

  //!logic to send the password to backend
  const handleSubmitPassword = () => {
    console.log(password);

    // show succes notification
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
      // redirect to login
      router.push('/login');
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        width: { xs: '100%', md: '566px' },
        // height: { xs: '100%', md: '800px' },
        borderRadius: '16px',
        backgroundColor: '#F8F6F5',
        elevation: 8,
        paddingY: 8,
        paddingX: 3,
        boxShadow: ' 0px 18px 20px 1px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Collapse in={showSuccessAlert}>
        <Alert
          variant="filled"
          severity="success"
          sx={{
            position: 'fixed',
            // left: '520px',
            top: '60px',
            zIndex: 10,
          }}
        >
          <AlertTitle>Password changed!</AlertTitle>
          You will be redirected to the login page.
        </Alert>
      </Collapse>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <Typography variant="h4">Reset your password</Typography>
        <Typography variant="body1">Enter your new password below</Typography>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '384px',
          gap: 2,
        }}
      >
        <FormControl
          variant="outlined"
          error={!!passwordErrors.length}
          sx={{
            alignSelf: 'stretch',
          }}
        >
          <InputLabel htmlFor="password">Enter new password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password} // Controlar el input
            onChange={(e) => validatePassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter new password"
          />
          {!!passwordErrors.length && (
            <FormHelperText>{passwordErrors[0].textValidation}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          variant="outlined"
          error={!!confirmPasswordErrors.length}
          sx={{
            alignSelf: 'stretch',
          }}
        >
          <InputLabel htmlFor="confirm-password">
            Confirm new password
          </InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword} // Controlar el input
            onChange={(e) => validateConfirmPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm new password"
          />
          {!!confirmPasswordErrors.length && (
            <FormHelperText>
              {confirmPasswordErrors[0].textValidation}
            </FormHelperText>
          )}
        </FormControl>

        <Button
          size="large"
          variant="contained"
          disabled={!isFormValid}
          sx={{
            alignSelf: 'stretch',
            textTransform: 'none',
          }}
          onClick={handleSubmitPassword}
        >
          Update password
        </Button>
      </Box>
    </Box>
  );
}
