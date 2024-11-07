import { AddTaskOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React from 'react';

type Props = {};

export default function NewTaskButton({}: Props) {
  return (
    <Button
      variant="contained"
      sx={{ py: 1, px: 3, gap: 1, textTransform: 'none' }}
    >
      <AddTaskOutlined sx={{ mx: 0, my: 0 }} />
      <Typography sx={{ mx: 0, my: 0 }}>New task</Typography>
    </Button>
  );
}
