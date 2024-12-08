'use client';
import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Checklist, DeviceHub, Home } from '@mui/icons-material';
import MobileTopNavbar from '../(dashboard)/dashboard/components/MobileTopNavbar';
import React from 'react';
import { SidebarMobile } from '../(dashboard)/dashboard/components/sidebarMobile';
import { guideSidebarList } from '../(dashboard)/dashboard/guide/utils/sidevbarGuideList';
import DesktopTopNavbar from '../(dashboard)/dashboard/components/DesktopTopNavbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElMenuLayout, setAnchorElMenuLayout] =
    React.useState<null | HTMLElement>(null);
  return (
    <html lang="en">
      <body>
        <AppBar
          color="default"
          sx={{
            display: {
              md: 'none',
            },
            boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
            backgroundColor: '#FDFCFB',
          }}
        >
          {/* <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar> */}
          <DesktopTopNavbar
            onAvatarClick={(event) => setAnchorEl(event.currentTarget)}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            handleClose={() => setAnchorEl(null)}
          />
          <MobileTopNavbar
            onMenuClick={(event) => setAnchorElMenuLayout(event.currentTarget)}
            anchorElMenuLayout={anchorElMenuLayout}
            openMenuLayout={Boolean(anchorElMenuLayout)}
            handleCloseMenuLayout={() => setAnchorElMenuLayout(null)}
            onAvatarClick={(event) => setAnchorEl(event.currentTarget)}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            handleClose={() => setAnchorEl(null)}
          />
        </AppBar>

        <CssBaseline />
        {children}

        <SidebarMobile sidevbarList={guideSidebarList} />
        {/* <BottomNavigation
          sx={{
            display: {
              sm: 'none',
            },
            //agregado
            position: 'fixed',
            bottom: 0,
            width: '100%',
          }}
        >
          <BottomNavigationAction label="Recents" icon={<Home />} />
          <BottomNavigationAction label="Recents" icon={<DeviceHub />} />
          <BottomNavigationAction label="Recents" icon={<Checklist />} />
        </BottomNavigation> */}
      </body>
    </html>
  );
}
