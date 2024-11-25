'use client';
import { Box, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewTaskButton from './NewTaskButton';
import Image from 'next/image';
import icon from '@/src/icons/AddTaskIcon.png';
import NewTaskModal from './NewTaskModal';
import { IBackendTasks } from '../mocks/tasksMocks';

type Props = {
  onAddTask: (newTask: IBackendTasks) => void;
};

export default function NoTasksComponent({ onAddTask }: Props) {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const handleOpenNewTask = () => setIsNewTaskOpen(true);
  const handleCloseNewTask = () => {
    setIsNewTaskOpen(false);
    // console.log('cerrando');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
        alignSelf: 'stretch',
        padding: 2,
        minHeight: '400px',
        borderRadius: 3,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Stack mb={3}>
          <Image src={icon} alt="icon" width={48} height={48} />
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          mb={3}
        >
          <Typography variant="h6" component={'span'}>
            Nothing here yet!
          </Typography>
          <Typography variant="subtitle2" component={'span'}>
            Add something to your checklist
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
      </Stack>
    </Box>
  );
}
