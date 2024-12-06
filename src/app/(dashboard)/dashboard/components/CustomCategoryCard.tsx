import { Card, Stack, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';
import { toCamelCase } from '../../../../utils/helpers/toCamelCase';

type Props = {
  icon: StaticImageData;
  title: string;
};

export default function CustomCategoryCard({ icon, title }: Props) {
  const titleCaseTitle = toCamelCase(title);

  return (
    <Card
      sx={{
        display: { xs: 'inline-flex', sm: 'flex' },
        flexGrow: 1,
        width: { xs: '160px', sm: '225px' },
        height: { xs: '160px', sm: '200px' },
        minWidth: {
          xs: '150px',
          sm: '225px',
        },
        maxWidth: {
          xs: '160px',
          sm: '225px',
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
          {/* //this must modify */}
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
          </Stack>
        </Stack>
      </Link>
    </Card>
  );
}
