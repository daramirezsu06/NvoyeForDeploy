import {
  backendTasksListMock,
  IBackendTasks,
} from '@/src/app/(dashboard)/dashboard/guide/checklist/mocks/tasksMocks';
import { Box, Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import TodoComponent from '../../checklist/components/ToDoComponent';

type Props = {};

export default function ScheduledTasks({}: Props) {
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
        {backendTasksListMock.map((task) => (
          <TodoComponent key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  );
}
