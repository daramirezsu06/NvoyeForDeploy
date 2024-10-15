import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import MembershipChip from './MembershipChip';
import MembershipTable from './MembershipTable';

type Props = {};

export default function MembershipAndSubscriptions({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingY: 3,
        paddingX: { xs: 1, sm: 4 },
        backgroundColor: '#F8F6F5',
        borderRadius: 2,
      }}
    >
      {/* Title and chip */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        }}
      >
        <Stack>
          <Typography variant="h5">Membership and subscriptions</Typography>
        </Stack>

        {/* chip */}
        <MembershipChip />
      </Stack>

      {/* table */}
      <MembershipTable />
    </Box>
  );
}
