import { Box, Stack } from '@mui/material';
import React from 'react';
import WelcomeUser from '../components/WelcomeUser';
import RecommendedHubs from './components/RecommendedHubs';
import ConnectCalendar from './components/ConnectCalendar';
import LandingPackage from './components/LandingPackage';
import theme from '@/src/app/theme';
import ScheduledTasks from './components/ScheduledTasks';

type Props = {};

export default function Home({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '8px', sm: 3 },
        paddingRight: { xs: '8px', sm: 3 },
        paddingY: { xs: 0, sm: 2 },
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
          maxWidth: '500px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
          flex: 1,
          alignSelf: ' stretch',
          paddingBottom: {
            xs: '70px',
            sm: ' 0px',
          },
        }}
      >
        {/* Box up */}
        <ConnectCalendar />

        {/* Box down */}
        <LandingPackage />
      </Box>
    </Box>
  );
}
