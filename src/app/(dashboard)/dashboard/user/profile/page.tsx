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
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FFFF',
        padding: 0,
        gap: 4,
        alignItems: 'center',
        alignSelf: 'stretch',
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
