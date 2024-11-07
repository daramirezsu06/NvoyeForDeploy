'use client';
import { ArchiveOutlined, ListAlt, TaskOutlined } from '@mui/icons-material';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import TitleAndButton from './components/TitleAndButton';
import TodoComponent from './components/ToDoComponent';
import theme from '@/src/app/theme';
import {
  ITask,
  tasksListMock,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import RecomendedTasksList from './components/RecomendedTasksList';
import { IRecomendedTask, recomendedTasksMocks } from './mocks/recomendedTasks';

import NoTasksComponent from './components/NoTasksComponent';

export default function Checklist() {
  //TODO connect to the backend and get the recomended tasks  -> {{url}}/tasks/getRecommendedTasks
  const [recomendedTasks, setRecomendedTasks] =
    useState<IRecomendedTask[]>(recomendedTasksMocks);

  //TODO connect to the backend and get the checklist tasks
  // const [userTaskList, setUserTaskList] = useState<ITask[]>(tasksListMock);
  const [userTaskList, setUserTaskList] = useState<ITask[]>([]);

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
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
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
            {userTaskList.length === 0 ? (
              // TODO a mostrar cuando no haya tareas

              <NoTasksComponent />
            ) : (
              userTaskList.map((task: ITask) => (
                <TodoComponent key={task.id} task={task} />
              ))
            )}
          </Box>
        </Stack>
        <RecomendedTasksList recomendedTasks={userTaskList} />
      </Box>
    </Container>
  );
}
