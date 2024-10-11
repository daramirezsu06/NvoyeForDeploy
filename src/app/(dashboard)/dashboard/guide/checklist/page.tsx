'use client';
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
import TitleAndButton from './components/ titleAndButton';
import BrandIcon from '@/src/icons/BrandLogo';
import TodoComponent from './components/ToDoItem';
import RecomendedTask from './components/RecomendedTasks';
import theme from '@/src/app/theme';

type Props = {};

export default function Checklist({}: Props) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column', // Columna en pantallas móviles, fila en pantallas grandes
        minHeight: '100vh',
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FFFF',
        px: 4,
        py: 3,
        gap: 4,
      }}
    >
      <TitleAndButton />
      <Box sx={{ gap: 4, display: 'flex' }}>
        <Stack sx={{ width: '100%' }} gap={1}>
          <Box
            sx={{
              backgroundColor: theme.custom.paperElevationOne,
              borderRadius: 2,
            }}
          >
            <Tabs>
              <Tab iconPosition="start" icon={<ListAlt />} label="To do" />
              <Tab
                iconPosition="start"
                icon={<TaskOutlined />}
                label="Completed"
              />
              <Tab
                iconPosition="start"
                icon={<ArchiveOutlined />}
                label="Archived"
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              backgroundColor: theme.custom.paperElevationTwo,
              borderRadius: 3,
              gap: 2,
            }}
          >
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
          </Box>
        </Stack>
        <RecomendedTask />
      </Box>
    </Container>
  );
}
