'use client';

import {
  IValidateInput,
  validatefield,
} from '@/src/utils/validations/validateForm';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
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

export default function Settings() {
  const [showPassword, setShowPassword] = React.useState(false);
  const userEmail = 'user email'; //!manejar este valor
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentPasswordErrors, setCurrentPasswordErrors] = useState<
    IValidateInput[]
  >([]);
  const [newPasswordErrors, setNewPasswordErrors] = useState<IValidateInput[]>(
    []
  );
  const [confirmNewPasswordErrors, setConfirmNewPasswordErrors] = useState<
    IValidateInput[]
  >([]);

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

  const isFormValid =
    currentPassword &&
    newPassword &&
    confirmNewPassword &&
    !currentPasswordErrors.length &&
    !newPasswordErrors.length &&
    !confirmNewPasswordErrors.length;

  // Función para validar el currentPassword
  const validateCurrentPassword = (value: string) => {
    setCurrentPassword(value);
    const errors = validatefield('password', value); // Si tienes reglas similares
    setCurrentPasswordErrors(errors.filter((err) => !err.test));
  };

  // Función para validar el newPassword
  const validateNewPassword = (value: string) => {
    setNewPassword(value);
    const errors = validatefield('newPassword', value);
    setNewPasswordErrors(errors.filter((err) => !err.test));
  };

  // Función para validar el confirmNewPassword
  const validateConfirmNewPassword = (value: string) => {
    setConfirmNewPassword(value);
    const errors = validatefield('confirmNewPassword', value, newPassword); // Pasar newPassword para la comparación
    setConfirmNewPasswordErrors(errors.filter((err) => !err.test));
  };

  //!logca para madar la info al back!
  const handleSubmit = () => {
    console.log('user email:', userEmail);
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        // paddingLeft: { xs: '0px', sm: '0px' },
        // paddingRight: { xs: '0px', sm: '0px' },
        paddingX: { xs: 1, sm: 5 },
        paddingY: { xs: 1, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FDFCFB',
        flex: 1,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '800px',
        }}
      >
        {/* Tittle */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            Settings
          </Typography>
        </Stack>

        {/* Content */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingY: { xs: 1, sm: 1 },
            paddingX: { xs: 0, sm: 0 },
            gap: 4,
          }}
        >
          {/* Email y pass */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              padding: 4,
              backgroundColor: '#F8F6F5',
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: 0,
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
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
                  width: { xs: '200px', sm: '500px' },
                }}
              ></TextField>
              <FormControl
                variant="outlined"
                sx={{ width: { xs: '200px', sm: '500px' } }}
                error={!!currentPasswordErrors.length} // Mostrar error si hay
              >
                <InputLabel htmlFor="current-password">
                  Currrent password
                </InputLabel>
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

              <FormControl
                variant="outlined"
                sx={{ width: { xs: '200px', sm: '500px' } }}
                error={!!newPasswordErrors.length}
              >
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
                {/* <FormHelperText>Minimun 8 characters</FormHelperText> */}
              </FormControl>
              <FormControl
                variant="outlined"
                sx={{ width: { xs: '200px', sm: '500px' } }}
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
              </FormControl>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  alignSelf: 'stretch',
                }}
              >
                <Button
                  size="large"
                  color="primary"
                  // !manejar el disabled del form
                  disabled={!isFormValid}
                  variant="contained"
                  sx={{ textTransform: 'none' }}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Stack>
            </Stack>
          </Box>
          {/* date and time */}
          <Box></Box>
        </Stack>
      </Stack>
    </Container>
  );
}
