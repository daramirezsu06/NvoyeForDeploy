'use client';

import { AppBar, CssBaseline, Paper, Container } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import DesktopTopNavbar from './dashboard/components/DesktopTopNavbar';
import MobileTopNavbar from './dashboard/components/MobileTopNavbar';
import SubHubTopNavigation from './dashboard/components/SubHubTopNavigation';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSubHubs = pathname.includes('/dashboard/guide/hubs/');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorElMenuLayout, setAnchorElMenuLayout] =
    React.useState<null | HTMLElement>(null);
  // const openMenuLayout = Boolean(anchorElMenuLayout);
  // const handleClickMenuLayout = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElMenuLayout(event.currentTarget);
  // };
  // const handleCloseMenuLayout = () => {
  //   setAnchorElMenuLayout(null);
  // };

  return (
    <Container
      sx={{
        padding: 0,
        maring: 0,
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
        width: '100vw',
        minHeight: { xs: '0px', sm: '0px' },
      }}
    >
      <CssBaseline />

      <AppBar
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          alignSelf: 'stretch',
          position: 'sticky',
          top: 0,
          paddingLeft: { xs: '0px', sm: '0px' },
          paddingRight: { xs: '0px', sm: ' 0px !important' },
          minHeight: { xs: '0px', sm: '0px' },
        }}
        elevation={0}
        square={true}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            paddingLeft: { xs: '0px', sm: '0px' },
            paddingRight: { xs: '0px', sm: '0px' },
            minHeight: { xs: '0px', sm: '0px' },
          }}
          elevation={0}
          square={true}
        >
          {/* //! Toolbar para desktop */}
          <DesktopTopNavbar
            onAvatarClick={(event) => setAnchorEl(event.currentTarget)}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            handleClose={() => setAnchorEl(null)}
          />

          {/* toolbar para dispositivos moviles */}
          {isSubHubs ? (
            <SubHubTopNavigation />
          ) : (
            <MobileTopNavbar
              onMenuClick={(event) =>
                setAnchorElMenuLayout(event.currentTarget)
              }
              anchorElMenuLayout={anchorElMenuLayout}
              openMenuLayout={Boolean(anchorElMenuLayout)}
              handleCloseMenuLayout={() => setAnchorElMenuLayout(null)}
              onAvatarClick={(event) => setAnchorEl(event.currentTarget)}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              handleClose={() => setAnchorEl(null)}
            />
          )}
        </Paper>
      </AppBar>
      {children}
    </Container>
  );
}
