import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Links from 'next/link';
import MenuMui from '@mui/material/Menu';
import { Paper, MenuList, Button, Link } from '@mui/material';
import { LibraryBooks, Diversity2 } from '@mui/icons-material';

export default function MenuLayout({
  anchorElMenuLayout,
  openMenuLayout,
  handleCloseMenuLayout,
}: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <MenuMui
      disableScrollLock={true}
      open={openMenuLayout}
      anchorEl={anchorElMenuLayout}
      onClose={handleCloseMenuLayout}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '220px',
        alignItems: 'flex-start',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '180px',
          minWidth: '180px',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          borderRadius: '4px',
          backgroundColor: '#FDFCFB',
        }}
        elevation={0}
      >
        <MenuList
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            padding: '0px 10px',
            borderRadius: '4px',
          }}
          onClick={handleCloseMenuLayout}
        >
          <Link href="/dashboard/guide" sx={{ width: '100%' }}>
            <Button
              size="medium"
              color={pathname.includes('/dashboard/guide') ? 'primary' : 'info'}
              startIcon={<LibraryBooks />}
            >
              Guide
            </Button>
          </Link>

          <Link href="/dashboard/community" sx={{ width: '100%' }}>
            <Button
              size="medium"
              color={
                pathname.includes('/dashboard/community') ? 'primary' : 'info'
              }
              startIcon={<Diversity2 />}
            >
              Community
            </Button>
          </Link>
        </MenuList>
      </Paper>
    </MenuMui>
  );
}
