import React from 'react';
import { IBackendTasks } from '../mocks/tasksMocks';
import { ArchiveOutlined, TaskOutlined } from '@mui/icons-material';
import { Stack, Button } from '@mui/material';

type Props = {
  task: IBackendTasks;
  onMarkAsComplete: (taskId: number) => void;
  onMarkAsIncomplete: (taskId: number) => void;
};

export default function TaskDetailsButtons({
  task,
  onMarkAsComplete,
  onMarkAsIncomplete,
}: Props) {
  const handleArchiveTask = (task: IBackendTasks) => {
    //TODO make this task archived and send it to backend -> {{url}}/tasks/update/id
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
      {task.taskStatus.name === 'Completed' ? (
        <Button
          variant="contained"
          color="success"
          startIcon={<TaskOutlined />}
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={() => onMarkAsIncomplete(task.id)}
        >
          Mark as incompleted
        </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          startIcon={<TaskOutlined />}
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={() => onMarkAsComplete(task.id)}
        >
          Mark as completed
        </Button>
      )}
    </Stack>
  );
}
