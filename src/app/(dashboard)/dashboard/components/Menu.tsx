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
import { logout } from '../../redux/profileSlice';
import { authlogout } from '@/src/app/(auth)/redux/authSlice';

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
            padding: '8px 0px',
            borderRadius: '4px',
          }}
        >
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Container
              sx={{
                display: 'flex',
                // padding: '6px 16px',
                // padding: 0,
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
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
                <Icon>
                  <PersonOutlined />
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
              >
                Profile
              </Typography>
            </Container>
          </MenuItem>
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
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
                <Icon>
                  <SettingsOutlined />
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
              >
                Settings
              </Typography>
            </Container>
          </MenuItem>
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
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
                <Icon>
                  <ReceiptOutlined />
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
              >
                Billing
              </Typography>
            </Container>
          </MenuItem>
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
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
                <Icon>
                  <Link />
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
              >
                Integraions
              </Typography>
            </Container>
          </MenuItem>
          <Divider
            sx={{
              width: '240px',
              height: '1px',
            }}
          />
        </MenuList>
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
            dispatch(authlogout());
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
            >
              Log out
            </Typography>
          </Container>
        </MenuItem>
      </Paper>
    </MenuMui>
  );
}
