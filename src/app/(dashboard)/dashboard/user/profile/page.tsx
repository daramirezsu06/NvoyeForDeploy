'use client';
import IdentityEssentials from '@/src/app/(profile)/profile/components/IdentityEssentials';
import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import theme from '@/src/app/theme';
import { IdentitiForm } from './components/ProfileIdentiti';
import ProfileLanguageSkills from './components/ProfileLenguages';
import { AditionalInfo } from './components/AditionalInfo';

export default function Profile() {
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
        paddingX: { xs: 1, sm: 5 },
        paddingY: { xs: 1, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FDFCFB',
        padding: 0,
        gap: 4,
      }}
    >
      <Stack sx={{ gap: 4 }}>
        <Stack sx={{ mb: 3 }}>
          <Typography variant="h4">Profile</Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: theme.custom.paperElevationTwo,
            width: '565px',
            borderRadius: 3,
            p: 4,
          }}
        >
          <IdentitiForm />
        </Stack>
        <Stack
          sx={{
            backgroundColor: theme.custom.paperElevationTwo,
            width: '565px',
            borderRadius: 3,
            p: 4,
          }}
        >
          <ProfileLanguageSkills />
        </Stack>
        <Stack
          sx={{
            backgroundColor: theme.custom.paperElevationTwo,
            width: '565px',
            borderRadius: 3,
            p: 4,
          }}
        >
          <AditionalInfo />
        </Stack>
      </Stack>
    </Container>
  );
}
