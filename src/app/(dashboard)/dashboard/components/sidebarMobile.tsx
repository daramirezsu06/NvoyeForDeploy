'use client';
import { BottomNavigation, Paper } from '@mui/material';
import React from 'react';
import { SidebarItemType } from '../guide/utils/sidevbarGuideList';
import { SidebarItemMobile } from './sidebarItemMobile';

export const SidebarMobile = ({
  sidevbarList,
}: {
  sidevbarList: SidebarItemType[];
}) => {
  return (
    <Paper
      sx={{
        display: { xs: 'block', sm: 'none' }, // Mostrar solo en pantallas pequeñas
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation>
        {sidevbarList.map((item, index) => (
          <SidebarItemMobile item={item} key={index} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
