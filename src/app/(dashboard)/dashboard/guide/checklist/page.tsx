'use client';
import { ArchiveOutlined, ListAlt, TaskOutlined } from '@mui/icons-material';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import TitleAndButton from './components/TitleAndButton';
import TodoComponent from './components/ToDoComponent';
import theme from '@/src/app/theme';
import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import RecomendedTasksList from './components/RecomendedTasksList';
import { IRecomendedTask, recomendedTasksMocks } from './mocks/recomendedTasks';

import NoTasksComponent from './components/NoTasksComponent';

export default function Checklist() {
  //TODO connect to the backend and get the recomended tasks  -> {{url}}/tasks/getRecommendedTasks
  const [recomendedTasks, setRecomendedTasks] =
    useState<IRecomendedTask[]>(recomendedTasksMocks);

  //TODO connect to the backend and get the checklist tasks -> {{url}}/tasks/getAll?page=1&limit=10&statusId=3
  //TODO get property data

  const [userTaskList, setUserTaskList] =
    useState<IBackendTasks[]>(backendTasksListMock);
  // const [userTaskList, setUserTaskList] = useState<ITask[]>([]); //for no tasks

  const [activeTab, setActiveTab] = useState(0);
  // Función para manejar el cambio de pestaña
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Filtrar las tareas según la pestaña activa
  const filteredTasks = userTaskList.filter((task) => {
    if (activeTab === 0) return task.taskStatus.name !== 'Completed';
    if (activeTab === 1) return task.taskStatus.name === 'Completed';
    if (activeTab === 2) return task.taskStatus.name === 'Archived';
    return true;
  });

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
      <TitleAndButton />
      <Box
        sx={{
          gap: 4,
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Stack sx={{ width: '100%' }} gap={1}>
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
                  textTransform: 'none', // Remueve el uppercase
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  color: 'blue', // Cambia el color de la pestaña activa
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
              <NoTasksComponent />
            ) : filteredTasks.length === 0 ? (
              <Typography>No tasks matching the filter</Typography>
            ) : (
              filteredTasks.map((task: IBackendTasks) => (
                <TodoComponent key={task.id} task={task} />
              ))
            )}
          </Box>
        </Stack>
        <RecomendedTasksList recomendedTasks={recomendedTasks} />
      </Box>
    </Container>
  );
}
