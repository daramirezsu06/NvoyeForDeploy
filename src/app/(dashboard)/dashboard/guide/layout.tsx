'use client';
import {
  Checklist,
  DeviceHub,
  Home,
  HomeOutlined,
  KeyboardDoubleArrowLeft,
} from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function DashboardGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      {/* Barra lateral para pantallas grandes */}
      <Container
        sx={{
          display: { xs: 'none', sm: 'flex' }, // Ocultar en pantallas pequeñas
          width: '200px',
          paddingX: '10px',
          paddingY: '20px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          maxWidth: { xs: '100%', sm: '150px' },
          paddingLeft: { xs: '0px', sm: '16px' },
          paddingRight: { xs: '0px', sm: '16px' },
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            alignSelf: ' stretch',
          }}
        >
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Typography
              variant="subtitle1"
              color={pathname === '/dashboard/guide' ? 'primary' : 'default'}
            >
              Guide
            </Typography>
            <IconButton
              color={pathname === '/dashboard/guide' ? 'primary' : 'default'}
              onClick={() => {
                console.log('abriendo/cerrando');
              }}
            >
              <KeyboardDoubleArrowLeft />
            </IconButton>
          </Stack>
          <List sx={{ padding: 0, width: '100%', borderRadius: 0 }}>
            <ListItem sx={{ padding: 0, width: '100%', borderRadius: 0 }}>
              <Link
                href="/dashboard/guide/home"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingY: '0px',
                    paddingX: '0px',
                    borderRadius: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      borderRadius: 0,
                      display: 'flex',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                    }}
                  >
                    <IconButton
                      color={
                        pathname === '/dashboard/guide/home'
                          ? 'primary'
                          : 'default'
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        borderRadius: 0,
                      }}
                    >
                      <Icon
                        sx={{
                          paddingX: '10px',
                          paddingY: '5px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          paddingRight: '20px',
                        }}
                      >
                        <HomeOutlined />
                      </Icon>
                      <ListItemText
                        sx={{
                          display: 'flex',
                          padding: 'var(--borderRadius, 4px) 0px',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          flex: '1 0 0',
                        }}
                      >
                        <Typography variant="body1">Home</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link
                href="/dashboard/guide/hubs"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingY: '0px',
                    paddingX: '0px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                    }}
                  >
                    <IconButton
                      color={
                        pathname === '/dashboard/guide/hubs'
                          ? 'primary'
                          : 'default'
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        borderRadius: 0,
                      }}
                    >
                      <Icon
                        sx={{
                          paddingX: '10px',
                          paddingY: '5px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          paddingRight: '20px',
                        }}
                      >
                        <DeviceHub />
                      </Icon>
                      <ListItemText
                        sx={{
                          display: 'flex',
                          padding: 'var(--borderRadius, 4px) 0px',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          flex: '1 0 0',
                        }}
                      >
                        <Typography variant="body1">Hubs</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link
                href="/dashboard/guide/checklist"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingY: '0px',
                    paddingX: '0px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                    }}
                  >
                    <IconButton
                      color={
                        pathname === '/dashboard/guide/checklist'
                          ? 'primary'
                          : 'default'
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        borderRadius: 0,
                      }}
                    >
                      <Icon
                        sx={{
                          paddingX: '10px',
                          paddingY: '5px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          paddingRight: '20px',
                        }}
                      >
                        <Checklist />
                      </Icon>
                      <ListItemText
                        sx={{
                          display: 'flex',
                          padding: 'var(--borderRadius, 4px) 0px',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          flex: '1 0 0',
                        }}
                      >
                        <Typography variant="body1">Checklist</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </Container>

      {/* Contenido principal */}
      <>{children}</>

      {/* Menú inferior para pantallas móviles */}
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
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            component={Link} // Utiliza el componente Link de Next.js para navegar
            href="/dashboard/guide/home"
            sx={{
              color:
                pathname === '/dashboard/guide/home'
                  ? 'primary.main'
                  : 'default',
            }}
          />
          <BottomNavigationAction
            label="Hubs"
            icon={<DeviceHub />}
            component={Link} // Utiliza Link para la navegación
            href="/dashboard/guide/hubs"
            sx={{
              color:
                pathname === '/dashboard/guide/hubs'
                  ? 'primary.main'
                  : 'default',
            }}
          />
          <BottomNavigationAction
            label="Checklist"
            icon={<Checklist />}
            component={Link} // Utiliza Link para la navegación
            href="/dashboard/guide/checklist"
            sx={{
              color:
                pathname === '/dashboard/guide/checklist'
                  ? 'primary.main'
                  : 'default',
            }}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}