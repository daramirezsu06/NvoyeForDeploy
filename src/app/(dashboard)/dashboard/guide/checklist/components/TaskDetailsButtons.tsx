import React from 'react';
import { IBackendTasks } from '../mocks/tasksMocks';
import { ArchiveOutlined, TaskOutlined } from '@mui/icons-material';
import { Stack, Button } from '@mui/material';

type Props = {
  task: IBackendTasks;
};

export default function TaskDetailsButtons({ task }: Props) {
  const handleArchiveTask = (task: IBackendTasks) => {
    //TODO archivar esta task y mandr al backend,
    console.log(task);
  };

  const handleCompleteTask = (task: IBackendTasks) => {
    //TODO completar esta task y mandar al backend
    console.log(task);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        gap: 4,
        paddingY: 3,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Button
        variant="outlined"
        color="error"
        startIcon={<ArchiveOutlined />}
        sx={{ textTransform: 'none', borderRadius: 2 }}
        onClick={() => handleArchiveTask(task)}
      >
        Archive task
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<TaskOutlined />}
        sx={{ textTransform: 'none', borderRadius: 2 }}
        onClick={() => handleCompleteTask(task)}
      >
        Mark as completed
      </Button>
    </Stack>
  );
}
