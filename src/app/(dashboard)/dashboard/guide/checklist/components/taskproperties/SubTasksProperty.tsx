import {
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
  Button,
  Icon,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import { ISubTask } from '../../mocks/tasksMocks';
import { Add, AddTaskOutlined, Delete } from '@mui/icons-material';

type Props = {
  subTasks: ISubTask[];
  handleSubTaskStatusChange: (index: number) => void;
  handleAddSubTask: (title: string) => void;
  handleDeleteSubTask: (index: number) => void;
};

export default function SubTasksProperty({
  subTasks,
  handleSubTaskStatusChange,
  handleAddSubTask,
  handleDeleteSubTask,
}: Props) {
  const [newSubTask, setNewSubTask] = useState<string>(''); // Estado local para el nuevo título de subtask

  const handleSubmit = () => {
    if (newSubTask.trim()) {
      handleAddSubTask(newSubTask);
      setNewSubTask('');
    }
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: 2,
      }}
    >
      <Typography variant="subtitle1">Subtask</Typography>
      <Typography variant="body2">
        These could be actions steps to get this task completed.
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          gap: 2,
        }}
      >
        {subTasks.map((subTask, index) => (
          <Stack
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: { xs: '100%', md: '500px' },
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={subTask.status === 'completed'}
                  onChange={() => handleSubTaskStatusChange(index)}
                />
              }
              label={subTask.title}
              labelPlacement="end"
            />
            <IconButton
              onClick={() => handleDeleteSubTask(index)}
              color="error"
            >
              <Delete />
            </IconButton>
          </Stack>
        ))}
        <TextField
          placeholder="Add a new subtask"
          value={newSubTask}
          onChange={(e) => setNewSubTask(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  sx={{
                    padding: 0,
                    minWidth: 'auto',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    boxShadow: 'none',
                    outline: 'none',
                    '&:focus': {
                      outline: 'none',
                    },
                    '&:active': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <AddTaskOutlined />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: '100%', md: '500px' } }}
        />
      </Stack>
    </Stack>
  );
}
