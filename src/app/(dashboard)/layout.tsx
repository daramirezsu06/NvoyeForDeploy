'use client';
import BrandIcon from '@/src/icons/BrandLogo';
import {
  Checklist,
  DeviceHub,
  Diversity2,
  Home,
  HomeMiniOutlined,
  KeyboardDoubleArrowLeft,
  LibraryBooks,
  Notifications,
  NotificationsOutlined,
  OutlinedFlag,
  Store,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  TextField,
  Badge,
  Icon,
  Link,
} from '@mui/material';

import { useAppDispatch } from '../state/hooks';
import { logout } from './redux/profileSlice';
import { useRouter } from 'next/navigation';
import { authlogout } from '../(auth)/redux/authSlice';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Container
      sx={{
        padding: 0,
        maring: 0,
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
        width: '100vw',
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
          }}
          elevation={0}
          square={true}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              alignSelf: 'stretch',
              paddingY: 1,
              paddingX: 3,
            }}
            // variant=''
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
                  color="primary"
                  startIcon={<LibraryBooks />}
                >
                  Guide
                </Button>
              </Link>
              <Link href="/dashboard/marketplace">
                <Button size="medium" color="info" startIcon={<Store />}>
                  Marketplace
                </Button>
              </Link>
              <Link href="/dashboard/community">
                <Button size="medium" color="info" startIcon={<Diversity2 />}>
                  Community
                </Button>
              </Link>
            </Stack>

            <Stack display="flex" direction="row" alignItems="center" gap={2}>
              <Badge
                variant="standard"
                // badgeContent={1}
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
                  badgeContent={1}
                  color="primary"
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                ></Badge>
              </Badge>
              <Button
                onClick={() => {
                  dispatch(logout());
                  dispatch(authlogout());
                  router.push('/');
                }}
              >
                <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
              </Button>
            </Stack>
          </Toolbar>
        </Paper>
      </AppBar>
      {/* <Container>
        <Stack>
          <Stack>
            <Stack direction="row">
              <Typography>Guide</Typography>
              <KeyboardDoubleArrowLeft />
            </Stack>
            <List>
              <ListItem>
                <Stack direction="row">
                  <Home />
                  <ListItemText>Home</ListItemText>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction="row">
                  <DeviceHub />
                  <ListItemText>Hubs</ListItemText>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction="row">
                  <Checklist />
                  <ListItemText>Checklist</ListItemText>
                </Stack>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container> */}

      {children}
    </Container>
  );
}
