import BrandIcon from '@/src/icons/BrandLogo';
import {
  CheckCircle,
  CheckCircleOutline,
  WarningAmberOutlined,
} from '@mui/icons-material';
import { Stack, Container, Typography, Chip, Icon } from '@mui/material';
import React from 'react';

export default function MembershipChip() {
  //!TODO solicitar infor del user para saber si tiene o no suscripción
  const isSubscribed = true;

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        paddingY: 1,
        paddingX: { xs: 1, sm: 2 },
        borderRadius: 3,
        backgroundColor: '#F4F0ED',
        boxShadow: ' 0px 1px 5px 0px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          paddingLeft: { xs: '0px', sm: '0px' },
          paddingRight: { xs: '0px', sm: '0px' },
          marginLeft: { xs: '0px', sm: '0px' },
          marginRight: { xs: '0px', sm: '0px' },
        }}
      >
        <BrandIcon></BrandIcon>
        <Stack
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Typography variant="body1">Nvoye membership</Typography>
        </Stack>
        <Stack
          sx={{
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <Typography variant="body1">Nvoye </Typography>
        </Stack>
      </Container>
      {/* //TODO modificar de acuerdo al user */}
      {isSubscribed ? (
        <>
          <Chip
            size="small"
            color="success"
            variant="filled"
            label="Active"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          ></Chip>
          <Icon color="success" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <CheckCircleOutline />
          </Icon>
        </>
      ) : (
        <>
          <Chip
            size="small"
            color="warning"
            variant="filled"
            label="Inactive"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          ></Chip>
          <Icon color="warning" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <WarningAmberOutlined />
          </Icon>
        </>
      )}
    </Stack>
  );
}
