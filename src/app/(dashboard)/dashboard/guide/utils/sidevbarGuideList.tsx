'use client';
import { Checklist, DeviceHub, HomeOutlined } from '@mui/icons-material';
import { ReactNode } from 'react';

export interface SidebarItemType {
  href: string;
  icon: ReactNode;
  text: string;
}

export const guideSidebarList = [
  {
    href: '/dashboard/guide/home',
    icon: <HomeOutlined />,
    text: 'Home',
  },
  {
    href: '/dashboard/guide/hubs',
    icon: <DeviceHub />,
    text: 'Hubs',
  },
  {
    href: '/dashboard/guide/checklist',
    icon: <Checklist />,
    text: 'Checklist',
  },
];
