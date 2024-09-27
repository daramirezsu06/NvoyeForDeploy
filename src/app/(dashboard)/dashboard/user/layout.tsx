'use client';
import {
  KeyboardDoubleArrowLeft,
  Link,
  PersonOutlined,
  ReceiptOutlined,
  SettingsOutlined,
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
import Links from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function DashboardUserLayout({
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
            <Typography variant="subtitle1">Guide</Typography>
            <IconButton
              onClick={() => {
                console.log('abriendo/cerrando');
              }}
            >
              <KeyboardDoubleArrowLeft />
            </IconButton>
          </Stack>
          <List sx={{ padding: 0, width: '100%', borderRadius: 0 }}>
            <ListItem sx={{ padding: 0, width: '100%', borderRadius: 0 }}>
              <Links
                href="/dashboard/user/profile"
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
                        pathname === '/dashboard/user/profile'
                          ? 'primary'
                          : 'default'
                      } //!modificar de acuerdo al path
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
                        <PersonOutlined />
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
                        <Typography variant="body1">Profile</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Links>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Links
                href="/dashboard/user/settings"
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
                        pathname === '/dashboard/user/settings'
                          ? 'primary'
                          : 'default'
                      } //!modificar de acuerdo al path
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
                        <SettingsOutlined />
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
                        <Typography variant="body1">Settings</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Links>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Links
                href="/dashboard/user/billing"
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
                        pathname === '/dashboard/user/billing'
                          ? 'primary'
                          : 'default'
                      } //!modificar de acuerdo al path
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
                        <ReceiptOutlined />
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
                        <Typography variant="body1">Billing</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Links>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Links
                href="/dashboard/user/integrations"
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
                        pathname === '/dashboard/user/integrations'
                          ? 'primary'
                          : 'default'
                      } //!modificar de acuerdo al path
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
                        <Link />
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
                        <Typography variant="body1">Integrations</Typography>
                      </ListItemText>
                    </IconButton>
                  </Box>
                </Box>
              </Links>
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
            label="Profile"
            icon={<PersonOutlined />}
            href="/dashboard/user/profile"
            component={Links}
            sx={{
              color:
                pathname === '/dashboard/user/profile'
                  ? 'primary.main'
                  : 'default',
            }}
          />
          <BottomNavigationAction
            label="Settings"
            icon={<SettingsOutlined />}
            component={Links} // Utiliza el componente Link de Next.js para navegar
            href="/dashboard/user/settings"
            sx={{
              color:
                pathname === '/dashboard/user/settings'
                  ? 'primary.main'
                  : 'default',
            }}
          />
          <BottomNavigationAction
            label="Billing"
            icon={<ReceiptOutlined />}
            component={Links} // Utiliza el componente Link de Next.js para navegar
            href="/dashboard/user/billing"
            sx={{
              color:
                pathname === '/dashboard/user/billing'
                  ? 'primary.main'
                  : 'default',
            }}
          />
          <BottomNavigationAction
            label="Integrations"
            icon={<Link />}
            component={Links} // Utiliza el componente Link de Next.js para navegar
            href="/dashboard/user/integrations"
            sx={{
              color:
                pathname === '/dashboard/user/integrations'
                  ? 'primary.main'
                  : 'default',
            }}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
