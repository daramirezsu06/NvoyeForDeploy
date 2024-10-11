'use client';
import {
  Checklist,
  DeviceHub,
  Home,
  HomeOutlined,
  KeyboardDoubleArrowLeft,
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
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SidebarItemType } from '../guide/utils/sidevbarGuideList';

export const SidebarItemMobile = ({ item }: { item: SidebarItemType }) => {
  const pathname = usePathname();
  return (
    <BottomNavigationAction
      label={item.text}
      showLabel={true}
      icon={item.icon}
      component={Link} // Utiliza el componente Link de Next.js para navegar
      href={item.href}
      sx={{
        color:
          pathname === '/dashboard/guide/home' ? 'primary.main' : 'default',
      }}
    />
  );
};
