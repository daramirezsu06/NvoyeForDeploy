'use client';
import { AddTaskOutlined } from '@mui/icons-material';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import theme from '@/src/app/theme';
import React, { useState } from 'react';
import NewTaskButton from './NewTaskButton';
import NewTaskModal from './NewTaskModal';

type Props = {};

export default function TitleAndButton({}: Props) {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const handleOpenNewTask = () => setIsNewTaskOpen(true);
  const handleCloseNewTask = () => {
    setIsNewTaskOpen(false);
    // console.log('cerrando');
  };

  return (
    <Box
      sx={{
        padding: 2,
        gap: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.custom.paperElevationOne,
        borderRadius: 2,
      }}
    >
      <Stack>
        <Typography variant="h4">Checklist</Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'flex' } }}>
          A guided list of tasks to help you relocate and integrate.
        </Typography>
      </Stack>

      <NewTaskButton handleOpenNewTask={handleOpenNewTask} />

      <Modal
        open={isNewTaskOpen} //modificar
        onClose={handleCloseNewTask} //modificar
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >
        <NewTaskModal handleCloseNewTask={handleCloseNewTask} />
      </Modal>
    </Box>
  );
}