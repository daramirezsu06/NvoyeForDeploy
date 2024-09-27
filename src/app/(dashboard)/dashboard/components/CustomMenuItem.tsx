import { MenuItem, Container, Box, Typography, Icon } from '@mui/material';
import React from 'react';

interface CustomMenuItemProps {
  icon: React.ReactNode; // El ícono se pasa como un componente React
  label: string; // El texto que se mostrará
}

const CustomMenuItem: React.FC<CustomMenuItemProps> = ({ icon, label }) => {
  return (
    <MenuItem
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        height: '45px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: { xs: '0px', sm: '0px' },
          paddingRight: { xs: '0px', sm: '0px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            minWidth: '36px',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Icon>{icon}</Icon>
        </Box>
        <Typography
          sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%' /* 24px */,
            letterSpacing: '0.15px',
          }}
        >
          {label}
        </Typography>
      </Container>
    </MenuItem>
  );
};

export default CustomMenuItem;
