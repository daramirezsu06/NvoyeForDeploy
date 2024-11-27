'use client';
import { BottomNavigationAction } from '@mui/material';
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
        color: pathname.includes(item.href) ? 'primary.main' : 'default',
      }}
    />
  );
};
