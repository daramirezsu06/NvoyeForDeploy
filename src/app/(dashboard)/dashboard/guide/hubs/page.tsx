import { Container } from '@mui/material';
import React from 'react';

type Props = {};

export default function Hubs({}: Props) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column', // Columna en pantallas móviles, fila en pantallas grandes
        minHeight: '100vh',
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#F7F6F5',
        padding: 0,
      }}
    >
      Guide/Hubs
    </Container>
  );
}
