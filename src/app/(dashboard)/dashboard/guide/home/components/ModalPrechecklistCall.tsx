'use client';
import { useVerifyPrechecklist } from '@/src/app/hooks/verifyPrechecklist';
import { Close } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Icon,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PersonalizeExperienceCard from './PersonalizeExperienceCard';

type Props = {
  handleCloseModalPrechecklistCall: () => void;
};

export default function ModalPrechecklistCall({
  handleCloseModalPrechecklistCall,
}: Props) {
  const isPreChecklistIncomplete = useVerifyPrechecklist();
  if (!isPreChecklistIncomplete) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          xs: '95%',
          sm: '700px',
        },
        maxWidth: '800px',
        padding: 5,
        backgroundColor: '#F8F6F5',
        borderRadius: 2,
        marginTop: 2,
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: '8px',
          right: '16px',
          width: 24,
          height: 24,
        }}
      >
        <Icon>
          <Close
            sx={{ width: 24, height: 24 }}
            onClick={handleCloseModalPrechecklistCall}
          />
        </Icon>
      </IconButton>
      <Image src={'/images/SHAPE.png'} alt="shape" width={70} height={70} />
      <Stack
        sx={{
          display: 'flex',
          maxWidth: '500px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant={'h4'}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            textAlign: 'center',
          }}
          component={'h1'}
        >
          Welcome to your diplomatic hub
        </Typography>
        <Typography
          variant={'h5'}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            textAlign: 'center',
          }}
          component={'h1'}
        >
          Welcome to your diplomatic hub
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            width: 'auto',
            // maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
          }}
          component={'p'}
        >
          An information center for everything you need to learn about your host
          country and recommended tasks you can get started on.
        </Typography>
      </Stack>
      <PersonalizeExperienceCard />
    </Box>
  );
}
