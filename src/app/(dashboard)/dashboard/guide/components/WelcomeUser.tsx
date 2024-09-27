import { Stack, Typography } from '@mui/material';
import React from 'react';

//!this componnent needs to receibe the user name and Date

export default function WelcomeUser() {
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
        {/* //! HERE GOES THE NAME */}
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
        {/* //! HERE GOES THE DATE */}
        <Typography variant="caption">Today&apos;s</Typography>
        <Typography variant="h6">Wed, 24</Typography>
      </Stack>
    </Stack>
  );
}
