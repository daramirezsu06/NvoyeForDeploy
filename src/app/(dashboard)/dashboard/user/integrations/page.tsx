'use client';

import {
  Box,
  Button,
  Chip,
  Container,
  Icon,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import GoogleIcon from '@/src/icons/GoogleIcon.png';
import { Clear, Sync } from '@mui/icons-material';

export default function Integrations() {
  const [isSync, setIsSync] = useState(false);

  //!logica para hacer la coneccion
  const handleSync = () => {
    setIsSync(true);
  };

  //!logic to disconect
  const handleCancelSync = () => {
    setIsSync(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        // paddingLeft: { xs: '0px', sm: '0px' },
        // paddingRight: { xs: '0px', sm: '0px' },
        paddingX: { xs: 1, sm: 5 },
        paddingY: { xs: 1, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FDFCFB',
        flex: 1,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '800px',
          alignSelf: 'stretch',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            padding: 2,
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          <Typography variant="h4">Integrations</Typography>
          <Typography variant="subtitle1">
            Add extensions and connect your Nvoye with third-party apps.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            justifyContent: 'center',
            padding: 2,
            backgroundColor: '#FDFCFB',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingY: 1,
              paddingX: 2,
              gap: 1,
              borderRadius: 3,
              backgroundColor: '#F4F0ED',
              boxShadow: '0px 6px 10px 0px rgba(0, 0, 0, 0.17)',
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignSelf: 'stretch',
                paddingY: 1,
                paddingX: 2,
                // alignItems: 'center',
                // justifyContent: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
              }}
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '60px',
                  height: '60px',
                  paddingLeft: { xs: '0px', sm: '0px' },
                  paddingRight: { xs: '0px', sm: '0px' },
                }}
              >
                <Icon
                  sx={{
                    width: '60px',
                    height: '60px',
                  }}
                >
                  <Image
                    src={GoogleIcon}
                    width={60}
                    height={60}
                    alt="google icon"
                  ></Image>
                </Icon>
              </Container>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 2,
                  flex: 1,
                }}
              >
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 2,
                    flex: 1,
                  }}
                >
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                      alignSelf: 'stretch',
                    }}
                  >
                    <Typography variant="h6">Google Calendar</Typography>

                    {isSync && (
                      <Chip
                        size="small"
                        color="success"
                        variant="outlined"
                        label="Connected"
                        sx={{
                          backgroundColor: 'rgba(0, 129, 12, 0.30)',
                        }}
                      ></Chip>
                    )}
                  </Stack>
                  <Typography variant="body2">
                    Connect and synchronize your tasks with your Google
                    calendar.
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    alignSelf: 'stretch',
                    gap: '10px',
                  }}
                >
                  {isSync ? (
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        textTransform: 'none',
                        gap: 1,
                        borderRadius: 2,
                      }}
                      onClick={handleCancelSync}
                    >
                      Disconnect
                      <Clear />
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: 'none',
                        gap: 1,
                        borderRadius: 2,
                      }}
                      onClick={handleSync}
                    >
                      Connect
                      <Sync />
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
