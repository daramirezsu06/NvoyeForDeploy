'use client';
import {
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  EventAvailable,
  FilePresent,
  Flag,
  NoteTwoTone,
  NotificationsActive,
  NotificationsActiveTwoTone,
} from '@mui/icons-material';
import {
  Button,
  Chip,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import BrandIcon from '@/src/icons/BrandLogo';
import { IBackendTasks } from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { wrap } from 'module';
import TaskDetail from './TaskDetail';

export default function TodoComponent({ task }: { task: IBackendTasks }) {
  //TODO improve customization to this component

  const flagColor =
    task.priority.name === 'Low'
      ? 'success.main'
      : task.priority.name === 'Medium'
        ? 'warning.main'
        : task.priority.name === 'High'
          ? 'error.main'
          : 'info';

  const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false);
  const handleOpenTaskDetail = () => setIsTaskDetailOpen(true);
  const handleCloseTaskDetail = () => {
    setIsTaskDetailOpen(false);
    // console.log('cerrando');
  };

  return (
    // TODO ponerle onClick que habra el detalle de la task
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        py: 2,
        borderRadius: 2,
        '&:hover': {
          backgroundColor: '#F4F0ED',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        },
      }}
    >
      <Modal
        open={isTaskDetailOpen} //modificar
        onClose={handleCloseTaskDetail} //modificar
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >
        <TaskDetail task={task} handleCloseTaskDetail={handleCloseTaskDetail} />
      </Modal>
      <Stack px={2} pb={1} gap={1} onClick={handleOpenTaskDetail}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{task.customTitle}</Typography>
          <Flag sx={{ color: flagColor }} />
        </Stack>
        <Stack
          direction="row"
          justifyContent="start"
          gap={1}
          alignItems="center"
        >
          {/* //TODO adjust depending on taks */}
          {task.documents.length > 0 && (
            <>
              <FilePresent sx={{ color: 'primary.main' }} />
              <Divider orientation="vertical" />
            </>
          )}
          {task.notes && (
            <>
              <NoteTwoTone sx={{ color: 'primary.main' }} />
              <Divider orientation="vertical" />
            </>
          )}
          {task.remindDate && (
            <>
              <NotificationsActiveTwoTone sx={{ color: 'primary.main' }} />
              <Divider orientation="vertical" />
            </>
          )}
          {task.dueDate && (
            <>
              <EventAvailable sx={{ color: 'primary.main' }} />
            </>
          )}
        </Stack>
      </Stack>
      <Divider />

      <Stack
        px={2}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'flex-end', sm: 'space-between' },
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          {/* <Chip icon={<HealthAndSafetyOutlined />} label={task.category} /> */}

          {task.categories.length === 0 && (
            <Chip icon={<BrandIcon />} label="Landing package" />
          )}
          {task.categories.map((category, index) => (
            <Chip
              key={index}
              // icon={<BrandIcon />}
              label={category.category.name}
            />
          ))}
        </Stack>

        {/* //TODO darle funcionalidad a este boton */}
        {task.taskStatus.name === 'Completed' ? (
          <Button
            sx={{
              textTransform: 'none',
              gap: 1,
              color: 'success.main',
              justifyContent: 'flex-end',
            }}
            onClick={() => {
              console.log('click');
            }}
          >
            Completed <CheckBoxOutlined />
          </Button>
        ) : (
          <Button
            sx={{
              textTransform: 'none',
              gap: 1,
              color: 'black',
              justifyContent: 'flex-end',
            }}
            onClick={() => {
              console.log('click');
            }}
          >
            Mark as complete <CheckBoxOutlineBlank />
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
