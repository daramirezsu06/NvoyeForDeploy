import {
  AddTaskOutlined,
  ArchiveOutlined,
  CheckBoxOutlineBlank,
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

type Props = {};

export default function TodoComponent({}: Props) {
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
      <Stack px={2} pb={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>EHIC registration</Typography>
          <Flag />
        </Stack>
        <Stack direction="row" justifyContent="start">
          <FilePresent />
          <Divider />
          <Note />
          <Divider />
          <NotificationsActive />
          <Divider />
          <EventAvailable />
          <Divider />
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" px={2} justifyContent="space-between">
        <Stack direction="row" gap={1}>
          <Chip icon={<HealthAndSafetyOutlined />} label="Healthcare" />
          <Chip icon={<BrandIcon />} label="Landing package" />
        </Stack>
        <Button>
          Mark as complete <CheckBoxOutlineBlank />
        </Button>
      </Stack>
    </Paper>
  );
}
