'use client';
import {
  KeyboardDoubleArrowLeft,
  Link,
  PersonOutlined,
  ReceiptOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Links from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SidebarDesktop } from '../components/sidebarDesktop';
import { userSidebarList } from './utils/sidebarUserList';
import { SidebarMobile } from '../components/sidebarMobile';

export default function DashboardUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
      <SidebarDesktop sidevbarList={userSidebarList} />

      <>{children}</>

      <SidebarMobile sidevbarList={userSidebarList} />
    </Container>
  );
}
