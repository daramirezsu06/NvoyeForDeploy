import { Box, Card, Stack, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';
import { toCamelCase } from '../../../../utils/helpers/toCamelCase';

type Props = {
  icon: StaticImageData;
  title: string;
  topics?: string[];
};

export default function CustomCategoryCard({ icon, title, topics }: Props) {
  const titleCaseTitle = toCamelCase(title);

  return (
    <Box
      sx={{
        display: { xs: 'inline-flex', sm: 'flex' },
        height: { xs: '133px', sm: '150px' },
        width: { xs: '160px', sm: '225px' },
        minWidth: {
          xs: '150px',
          sm: '225px',
        },
        maxWidth: {
          xs: '160px',
          sm: '225px',
        },
        flexGrow: 1,
        padding: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' center',
        gap: '8px',
        flexShrink: 0,
        borderRadius: ' 16px',
        backgroundColor: '#F4F0ED',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        '&:hover': {
          boxShadow: ' 0px 5px 10px -2px rgba(0, 0, 0, 0.20)',
          cursor: 'pointer',
          backgroundColor: '#F5F3F1',
        },
      }}
    >
      <Link
        href={`/dashboard/guide/hubs/${titleCaseTitle}`} //TODO modify this url acordinly to the hub
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
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Image src={icon} alt="icon" width={48} height={48} />
            <Typography variant="subtitle1" component={'h5'}>
              {' '}
              {title}
            </Typography>
            <Typography variant="body2" component={'h5'}>
              {' '}
              {topics}
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
}
