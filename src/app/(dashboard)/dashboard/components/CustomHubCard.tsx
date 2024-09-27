import { Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import healthicon from '@/src/icons/healthicon.png';
import Link from 'next/link';

type Props = {};

export default function CustomHubCard({}: Props) {
  return (
    <Card
      sx={{
        display: { xs: 'inline-flex', sm: 'flex' },
        flexGrow: 1,
        minWidth: { xs: '150px', sm: '200px' },
        minHeight: { xs: '160px', sm: '200px' },
        maxWidth: '272px',
        padding: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' center',
        gap: '8px',
        flexShrink: 0,
        borderRadius: ' 16px',
        backgroundColor: '#F5F3F1',
        '&:hover': {
          boxShadow: ' 0px 5px 10px -2px',
          cursor: 'pointer',
        },
      }}
    >
      <Link
        href="/dashboard/guide/hubs" //!modificar esto
        style={{
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: ' center',
          color: 'inherit',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* //!ESTO DEBE MODIFICARSE */}
          <Stack sx={{}}>
            <Image src={healthicon} alt="icon" width={48} height={48} />
          </Stack>
          <Typography variant="h5"> Health</Typography>
          <Typography variant="body2">Systems, Insurance</Typography>
        </Stack>
      </Link>
    </Card>
  );
}
