import { AddTaskOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import theme from '@/src/app/theme';
import React from 'react';
import NewTaskButton from './NewTaskButton';

type Props = {};

export default function TitleAndButton({}: Props) {
  return (
    <Box
      sx={{
        padding: 2,
        gap: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.custom.paperElevationOne,
        borderRadius: 2,
      }}
    >
      <Stack>
        <Typography variant="h4">Checklist</Typography>
        <Typography>
          A guided list of tasks to help you relocate and integrate.
        </Typography>
      </Stack>
      {/* <Button variant="contained" sx={{ py: 1, px: 3, gap: 1 , textTransform:"none"}}>
        <AddTaskOutlined sx={{ mx: 0, my: 0 }} />
        <Typography sx={{ mx: 0, my: 0 }}>New task</Typography>
      </Button> */}
      <NewTaskButton />
    </Box>
  );
}
