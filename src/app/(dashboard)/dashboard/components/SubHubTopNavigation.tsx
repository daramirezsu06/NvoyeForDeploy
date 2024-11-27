import { ArrowBack, ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  Toolbar,
  Stack,
  Box,
  IconButton,
  Icon,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { subHubMocks } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/supHubs';
import { toCamelCase } from '@/src/utils/helpers/toCamelCase';
import { generateSlug } from '@/src/utils/helpers/generateSlug';
import { fromCamelCase } from '@/src/utils/helpers/fromCamelCase';

type Props = {};

export default function SubHubTopNavigation({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const subHubName = pathname
    ? fromCamelCase(pathname.split('/').pop()?.split('?')[0] || '')
    : '';

  const href =
    pathname === '/dashboard/guide/hubs/subHubs'
      ? '/dashboard/guide/hubs'
      : '/dashboard/guide/hubs/subHubs';

  // Encontrar el índice del subHub actual
  const currentIndex = subHubMocks.findIndex(
    (item) => item.title.toLowerCase() === subHubName.toLowerCase() // Comparar de forma insensible a mayúsculas
  );
  console.log(currentIndex);

  // URLs de navegación
  const prevUrl =
    currentIndex > 0
      ? `/dashboard/guide/hubs/${toCamelCase(subHubMocks[currentIndex - 1].title)}`
      : null;

  const nextUrl =
    currentIndex < subHubMocks.length - 1
      ? `/dashboard/guide/hubs/${toCamelCase(subHubMocks[currentIndex + 1].title)}`
      : null;

  return (
    <Toolbar
      sx={{
        display: {
          xs: 'flex',
          sm: 'none',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        gap: 1,
        paddingLeft: 1,
        paddingRight: 1,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flex: '1 0 0',
          gap: 1,
          color: 'primary.main',
          // paddingLeft: { xs: '0px', sm: '0px' },
          // paddingRight: { xs: '0px', sm: '0px' },
        }}
      >
        <Link href={href}>
          <IconButton color="primary">
            <Icon>
              <ArrowBack />
            </Icon>
          </IconButton>
        </Link>

        <Typography variant="h6" component={'span'}>
          {subHubName}
        </Typography>
      </Stack>

      {pathname !== '/dashboard/guide/hubs/subHubs' && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '13px',
          }}
        >
          <IconButton
            color="primary"
            disabled={!prevUrl}
            onClick={() => prevUrl && router.push(prevUrl)}
          >
            <Icon>
              <ChevronLeft />
            </Icon>
          </IconButton>
          <IconButton
            color="primary"
            disabled={!nextUrl}
            onClick={() => nextUrl && router.push(nextUrl)}
          >
            <Icon>
              <ChevronRight />
            </Icon>
          </IconButton>
        </Box>
      )}
    </Toolbar>
  );
}
