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
        display: { xs: 'inline-flex', sm: 'flex' },
        flexGrow: 1,
        width: { xs: '220px', sm: '272x' },
        height: { xs: '160px', sm: '200px' },
        minWidth: {
          xs: '150px',
          sm: '250px',
        },
        maxWidth: {
          xs: '200px',
          sm: '272px',
        },
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
