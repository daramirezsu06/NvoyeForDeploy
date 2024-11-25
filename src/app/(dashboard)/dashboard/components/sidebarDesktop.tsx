'use client';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import { Container, IconButton, List, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarItemType } from '../guide/utils/sidevbarGuideList';
import { SidebarItemDesktop } from './sidebarItemDesktop';

export const SidebarDesktop = ({
  sidevbarList,
}: {
  sidevbarList: SidebarItemType[];
}) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Container
      sx={{
        display: { xs: 'none', sm: 'flex' },
        width: isCollapsed ? '60px' : '160px',
        paddingX: isCollapsed ? '5px' : '10px',
        paddingY: '20px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: isCollapsed ? 'center' : 'flex-start',
        alignSelf: 'stretch',
        maxWidth: isCollapsed ? '60px' : '150px',
        paddingLeft: isCollapsed ? '0px' : { xs: '0px', sm: '16px' },
        paddingRight: isCollapsed ? '0px' : { xs: '0px', sm: '16px' },
        transition: 'width 0.3s ease-in-out',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isCollapsed ? 'center' : 'flex-start',
          gap: 0,
          alignSelf: 'stretch',
        }}
      >
        {/* Barra superior con el botón de colapso */}
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          }}
        >
          {!isCollapsed && (
            <Typography
              variant="subtitle1"
              color={
                pathname.includes('/dashboard/guide') ? 'primary' : 'default'
              }
              component={'span'}
            >
              Guide
            </Typography>
          )}
          <IconButton
            color={pathname === '/dashboard/guide' ? 'primary' : 'default'}
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <KeyboardDoubleArrowRight />
            ) : (
              <KeyboardDoubleArrowLeft />
            )}
          </IconButton>
        </Stack>

        {/* Lista de elementos del sidebar */}
        <List sx={{ padding: 0, width: '100%', borderRadius: 0 }}>
          {sidevbarList.map((item, index) => (
            <SidebarItemDesktop
              key={index}
              item={item}
              isCollapsed={isCollapsed}
            />
          ))}
        </List>
      </Stack>
    </Container>
  );
};
