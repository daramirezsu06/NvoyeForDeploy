import { hubMocks } from '@/src/app/mocks/hubsMocks';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import CustomHubCard from '../../../components/CustomHubCard';

export default function RecommendedHubs() {
  const recomendedHubsThree = hubMocks.slice(0, 3);
  const recomendedHubsFour = hubMocks.slice(0, 4);
  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        alignSelf: ' stretch',
      }}
    >
      <Stack
        sx={{
          display: ' flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: ' center',
          alignSelf: 'stretch',
        }}
      >
        <Typography variant="h6">Recommended hubs</Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="medium"
          sx={{ textTransform: 'none', borderRadius: 2 }}
        >
          <Link
            href="/dashboard/guide/hubs"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            View all hubs
          </Link>
        </Button>
      </Stack>
      {/* Three hubs for desktop version */}
      <Stack
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: ' center',
          gap: 3,
          alignSelf: ' stretch',
          flexWrap: 'wrap',
          // overflowX: 'auto',
        }}
      >
        {recomendedHubsThree.map((hub) => (
          <CustomHubCard
            key={hub.title}
            icon={hub.icon}
            title={hub.title}
            topics={hub.topics}
          />
        ))}
      </Stack>

      {/* Four hubs for mobile version */}
      <Stack
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: ' center',
          gap: 3,
          alignSelf: ' stretch',
          flexWrap: 'wrap',
          // overflowX: 'auto',
        }}
      >
        {recomendedHubsFour.map((hub) => (
          <CustomHubCard
            key={hub.title}
            icon={hub.icon}
            title={hub.title}
            topics={hub.topics}
          />
        ))}
      </Stack>
    </Box>
  );
}
