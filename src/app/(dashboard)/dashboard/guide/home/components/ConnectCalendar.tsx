'use client';

import { useState } from 'react';
import {
  Box,
  IconButton,
  Icon,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import Image from 'next/image';
import Calendarinfo from '@/src/icons/Calendarinfo.png'; // Asegúrate de usar la ruta correcta de tu imagen

export default function ConnectCalendar() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch',
        borderRadius: '16px',
        border: '1px solid #E6E5E5',
        background:
          'radial-gradient(310.85% 220.14% at 6.95% 17.38%, rgba(255, 255, 255, 0.87) 0%, #FFDCAD 63.51%, rgba(255, 255, 255, 0.87) 100%)',
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          display: 'flex',
          padding: '8px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '0px',
          top: '0px',
        }}
        onClick={handleClose}
      >
        <Icon>
          <Close />
        </Icon>
      </IconButton>

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '8px',
          alignSelf: 'stretch',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          <Typography variant="caption">Recommended for you</Typography>
          <Typography variant="h6">
            Connect your calendar and sync your tasks
          </Typography>
          <Typography variant="caption">
            Connect your calendar to receive notifications and reminders for all
            checklist task items.
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
            alignSelf: 'stretch',
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Connect now
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="small"
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Remind me later
          </Button>
        </Stack>
      </Stack>

      <Image
        src={Calendarinfo}
        alt="Calendarinfo"
        style={{ position: 'absolute', right: '10px', bottom: '10px' }}
      />
    </Box>
  );
}
