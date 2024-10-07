import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

export default function ResetPasswordModal() {
  const [code, setCode] = useState('');

  //!logic to send code to verify
  const handleSubmitCode = () => {
    // creo que aca hay que hacer llamada a verify otp
    console.log(code);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
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
          // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <Typography variant="h4">Forgot your password?</Typography>
          <Typography variant="body1">
            Don’t worry, it happens to the best of us.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '384px',
          }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            disabled
            value={'user email'} //! modificar este valor segun redux
            sx={{
              alignSelf: 'stretch',
              marginBottom: '16px',
            }}
          />
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Typography variant="subtitle2">
              We have sent a recovery code to your email
            </Typography>
            <Typography variant="caption">
              Please check your inbox and paste the recovery code below
            </Typography>
            <TextField
              variant="outlined"
              label="Enter recovery code"
              sx={{
                alignSelf: 'stretch',
                marginTop: '16px',
                marginBottom: '16px',
              }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                alignSelf: 'stretch',
                textTransform: 'none',
              }}
              onClick={handleSubmitCode}
            >
              Submit code
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
