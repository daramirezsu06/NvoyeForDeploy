'use client';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  IValidateInput,
  validatefield,
} from '@/src/utils/validations/validateForm';
import { useRouter } from 'next/navigation';

export const ChangePassword = ({ handleShowResetPassword }: any) => {
  // const [showPassword, setShowPassword] = React.useState(false);
  const userEmail = 'user email'; //!manejar este valor
  // const [currentPassword, setCurrentPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmNewPassword, setConfirmNewPassword] = useState('');
  // const [currentPasswordErrors, setCurrentPasswordErrors] = useState<
  //   IValidateInput[]
  // >([]);
  // const [newPasswordErrors, setNewPasswordErrors] = useState<IValidateInput[]>(
  //   []
  // );
  // const [confirmNewPasswordErrors, setConfirmNewPasswordErrors] = useState<
  //   IValidateInput[]
  // >([]);

  // const router = useRouter();

  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const isFormValid =
  //   currentPassword &&
  //   newPassword &&
  //   confirmNewPassword &&
  //   !currentPasswordErrors.length &&
  //   !newPasswordErrors.length &&
  //   !confirmNewPasswordErrors.length;

  // // Función para validar el currentPassword
  // const validateCurrentPassword = (value: string) => {
  //   setCurrentPassword(value);
  //   const errors = validatefield('password', value); // Si tienes reglas similares
  //   setCurrentPasswordErrors(errors.filter((err) => !err.test));
  // };

  // // Función para validar el newPassword
  // const validateNewPassword = (value: string) => {
  //   setNewPassword(value);
  //   const errors = validatefield('newPassword', value);
  //   setNewPasswordErrors(errors.filter((err) => !err.test));
  // };

  // // Función para validar el confirmNewPassword
  // const validateConfirmNewPassword = (value: string) => {
  //   setConfirmNewPassword(value);
  //   const errors = validatefield('confirmNewPassword', value, newPassword); // Pasar newPassword para la comparación
  //   setConfirmNewPasswordErrors(errors.filter((err) => !err.test));
  // };

  //!logca para madar la info al back!
  // const handleSubmit = () => {
  //   console.log('user email:', userEmail);
  //   console.log('Current Password:', currentPassword);
  //   console.log('New Password:', newPassword);
  //   console.log('Confirm New Password:', confirmNewPassword);

  //   // show succes notification
  //   setShowSuccessAlert(true);

  //   setTimeout(() => {
  //     setShowSuccessAlert(false);
  //     // redirect to login
  //     router.push('/login');
  //   }, 2000);
  // };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        backgroundColor: '#F8F6F5',
        borderRadius: 2,
        width: { xs: 'full', sm: '400px', md: '500px' },
      }}
    >
      {/* <Collapse in={showSuccessAlert}>
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
      </Collapse> */}

      <Stack
        sx={{
          display: 'flex',
          marginBottom: '24px',
        }}
      >
        <Typography variant="h6">Email and password</Typography>
        <Typography variant="subtitle2">
          View your registration email or set a new password.{' '}
        </Typography>
      </Stack>

      <Stack
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <TextField
          variant="filled"
          size="medium"
          label="Registration email"
          value={userEmail}
          disabled
          sx={{
            flex: 1,
          }}
        ></TextField>

        {/* <FormControl
          variant="outlined"
          sx={{
            flex: 1,
          }}
          error={!!currentPasswordErrors.length} // Mostrar error si hay
        >
          <InputLabel htmlFor="current-password">Currrent password</InputLabel>
          <OutlinedInput
            id="current-password"
            type={showPassword ? 'text' : 'password'}
            value={currentPassword} // Controlar el input
            onChange={(e) => validateCurrentPassword(e.target.value)}
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
            label="Current Password"
          />
          {!!currentPasswordErrors.length && (
            <FormHelperText>
              {currentPasswordErrors[0].textValidation}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl variant="outlined" error={!!newPasswordErrors.length}>
          <InputLabel htmlFor="new-password">New password</InputLabel>
          <OutlinedInput
            id="new-password"
            type={showPassword ? 'text' : 'password'}
            value={newPassword} // Controlar el input
            onChange={(e) => validateNewPassword(e.target.value)}
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
            label="new-password"
          />
          {!!newPasswordErrors.length && (
            <FormHelperText>
              {newPasswordErrors[0].textValidation}
            </FormHelperText>
          )}

        </FormControl>

        <FormControl
          variant="outlined"
          error={!!confirmNewPasswordErrors.length}
        >
          <InputLabel htmlFor="confirm-new-password">
            Confirm new password
          </InputLabel>
          <OutlinedInput
            id="confirm-new-password"
            type={showPassword ? 'text' : 'password'}
            value={confirmNewPassword} // Controlar el input
            onChange={(e) => validateConfirmNewPassword(e.target.value)}
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
            label="confirm-new-password"
          />
          {!!confirmNewPasswordErrors.length && (
            <FormHelperText>
              {confirmNewPasswordErrors[0].textValidation}
            </FormHelperText>
          )}
        </FormControl> */}

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
          }}
        >
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ textTransform: 'none' }}
            onClick={handleShowResetPassword}
          >
            Reset password
          </Button>

          {/* <Button
            size="large"
            color="primary"
            disabled={!isFormValid}
            variant="contained"
            sx={{ textTransform: 'none' }}
            onClick={handleSubmit}
          >
            Save
          </Button> */}
        </Stack>
      </Stack>
    </Box>
  );
};
