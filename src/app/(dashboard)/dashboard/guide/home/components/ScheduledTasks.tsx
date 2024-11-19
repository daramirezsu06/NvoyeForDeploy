'use client';
import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { Box, Stack, Typography, Button, Alert, Snackbar } from '@mui/material';
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

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    taskId: null as number | null,
    previousStatus: '',
    severity: 'success' as 'success' | 'warning' | 'info' | 'error',
  });

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
    const taskToComplete = userTaskList.find((task) => task.id === taskId);
    if (taskToComplete) {
      setSnackbar({
        open: true,
        message: `Task "${taskToComplete.customTitle}" marked as complete!`,
        taskId: taskId,
        previousStatus: taskToComplete.taskStatus.name,
        severity: 'success',
      });
    }
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
    const taskToIncomplete = userTaskList.find((task) => task.id === taskId);
    if (taskToIncomplete) {
      setSnackbar({
        open: true,
        message: `Task "${taskToIncomplete.customTitle}" has been marked as incomplete!`,
        taskId: taskId,
        previousStatus: taskToIncomplete.taskStatus.name,
        severity: 'success',
      });
    }
  };
  const handleMarkAsArchived = (taskId: number) => {
    setUserTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              taskStatus: {
                name: 'Archived',
                description: 'Task is currently in archived',
              },
            }
          : task
      )
    );
    const taskToArcvhive = userTaskList.find((task) => task.id === taskId);
    if (taskToArcvhive) {
      setSnackbar({
        open: true,
        message: `Task "${taskToArcvhive.customTitle}" has been marked as archived!`,
        taskId: taskId,
        previousStatus: taskToArcvhive.taskStatus.name,
        severity: 'warning',
      });
    }
  };
  const closeSnackbar = () => {
    setSnackbar({
      open: false,
      message: '',
      taskId: null,
      previousStatus: '',
      severity: 'success',
    });
  };

  const handleUndo = () => {
    if (snackbar.taskId !== null && snackbar.previousStatus) {
      setUserTaskList((prevTasks) =>
        prevTasks.map((task) =>
          task.id === snackbar.taskId
            ? {
                ...task,
                taskStatus: {
                  name: snackbar.previousStatus,
                  description: `Task has been restored to ${snackbar.previousStatus}`,
                },
              }
            : task
        )
      );
      closeSnackbar();
    }
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
            onMarkAsArchived={handleMarkAsArchived}
          />
        ))}
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
    </Box>
  );
}
