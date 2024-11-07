import {
  AddTaskOutlined,
  ArchiveOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  EventAvailable,
  FilePresent,
  Flag,
  HealthAndSafetyOutlined,
  Label,
  ListAlt,
  Note,
  NotificationsActive,
  Task,
  TaskAltOutlined,
  TaskOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import BrandIcon from '@/src/icons/BrandLogo';
import { ITask } from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';

export default function TodoComponent({ task }: { task: ITask }) {
  //TODO improve customization to this component

  const flagColor =
    task.priority.name === 'Low'
      ? 'success.main'
      : task.priority.name === 'Medium'
        ? 'warning.main'
        : task.priority.name === 'High'
          ? 'error.main'
          : 'info';

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        py: 2,
        borderRadius: 2,
      }}
    >
      <Stack px={2} pb={1} gap={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{task.title}</Typography>
          <Flag sx={{ color: flagColor }} />
        </Stack>
        <Stack
          direction="row"
          justifyContent="start"
          gap={1}
          alignItems="center"
        >
          <FilePresent />
          <Divider orientation="vertical" />
          <Note />
          <Divider orientation="vertical" />
          <NotificationsActive />
          <Divider orientation="vertical" />
          <EventAvailable />
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
        <Stack direction="row" gap={1}>
          <Chip icon={<HealthAndSafetyOutlined />} label={task.category} />
          <Chip icon={<BrandIcon />} label="Landing package" />
        </Stack>

        {task.taskStatus.name === 'Completed' ? (
          <Button
            sx={{
              textTransform: 'none',
              gap: 1,
              color: 'success.main',
              justifyContent: 'flex-end',
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
          >
            Mark as complete <CheckBoxOutlineBlank />
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
