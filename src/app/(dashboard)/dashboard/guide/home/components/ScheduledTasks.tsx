'use client';
import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { Box, Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import TodoComponent from '../../checklist/components/ToDoComponent';

type Props = {};

export default function ScheduledTasks({}: Props) {
  //TODO connect to the backend and get the checklist tasks -> {{url}}/tasks/getAll?page=1&limit=10&statusId=3
  //TODO get property data
  const [userTaskList, setUserTaskList] =
    useState<IBackendTasks[]>(backendTasksListMock);

  const incompletedTasks = userTaskList.filter(
    (task) => task.taskStatus.name !== 'Completed'
  );

  const handleMarkAsComplete = (taskId: number) => {
    setUserTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: {
                name: 'Completed',
                description: 'Task has been completed successfully',
              },
            }
          : task
      )
    );
  };

  const handleMarkAsIncomplete = (taskId: number) => {
    setUserTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: {
                name: 'In Progress',
                description: 'Task is currently in progress',
              },
            }
          : task
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        alignSelf: ' stretch',
      }}
    >
      {/* Title and chip */}
      <Stack
        sx={{
          display: ' flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: ' center',
          alignSelf: 'stretch',
        }}
      >
        <Typography variant="h6">Scheduled tasks</Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="medium"
          sx={{ textTransform: 'none', borderRadius: 2 }}
        >
          <Link
            href="/dashboard/guide/checklist"
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            View Checklist
          </Link>
        </Button>
      </Stack>

      {/* Scheduled Task List */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0,
          width: '100%',
          borderRadius: 3,
          gap: 2,
        }}
      >
        {incompletedTasks.map((task) => (
          <TodoComponent
            key={task.id}
            task={task}
            onMarkAsComplete={handleMarkAsComplete}
            onMarkAsIncomplete={handleMarkAsIncomplete}
          />
        ))}
      </Box>
    </Box>
  );
}
