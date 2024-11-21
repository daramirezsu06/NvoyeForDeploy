import { Card, Stack, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import healthicon from '@/src/icons/healthicon.png';
import Link from 'next/link';

type Props = {
  icon: StaticImageData;
  title: string;
  topics: string;
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
        width: { xs: '150px', sm: '150px' },
        height: { xs: '160px', sm: '200px' },
        maxWidth: {
          xs: '200px',
          sm: '472px',
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
        href={`/dashboard/guide/hubs/${title}`} //!modificar esto
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
          {/* //!ESTO DEBE MODIFICARSE */}
          <Stack sx={{}}>
            <Image src={icon} alt="icon" width={48} height={48} />
          </Stack>
          <Typography variant="h5"> {titleCaseTitle}</Typography>
          <Typography variant="body2"> {topics}</Typography>
        </Stack>
      </Link>
    </Card>
  );
}
