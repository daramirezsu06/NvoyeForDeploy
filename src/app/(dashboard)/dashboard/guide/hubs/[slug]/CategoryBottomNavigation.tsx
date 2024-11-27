'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { BottomNavigationAction, IconButton, Stack } from '@mui/material';
import theme from '@/src/app/theme';
import {
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from '@mui/icons-material';
import { subHubMocks } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/supHubs';
import Link from 'next/link';
import Image from 'next/image';
import { toCamelCase } from '@/src/utils/helpers/toCamelCase';
// import { handleScroll } from '@/src/utils/helpers/handleScroll';

type Props = {};

export default function CategoryBottomNavigation({}: Props) {
  const pathname = usePathname();
  const subHubName = pathname?.split('/').pop();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  // const [isReady, setIsReady] = React.useState(false);

  // Function for scroll handling
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Cantidad de píxeles a desplazar
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Función para centrar el link activo
  const scrollToActiveLink = () => {
    if (scrollRef.current && activeLinkRef.current) {
      const container = scrollRef.current;
      const activeLink = activeLinkRef.current;

      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      // Calcula la posición relativa del link activo respecto al contenedor
      const offsetLeft =
        linkRect.left - containerRect.left + container.scrollLeft;

      // Centra el link activo
      const scrollToPosition =
        offsetLeft - container.clientWidth / 2 + linkRect.width / 2;

      container.scrollTo({
        left: scrollToPosition,
        behavior: 'instant',
      });
    }
  };

  // Scroll al link activo cuando cambia la ruta
  useEffect(() => {
    scrollToActiveLink();
    // setIsReady(true);
  }, [pathname]);

  return (
    <Stack
      sx={{
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'row',
        maxWidth: { xs: '80vw', md: '85vw', lg: '90vw' },
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 4,
        paddingY: 5,
        backgroundColor: theme.custom.paperElevationFour,
        position: 'fixed',
        bottom: 0,
        zIndex: 10,
        flex: 1,
      }}
    >
      <IconButton onClick={() => handleScroll('left')}>
        <ArrowCircleLeftOutlined sx={{ width: 35, height: 35 }} />
      </IconButton>

      <Stack
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          maxWidth: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          gap: '16px',
          flexGrow: 1,
          whiteSpace: 'nowrap',
          paddingInline: '16px',
        }}
        className="no-scrollbar"
      >
        {subHubMocks.map((subHub) => {
          const isActive = toCamelCase(subHub.title) === subHubName;
          return (
            <Link
              key={subHub.title}
              href={`/dashboard/guide/hubs/${toCamelCase(subHub.title)}`}
              passHref
              ref={isActive ? activeLinkRef : null} // Referencia al link activo
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                minWidth: '260px',
                backgroundColor: isActive
                  ? 'rgba(35, 93, 176, 0.08)'
                  : theme.custom.paperElevationOne,
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                borderRadius: '8px',
                whiteSpace: 'normal',
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'inherit',
              }}
            >
              {subHub.title}
              <Image
                src={subHub.icon}
                alt={subHub.title}
                style={{ width: 42, height: 34, marginBottom: 4 }}
              />
            </Link>
          );
        })}
      </Stack>

      <IconButton onClick={() => handleScroll('right')}>
        <ArrowCircleRightOutlined sx={{ width: 35, height: 35 }} />
      </IconButton>
    </Stack>
  );
}
