import {
  Paper,
  MenuList,
  Box,
  Container,
  Icon,
  MenuItem,
  Typography,
  Divider,
  Modal,
} from '@mui/material';
import React, { useState } from 'react';
import MenuMui from '@mui/material/Menu';
import { Add, Cancel, CancelOutlined, RemoveRedEye } from '@mui/icons-material';
import TaskDetail from '../TaskDetail';
import { IRecomendedTask } from '../../mocks/recomendedTasks';
import RecomendedTaskDetail from './RecomendedTaskDetail';

interface IProps {
  recomendedTask: IRecomendedTask;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

export default function RecomendedTaskItemMenu({
  anchorEl,
  open,
  handleClose,
  recomendedTask,
}: IProps) {
  const [isRecomendedTaskDetailOpen, setIsRecomendedTaskDetailOpen] =
    useState(false);

  const handleOpenRecomendedTaskDetail = () => {
    setIsRecomendedTaskDetailOpen(true);
  };

  const handleCloseRecomendedTaskDetail = () => {
    setIsRecomendedTaskDetailOpen(false);
  };

  const handleAddRecomendedTaskToChecklist = () => {
    //TODO send this recomended task to checklist
    console.log(recomendedTask);
  };

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
            onClick={handleOpenRecomendedTaskDetail}
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
          <Modal
            open={isRecomendedTaskDetailOpen}
            onClose={handleCloseRecomendedTaskDetail}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <RecomendedTaskDetail
              handleAddRecomendedTaskToChecklist={
                handleAddRecomendedTaskToChecklist
              }
              recomendedTask={recomendedTask}
              handleCloseRecomendedTaskDetail={handleCloseRecomendedTaskDetail}
            />
          </Modal>
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              color: 'error',
            }}
            onClick={handleAddRecomendedTaskToChecklist}
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
