'use client';
import BrandIcon from '@/src/icons/BrandLogo';
import {
  Diversity2,
  LibraryBooks,
  MenuOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Container,
  Badge,
  Icon,
  Link,
} from '@mui/material';

import Menu from './dashboard/components/Menu';
import React from 'react';
import { usePathname } from 'next/navigation';
import MenuLayout from './dashboard/components/MenuLayout';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElMenuLayout, setAnchorElMenuLayout] =
    React.useState<null | HTMLElement>(null);
  const openMenuLayout = Boolean(anchorElMenuLayout);
  const handleClickMenuLayout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenuLayout(event.currentTarget);
  };
  const handleCloseMenuLayout = () => {
    setAnchorElMenuLayout(null);
  };

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
          <Toolbar
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              alignItems: 'center',
              gap: 1,
              alignSelf: 'stretch',
              paddingY: 1,
              paddingX: 3,
              paddingLeft: { xs: '0px', sm: '14px' },
              paddingRight: { xs: '0px', sm: '14px' },
              minHeight: { xs: '0px', sm: '0px' },
            }}
          >
            <BrandIcon />
            <Stack
              direction="row"
              alignItems="center"
              gap="24px"
              flex={1}
              pl={2}
            >
              <Link href="/dashboard/guide">
                <Button
                  size="medium"
                  color={
                    pathname.includes('/dashboard/guide') ? 'primary' : 'info'
                  }
                  startIcon={<LibraryBooks />}
                >
                  Guide
                </Button>
              </Link>

              <Link href="/dashboard/community">
                <Button
                  size="medium"
                  color={
                    pathname.includes('/dashboard/community')
                      ? 'primary'
                      : 'info'
                  }
                  startIcon={<Diversity2 />}
                >
                  Community
                </Button>
              </Link>
            </Stack>

            <Stack display="flex" direction="row" alignItems="center" gap={2}>
              <Badge
                variant="standard"
                color="primary"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    padding: 1,
                  }}
                >
                  <Icon sx={{ display: 'flex' }}>
                    <NotificationsOutlined sx={{ width: 24, height: 24 }} />
                  </Icon>
                </IconButton>
                <Badge
                  badgeContent={1} //! modificar con el valro que venga del back
                  color="primary"
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                ></Badge>
              </Badge>
              <Button onClick={handleClick} sx={{ width: 24, minWidth: 24 }}>
                <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
              </Button>
              <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} />
            </Stack>
          </Toolbar>

          {/* toolbar para dispositivos moviles */}
          <Toolbar
            sx={{
              display: {
                xs: 'flex',
                sm: 'none',
              },
              alignItems: 'center',
              gap: 1,
              alignSelf: 'stretch',
              paddingY: 1,
              paddingX: 3,
              paddingLeft: { xs: '14px', sm: '14px' },
              paddingRight: { xs: '14px', sm: '14px' },
              minHeight: { xs: '0px', sm: '0px' },
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
                flex: '1 0 0',
              }}
            >
              <IconButton
                sx={{
                  display: 'flex',
                  padding: '8px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleClickMenuLayout}
              >
                <Icon sx={{ display: 'flex' }}>
                  <MenuOutlined sx={{ width: 24, height: 24 }} />
                </Icon>
              </IconButton>

              <MenuLayout
                anchorElMenuLayout={anchorElMenuLayout}
                openMenuLayout={openMenuLayout}
                handleCloseMenuLayout={handleCloseMenuLayout}
              />
            </Stack>
            <Stack display="flex" direction="row" alignItems="center" gap={2}>
              <Badge
                variant="standard"
                color="primary"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    padding: 1,
                  }}
                >
                  <Icon sx={{ display: 'flex' }}>
                    <NotificationsOutlined sx={{ width: 24, height: 24 }} />
                  </Icon>
                </IconButton>
                <Badge
                  badgeContent={1} //! modificar con el valro que venga del back
                  color="primary"
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                ></Badge>
              </Badge>
              <Button onClick={handleClick} sx={{ width: 24, minWidth: 24 }}>
                <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
              </Button>
              <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} />
            </Stack>
          </Toolbar>
        </Paper>
      </AppBar>
      {children}
    </Container>
  );
}
