'use client';
import {
  PersonOutlined,
  SettingsOutlined,
  ReceiptOutlined,
  Link,
} from '@mui/icons-material';
import { ReactNode } from 'react';

export interface SidebarItemType {
  href: string;
  icon: ReactNode;
  text: string;
}

export const userSidebarList = [
  {
    href: '/dashboard/user/profile',
    icon: <PersonOutlined />,
    text: 'Profile',
  },
  {
    href: '/dashboard/user/settings',
    icon: <SettingsOutlined />,
    text: 'Settings',
  },
  {
    href: '/dashboard/user/billing',
    icon: <ReceiptOutlined />,
    text: 'Billing',
  },
  {
    href: '/dashboard/user/integrations',
    icon: <Link />,
    text: 'Integrations',
  },
];
