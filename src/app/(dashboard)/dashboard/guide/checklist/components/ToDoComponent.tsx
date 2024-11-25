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
  Alert,
  Button,
  Chip,
  Divider,
  Modal,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import BrandIcon from '@/src/icons/BrandLogo';
import { IBackendTasks } from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { wrap } from 'module';
import TaskDetail from './TaskDetail';

export default function TodoComponent({
  task,
  onMarkAsComplete,
  onMarkAsIncomplete,
  onMarkAsArchived,
}: {
  task: IBackendTasks;
  onMarkAsComplete: (taskId: number) => void;
  onMarkAsIncomplete: (taskId: number) => void;
  onMarkAsArchived: (taskId: number) => void;
}) {
  const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false);
  const handleOpenTaskDetail = () => setIsTaskDetailOpen(true);
  const handleCloseTaskDetail = () => setIsTaskDetailOpen(false);

  const handleComplete = () => {
    onMarkAsComplete(task.id);
  };

  const handleIncomplete = () => {
    onMarkAsIncomplete(task.id);
  };

  const flagColor =
    task.priority.name === 'Low'
      ? 'success.main'
      : task.priority.name === 'Medium'
        ? 'warning.main'
        : task.priority.name === 'High'
          ? 'error.main'
          : 'info';

  return (
    <>
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
          open={isTaskDetailOpen}
          onClose={handleCloseTaskDetail}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <TaskDetail
            task={task}
            handleCloseTaskDetail={handleCloseTaskDetail}
            onMarkAsComplete={onMarkAsComplete}
            onMarkAsIncomplete={onMarkAsIncomplete}
            onMarkAsArchived={onMarkAsArchived}
          />
        </Modal>
        <Stack px={2} pb={1} gap={1} onClick={handleOpenTaskDetail}>
          <Stack direction="row" justifyContent="space-between">
            <Typography component={'h5'}>{task.customTitle}</Typography>
            <Flag sx={{ color: flagColor }} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="start"
            gap={1}
            alignItems="center"
          >
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
            {task.categories?.length === 0 && (
              <Chip icon={<BrandIcon />} label="Landing package" />
            )}
            {task.categories?.map((category, index) => (
              <Chip key={index} label={category.category.name} />
            ))}
          </Stack>

          {task.taskStatus.name === 'Completed' ? (
            <Button
              sx={{
                textTransform: 'none',
                gap: 1,
                color: 'success.main',
                justifyContent: 'flex-end',
              }}
              onClick={handleIncomplete}
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
              onClick={handleComplete}
            >
              Mark as complete <CheckBoxOutlineBlank />
            </Button>
          )}
        </Stack>
      </Paper>
    </>
  );
}
