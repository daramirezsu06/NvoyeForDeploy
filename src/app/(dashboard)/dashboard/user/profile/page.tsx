import { Container, Typography } from '@mui/material';
import React from 'react';

export default function Profile() {
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
      <Typography>user / profile</Typography>
    </Container>
  );
}
