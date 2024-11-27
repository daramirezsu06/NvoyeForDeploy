import { Container } from '@mui/material';
import React from 'react';
import CategoryBottomNavigation from './CategoryBottomNavigation';

export default function HubsDesktopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: { xs: 'auto', sm: 'calc(100vh - 190px)' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      <>{children}</>
      <CategoryBottomNavigation />
    </Container>
  );
}
