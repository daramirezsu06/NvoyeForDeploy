import { Box, Stack } from '@mui/material';
import React from 'react';
import WelcomeUser from '../components/WelcomeUser';
import RecommendedHubs from './components/RecommendedHubs';
import ConnectCalendar from './components/ConnectCalendar';
import LandingPackage from './components/LandingPackage';

type Props = {};

export default function Home({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Columna en pantallas móviles, fila en pantallas grandes
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
      {/* BOX DE LA IZQUIERDA */}
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
          {/* Recommended hubs */}
          <RecommendedHubs />

          {/* Scheduled task */}
          <Box></Box>
        </Stack>
      </Box>

      {/* BOX DE LA DERECHA */}
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
        {/* Box de arriba */}
        <ConnectCalendar />

        {/* Box de abajo */}
        <LandingPackage />
      </Box>
    </Box>
  );
}
