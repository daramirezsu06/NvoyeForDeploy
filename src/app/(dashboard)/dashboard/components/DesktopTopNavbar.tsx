import React from 'react';
import {
  Toolbar,
  Stack,
  Link,
  Button,
  IconButton,
  Badge,
  Icon,
  Avatar,
} from '@mui/material';
import {
  LibraryBooks,
  Diversity2,
  NotificationsOutlined,
} from '@mui/icons-material';
import BrandIcon from '@/src/icons/BrandLogo';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

interface DesktopTopNavbarProps {
  onAvatarClick: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const DesktopTopNavbar: React.FC<DesktopTopNavbarProps> = ({
  onAvatarClick,
  anchorEl,
  open,
  handleClose,
}) => {
  const pathname = usePathname();

  return (
    <Toolbar
      sx={{
        display: {
          xs: 'none',
          sm: 'flex',
        },
        alignItems: 'center',
        gap: 1,
        alignSelf: 'stretch',
        paddingY: 1,
        paddingX: 3,
      }}
    >
      <BrandIcon />
      <Stack direction="row" alignItems="center" gap="24px" flex={1} pl={2}>
        <Link href="/dashboard/guide">
          <Button
            size="medium"
            color={pathname.includes('/dashboard/guide') ? 'primary' : 'info'}
            startIcon={<LibraryBooks />}
          >
            Guide
          </Button>
        </Link>

        <Link href="/dashboard/community">
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
      </Stack>

      <Stack display="flex" direction="row" alignItems="center" gap={2}>
        <Badge
          variant="standard"
          color="primary"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <IconButton
            size="small"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              padding: 1,
            }}
          >
            <Icon sx={{ display: 'flex' }}>
              <NotificationsOutlined sx={{ width: 24, height: 24 }} />
            </Icon>
          </IconButton>
          <Badge
            badgeContent={1} //! Cambiar según el valor del backend
            color="primary"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          />
        </Badge>
        <Button onClick={onAvatarClick} sx={{ width: 24, minWidth: 24 }}>
          <Avatar sx={{ width: 24, height: 24 }}>D</Avatar>
        </Button>
        <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Stack>
    </Toolbar>
  );
};

export default DesktopTopNavbar;
