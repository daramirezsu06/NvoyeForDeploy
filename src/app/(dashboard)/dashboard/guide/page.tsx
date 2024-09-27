import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {};

function Guide({}: Props) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FBFAF8',
        padding: 0,
        gap: 4,
        alignItems: 'center',
        alignSelf: 'stretch',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '800px',
          maxWidth: '800px',
          padding: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F8F6F5',
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Image src={'/images/SHAPE.png'} alt="shape" width={70} height={70} />
        <Stack
          sx={{
            display: 'flex',
            maxWidth: '500px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            Welcome to your diplomatic hub
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              width: 'auto',
              // maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            An information center for everything you need to learn about your
            host country and recommended tasks you can get started on.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: ' flex-start',
            gap: '8px',
            alignSelf: ' stretch',
            borderRadius: 2,
            border: '1px solid #E6E5E5',
            background:
              'radial-gradient(249.19% 158.15% at 19.83% 29.92%, #FFF 0%, #C2D7FF 76%, #FFF 100%)',
            position: 'relative',
            marginTop: '16px',
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: ' center',
              alignItems: 'flex-end',
              gap: '8px',
              alignSelf: 'stretch',
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                marginBottom: '16px',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: ' center',
                  alignItems: 'flex-start',
                  alignSelf: ' stretch',
                }}
              >
                Build your personal experience
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: ' center',
                  alignItems: 'flex-start',
                  alignSelf: ' stretch',
                }}
              >
                To suggest the best tasks for you, answer a few questions to
                customize your experience.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: ' column',
              justifyContent: 'center',
              alignItems: ' center',
              gap: '9px',
              position: 'absolute',
              right: '16px',
              bottom: '16px',
            }}
          >
            <Image
              src={'/images/personalexpicon.png'}
              alt="shape"
              width={48}
              height={48}
            />
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: ' center',
              gap: 3,
            }}
          >
            <Button variant="contained" color="primary" size="medium">
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '155%',
                  letterSpacing: '0.4px',
                  textTransform: 'none',
                }}
              >
                Get started
              </Typography>
            </Button>
            <Button sx={{ textTransform: 'none' }}>Learn more</Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Guide;
