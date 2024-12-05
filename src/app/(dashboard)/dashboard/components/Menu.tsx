import { useAppDispatch } from '@/src/app/state/hooks';
import {
  Link,
  Logout,
  PersonOutlined,
  ReceiptOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Icon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';
import MenuMui from '@mui/material/Menu';
import { useRouter } from 'next/navigation';

import React from 'react';
// import { authlogout } from '@/src/app/(auth)/redux/authSlice';
import Links from 'next/link';
import CustomMenuItem from './CustomMenuItem';
import { logout } from '@/src/app/(auth)/redux';

export default function Menu({ anchorEl, open, handleClose }: any) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <MenuMui
      disableScrollLock={true}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
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
          width: '240px',
          minWidth: '220px',
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
            padding: '0px 0px',
            borderRadius: '4px',
          }}
          onClick={handleClose}
        >
          <Links
            href="/dashboard/user/profile"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <CustomMenuItem icon={<PersonOutlined />} label="Profile" />
          </Links>

          <Links
            href="/dashboard/user/settings"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <CustomMenuItem icon={<SettingsOutlined />} label="Settings" />
          </Links>

          <Links
            href="/dashboard/user/billing"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <CustomMenuItem icon={<ReceiptOutlined />} label="Billing" />
          </Links>

          <Links
            href="/dashboard/user/integrations"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <CustomMenuItem icon={<Link />} label="Integrations" />
          </Links>

          <Divider
            sx={{
              width: '240px',
              height: '1px',
            }}
          />

          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              color: 'error',
            }}
            onClick={() => {
              dispatch(logout());
              // dispatch(authlogout());
              router.push('/');
            }}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
                color: 'error.main',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  minWidth: '36px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Icon
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <Logout />
                </Icon>
              </Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '150%' /* 24px */,
                  letterSpacing: '0.15px',
                }}
                component={'span'}
              >
                Log out
              </Typography>
            </Container>
          </MenuItem>
        </MenuList>
      </Paper>
    </MenuMui>
  );
}
