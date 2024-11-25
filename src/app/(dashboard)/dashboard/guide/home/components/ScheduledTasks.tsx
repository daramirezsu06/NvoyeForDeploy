'use client';
import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { Box, Stack, Typography, Button, Alert, Snackbar } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import TodoComponent from '../../checklist/components/ToDoComponent';
import { useTaskActions } from '../../utils/hooks/useTaskActions';

export default function ScheduledTasks() {
  //TODO connect to the backend and get the checklist tasks -> {{url}}/tasks/getAll?page=1&limit=10&statusId=3
  //TODO get property data
  const [userTaskList, setUserTaskList] =
    useState<IBackendTasks[]>(backendTasksListMock);

  const incompletedTasks = userTaskList.filter(
    (task) => task.taskStatus.name !== 'Completed'
  );

  const {
    handleMarkAsComplete,
    handleMarkAsIncomplete,
    handleMarkAsArchived,
    handleUndo,
    snackbar,
    closeSnackbar,
  } = useTaskActions(userTaskList, setUserTaskList);

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
        <Typography variant="h6" component={'h2'}>
          Scheduled tasks
        </Typography>
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
