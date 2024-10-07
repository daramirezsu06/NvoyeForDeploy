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
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ChangeEmail } from './components/ChangeEmail';
import ResetPasswordModal from './components/ResetPasswordModal';

export default function Settings() {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const handleShowResetPassword = () => {
    console.log('handleShowResetPassword');
    setShowResetPassword(true);
  };

  const handleCloseResetPassword = () => {
    console.log('handleCloseResetPassword');
    setShowResetPassword(false);
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
            padding: 2,
            alignSelf: 'stretch',
          }}
        >
          <Typography variant="h4">Settings</Typography>
        </Stack>

        {/* Content */}
        <Stack
          sx={{
            display: 'flex',
            paddingY: { xs: 1, sm: 1 },
            paddingX: { xs: 0, sm: 0 },
            gap: 4,
          }}
        >
          {/* Email y pass */}
          <ChangeEmail handleShowResetPassword={handleShowResetPassword} />

          {/* Reset Password */}

          <Modal
            open={showResetPassword}
            onClose={handleCloseResetPassword}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <ResetPasswordModal />
          </Modal>

          {/* date and time */}
          <Box></Box>
        </Stack>
      </Stack>
    </Container>
  );
}
