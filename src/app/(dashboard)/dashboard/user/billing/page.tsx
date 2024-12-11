import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import MembershipAndSubscriptions from './components/(membership)/MembershipAndSubscriptions';
import PaymentMethods from './components/(paymentMethods)/PaymentMethods';
import Invoices from './components/(invoices)/Invoices';

export default function Billing() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'self-start',
          // alignSelf: 'stretch',
          height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
          minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
          width: '100%',
          maxWidth: '1440px',
          // maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
          // paddingLeft: { xs: '0px', sm: '0px' },
          // paddingRight: { xs: '0px', sm: '0px' },
          paddingX: { xs: 1, sm: 5 },
          paddingY: { xs: 1, sm: 2 },
          marginLeft: { xs: '0px', sm: '0px' },
          marginRight: { xs: '0px', sm: '0px' },
          backgroundColor: '#FDFCFB',
          flex: 1,
          gap: 1,
          marginBottom: '50px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'self-start',
            // maxWidth: '800px',
          }}
        >
          {/* Tittle */}
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: 2,
              alignSelf: 'stretch',
            }}
          >
            <Typography variant="h4">Billing</Typography>
          </Stack>
        </Stack>

        {/* Content */}
        <Stack
          sx={{
            display: 'flex',
            paddingY: { xs: 1, sm: 1 },
            paddingX: { xs: 0, sm: 0 },
            gap: 4,
            flex: 1,
            alignSelf: 'stretch',
          }}
        >
          {/* Membership and Subscriptions */}
          <MembershipAndSubscriptions />

          {/* Payment methods */}
          <PaymentMethods />

          {/* Invoices */}
          <Invoices />
        </Stack>
      </Container>
    </Box>
  );
}
