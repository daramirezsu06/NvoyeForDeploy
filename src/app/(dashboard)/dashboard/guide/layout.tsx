'use client';

import { Container } from '@mui/material';
import React from 'react';
import { SidebarDesktop } from '../components/sidebarDesktop';
import { guideSidebarList } from './utils/sidevbarGuideList';
import { SidebarMobile } from '../components/sidebarMobile';

export default function DashboardGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      {/* Barra lateral para pantallas grandes */}
      <SidebarDesktop sidevbarList={guideSidebarList} />

      {/* Contenido principal */}
      <>{children}</>

      {/* Menú inferior para pantallas móviles */}
      <SidebarMobile sidevbarList={guideSidebarList} />
    </Container>
  );
}
