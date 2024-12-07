'use client';

import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PersonalizeExperienceCard from './home/components/PersonalizeExperienceCard';
import { redirect, useRouter } from 'next/navigation';
import { useVerifyPrechecklist } from '@/src/app/hooks/verifyPrechecklist';
import ModalPrechecklistCall from './home/components/ModalPrechecklistCall';
import ConnectCalendar from './home/components/ConnectCalendar';
import LandingPackage from './home/components/LandingPackage';
import RecommendedHubs from './home/components/RecommendedHubs';
import ScheduledTasks from './home/components/ScheduledTasks';
import WelcomeUser from './home/components/WelcomeUser';

type Props = {};

function Guide({}: Props) {
  // redirect('/dashboard/guide/home');
  // return null;
  const router = useRouter();

  const isPreChecklistIncomplete = useVerifyPrechecklist();

  const [isModalPrechecklistCallOpen, setIsModalPrechecklistCallOpen] =
    useState(isPreChecklistIncomplete);
  const handleCloseModalPrechecklistCall = () => {
    router.push('/dashboard/guide/home');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: '100vh', md: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '8px', md: 3 },
        paddingRight: { xs: '8px', md: 3 },
        paddingY: { xs: 0, md: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        flex: 1,
        gap: 4,
      }}
    >
      {/* BOX to the Left */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          gap: 3,
        }}
      >
        <WelcomeUser />

        <PersonalizeExperienceCard />

        {/* Recommended hubs */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
            alignSelf: 'stretch',
            borderRadius: 2,
            backgroundColor: '#F8F6F5',
          }}
        >
          <RecommendedHubs />
        </Stack>

        {/* Scheduled task */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
            alignSelf: 'stretch',
            borderRadius: 2,
            backgroundColor: '#F8F6F5',
          }}
        >
          <ScheduledTasks />
        </Stack>
      </Box>

      {/* BOX to the Right */}
      <Box
        sx={{
          display: 'flex',
          maxWidth: { xs: '100%', md: '500px' },
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
          flex: 1,
          alignSelf: ' stretch',
          paddingBottom: {
            xs: '70px',
            md: ' 0px',
          },
        }}
      >
        {/* Box up */}
        <ConnectCalendar />

        {/* Box down */}
        <LandingPackage />
      </Box>
      <Modal
        open={isModalPrechecklistCallOpen}
        onClose={handleCloseModalPrechecklistCall}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad
            backdropFilter: 'blur(5px)', // Desenfoque
          },
        }}
      >
        <ModalPrechecklistCall
          handleCloseModalPrechecklistCall={handleCloseModalPrechecklistCall}
        />
      </Modal>
    </Container>
  );
}

export default Guide;
