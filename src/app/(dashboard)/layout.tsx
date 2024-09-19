import BrandIcon from '@/src/icons/BrandLogo';
import {
  Checklist,
  DeviceHub,
  Home,
  HomeMiniOutlined,
  KeyboardDoubleArrowLeft,
  Notifications,
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
} from '@mui/material';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <AppBar position="sticky">
          <Paper>
            <Toolbar
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <BrandIcon />
              <Stack
                direction="row"
                gap={3}
                alignItems="center"
                justifyContent="start"
              >
                <Button>Guide</Button>
                <Button>Marketplace</Button>
                <Button>Community</Button>
              </Stack>
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <Notifications />
                </IconButton>
                <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
              </Stack>
            </Toolbar>
          </Paper>
        </AppBar>
        <Container>
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
        </Container>

        {children}
      </body>
    </html>
  );
}
