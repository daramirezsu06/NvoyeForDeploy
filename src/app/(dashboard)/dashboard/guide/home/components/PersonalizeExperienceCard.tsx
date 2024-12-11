'use client';
import { useVerifyPrechecklist } from '@/src/app/hooks/verifyPrechecklist';
import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

export default function PersonalizeExperienceCard({}: Props) {
  const isPreChecklistIncomplete = useVerifyPrechecklist();
  if (!isPreChecklistIncomplete) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' flex-start',
        gap: '8px',
        alignSelf: ' stretch',
        borderRadius: 2,
        border: '1px solid #E6E5E5',
        background:
          'radial-gradient(249.19% 158.15% at 19.83% 29.92%, #FFF 0%, #C2D7FF 76%, #FFF 100%)',
        position: 'relative',
        marginTop: '16px',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: ' center',
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
            marginBottom: '16px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: ' center',
              alignItems: 'flex-start',
              alignSelf: ' stretch',
            }}
            component={'h2'}
          >
            Personalize your experience
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: ' center',
              alignItems: 'flex-start',
              alignSelf: ' stretch',
            }}
            component={'p'}
          >
            Answer a few simple questions to receive tasks and contents tailored
            to your interests and goals.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: { xs: 'none', sm: 'flex', md: 'none', lg: 'flex' },
          flexDirection: ' column',
          justifyContent: 'center',
          alignItems: ' center',
          gap: '9px',
          position: 'absolute',
          right: '16px',
          bottom: '16px',
        }}
      >
        <Image
          src={'/images/personalexpicon.png'}
          alt="shape"
          width={48}
          height={48}
        />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: ' center',
          gap: 3,
        }}
      >
        <Link href="/pre-checklist">
          <Button variant="contained" color="primary" size="medium">
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '155%',
                letterSpacing: '0.4px',
                textTransform: 'none',
              }}
            >
              Complete questionnaire
            </Typography>
          </Button>
        </Link>
        {/* <Button sx={{ textTransform: 'none' }} onClick={handleClose}>Remind me later</Button> */}
      </Stack>
    </Box>
  );
}
