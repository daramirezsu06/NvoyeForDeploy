import {
  Paper,
  MenuList,
  Box,
  Container,
  Icon,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import React from 'react';
import MenuMui from '@mui/material/Menu';
import { Add, Cancel, CancelOutlined, RemoveRedEye } from '@mui/icons-material';

export default function RecomendedTaskItemMenu({
  anchorEl,
  open,
  handleClose,
}: any) {
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
          width: '200px',
          minWidth: '200px',
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
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              color: 'error',
            }}
            // TODO give function to this button
            onClick={() => {}}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
                color: 'action.active',
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
                  <RemoveRedEye />
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
                View task
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
              color: 'error',
            }}
            // TODO give function to this button
            onClick={() => {}}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
                color: 'action.active',
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
                  <Add />
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
                Add to checklist
              </Typography>
            </Container>
          </MenuItem>
          <Divider orientation="horizontal" flexItem />
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              color: 'error',
            }}
            // TODO give function to this button
            onClick={() => {}}
          >
            <Container
              sx={{
                display: 'flex',
                padding: '6px 16px',
                alignItems: 'center',
                paddingLeft: { xs: '0px', sm: '0px' },
                paddingRight: { xs: '0px', sm: '0px' },
                color: 'action.active',
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
                    color: 'error.main',
                  }}
                >
                  <CancelOutlined />
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
                Dismiss item
              </Typography>
            </Container>
          </MenuItem>
        </MenuList>
      </Paper>
    </MenuMui>
  );
}
