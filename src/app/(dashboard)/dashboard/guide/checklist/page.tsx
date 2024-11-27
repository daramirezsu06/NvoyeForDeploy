'use client';
import { ArchiveOutlined, ListAlt, TaskOutlined } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import TitleAndButton from './components/TitleAndButton';
import TodoComponent from './components/ToDoComponent';
import theme from '@/src/app/theme';
import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import RecomendedTasksList from './components/recomendedTask/RecomendedTasksList';
import { IRecomendedTask, recomendedTasksMocks } from './mocks/recomendedTasks';

import NoTasksComponent from './components/NoTasksComponent';
import NotesProperty from './components/taskproperties/NotesProperty';
import { useTaskActions } from '../utils/hooks/useTaskActions';

export default function Checklist() {
  //TODO connect to the backend and get the recomended tasks  -> {{url}}/tasks/getRecommendedTasks
  const [recomendedTasks, setRecomendedTasks] =
    useState<IRecomendedTask[]>(recomendedTasksMocks);

  //TODO connect to the backend and get the checklist tasks -> {{url}}/tasks/getAll?page=1&limit=10&statusId=3
  //TODO get property data

  const [userTaskList, setUserTaskList] =
    useState<IBackendTasks[]>(backendTasksListMock);
  // const [userTaskList, setUserTaskList] = useState<IBackendTasks[]>([]); //for no tasks

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredTasks = userTaskList.filter((task) => {
    if (activeTab === 0)
      return (
        task.taskStatus.name === 'In Progress' ||
        task.taskStatus.name === 'Pending'
      );
    if (activeTab === 1) return task.taskStatus.name === 'Completed';
    if (activeTab === 2) return task.taskStatus.name === 'Archived';
    return true;
  });

  const handleAddTask = (newTask: IBackendTasks) => {
    setUserTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const {
    handleMarkAsComplete,
    handleMarkAsIncomplete,
    handleMarkAsArchived,
    handleUndo,
    snackbar,
    closeSnackbar,
  } = useTaskActions(userTaskList, setUserTaskList);

  console.log(userTaskList);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '##F8F6F5',
        paddingX: { xs: '8px', sm: 3 },
        paddingY: { xs: 0, sm: 2 },
        marginBottom: 8,
        gap: 4,
      }}
    >
      <TitleAndButton onAddTask={handleAddTask} />
      <Box
        sx={{
          gap: 4,
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Stack sx={{ width: '100%', flexGrow: 1 }} gap={1}>
          <Box
            sx={{
              backgroundColor: theme.custom.paperElevationOne,
              borderRadius: 2,
              height: '40px',
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  color: 'blue',
                },
              }}
            >
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
            {userTaskList.length === 0 ? (
              <NoTasksComponent onAddTask={handleAddTask} />
            ) : filteredTasks.length === 0 ? (
              <Typography>No tasks matching the filter</Typography>
            ) : (
              filteredTasks.map((task: IBackendTasks) => (
                <TodoComponent
                  key={task.id}
                  task={task}
                  onMarkAsComplete={handleMarkAsComplete}
                  onMarkAsIncomplete={handleMarkAsIncomplete}
                  onMarkAsArchived={handleMarkAsArchived}
                />
              ))
            )}
          </Box>
        </Stack>
        <RecomendedTasksList
          recomendedTasks={recomendedTasks}
          sx={{
            minWidth: { xs: '60px', md: 'auto' },
          }}
        />
      </Box>
      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={closeSnackbar}
          action={
            <Button
              size="small"
              color="inherit"
              variant="text"
              sx={{ textTransform: 'none' }}
              onClick={handleUndo}
            >
              Undo
            </Button>
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
