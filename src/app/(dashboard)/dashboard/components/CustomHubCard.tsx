import { Card, Stack, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';
import theme from '@/src/app/theme';

type Props = {
  icon: StaticImageData;
  title: string;
  topics?: string;
};

export default function CustomHubCard({ icon, title, topics }: Props) {
  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );
  }
  const titleCaseTitle = toTitleCase(title);

  return (
    <Card
      sx={{
        display: { xs: 'inline-flex', md: 'flex' },
        flexGrow: 1,
        height: { xs: '160px', md: '200px' },
        width: { xs: '100%', md: '262x' },
        minWidth: {
          xs: '144px',
          md: '250px',
        },
        maxWidth: {
          xs: '190px',
          md: '272px',
        },
        flex: 1,
        padding: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' center',
        gap: '8px',
        flexShrink: 0,
        borderRadius: ' 16px',
        backgroundColor: '#F5F3F1',
        boxShadow: ' 0px 0px 0px 0px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#F4F0ED',
          boxShadow: ' 0px 5px 10px -2px rgba(0, 0, 0, 0.20)',
        },
      }}
    >
      <Link
        href={`/dashboard/guide/hubs/subHubs`} //TODO modify this url acordinly to the hub
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
            textAlign: 'center',
          }}
        >
          {/* //this must modify */}
          <Stack sx={{}}>
            <Image src={icon} alt="icon" width={48} height={48} />
          </Stack>
          <Typography variant="h5" component={'h4'}>
            {' '}
            {titleCaseTitle}
          </Typography>
          <Typography variant="body2" component={'h5'}>
            {' '}
            {topics}
          </Typography>
        </Stack>
      </Link>
    </Card>
  );
}
