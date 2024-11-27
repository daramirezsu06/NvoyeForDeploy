import React from 'react';
import {
  Toolbar,
  Stack,
  IconButton,
  Icon,
  Badge,
  Avatar,
  Button,
} from '@mui/material';
import { MenuOutlined, NotificationsOutlined } from '@mui/icons-material';
import MenuLayout from './MenuLayout';
import Menu from './Menu';

interface MobileTopNavbarProps {
  onMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
  onAvatarClick: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElMenuLayout: HTMLElement | null;
  openMenuLayout: boolean;
  handleCloseMenuLayout: () => void;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const MobileTopNavbar: React.FC<MobileTopNavbarProps> = ({
  onMenuClick,
  onAvatarClick,
  anchorElMenuLayout,
  openMenuLayout,
  handleCloseMenuLayout,
  anchorEl,
  open,
  handleClose,
}) => {
  return (
    <Toolbar
      sx={{
        display: {
          xs: 'flex',
          sm: 'none',
        },
        alignItems: 'center',
        gap: 1,
        alignSelf: 'stretch',
        paddingY: 1,
        paddingX: 3,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '24px',
          flex: '1 0 0',
        }}
      >
        <IconButton
          sx={{
            display: 'flex',
            padding: '8px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={onMenuClick}
        >
          <Icon sx={{ display: 'flex' }}>
            <MenuOutlined sx={{ width: 24, height: 24 }} />
          </Icon>
        </IconButton>

        <MenuLayout
          anchorElMenuLayout={anchorElMenuLayout}
          openMenuLayout={openMenuLayout}
          handleCloseMenuLayout={handleCloseMenuLayout}
        />
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

export default MobileTopNavbar;
