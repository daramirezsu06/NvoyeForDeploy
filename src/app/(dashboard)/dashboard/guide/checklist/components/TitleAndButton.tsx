'use client';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import theme from '@/src/app/theme';
import React, { useState } from 'react';
import NewTaskButton from './NewTaskButton';
import NewTaskModal from './NewTaskModal';
import { IBackendTasks } from '../mocks/tasksMocks';

type Props = {
  onAddTask: (newTask: IBackendTasks) => void;
};

export default function TitleAndButton({ onAddTask }: Props) {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const handleOpenNewTask = () => setIsNewTaskOpen(true);
  const handleCloseNewTask = () => setIsNewTaskOpen(false);

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
        <Typography variant="h4" component={'h1'}>
          Checklist
        </Typography>
        <Typography
          sx={{ display: { xs: 'none', sm: 'flex' } }}
          component={'h2'}
        >
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
        <NewTaskModal
          handleCloseNewTask={handleCloseNewTask}
          onAddTask={onAddTask}
        />
      </Modal>
    </Box>
  );
}
