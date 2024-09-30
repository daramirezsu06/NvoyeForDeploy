import BrandLogo from '@/src/icons/BrandLogo';
import { Box, Stack, Typography, List } from '@mui/material';
import React from 'react';
import LandingListItem from './LandingListItem';

type Props = {};

export default function LandingPackage({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '16px',
        flexDirection: ' column',
        alignItems: 'flex-start',
        gap: ' 8px',
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: '#F8F6F5',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '8px',
          alignSelf: 'stretch',
        }}
      >
        <BrandLogo />
        <Typography variant="h6" color="primary">
          Nvoye landing package
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          alignSelf: 'stretch',
        }}
      >
        <List
          sx={{
            display: 'flex',
            padding: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
            alignSelf: ' stretch',
          }}
        >
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
        </List>
      </Box>
    </Box>
  );
}
