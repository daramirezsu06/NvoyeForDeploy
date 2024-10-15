import { Stack, Typography } from '@mui/material';
import React from 'react';

//TODO -> get the user name

const getCurrentDate = () => {
  const today = new Date();
  const weekday = today.toLocaleDateString('en-US', { weekday: 'short' });
  const day = today.getDate();
  return `${weekday}, ${day}`;
};

export default function WelcomeUser() {
  const currentDate = getCurrentDate();

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        gap: 3,
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: '#FBFAF8',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
          flex: 1,
        }}
      >
        {/* //! HERE GOES THE USER NAME */}
        <Typography variant="subtitle2">Welcome, Michael</Typography>
        <Typography variant="h6">Netherland diplomatic hub</Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="caption">Today&apos;s</Typography>
        <Typography variant="h6">{currentDate}</Typography>
      </Stack>
    </Stack>
  );
}
