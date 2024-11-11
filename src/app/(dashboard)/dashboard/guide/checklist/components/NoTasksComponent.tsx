import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import NewTaskButton from './NewTaskButton';
import Image from 'next/image';
import icon from '@/src/icons/AddTaskIcon.png';

type Props = {};

export default function NoTasksComponent({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
        alignSelf: 'stretch',
        padding: 2,
        minHeight: '400px',
        borderRadius: 3,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Stack mb={3}>
          <Image src={icon} alt="icon" width={48} height={48} />
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          mb={3}
        >
          <Typography variant="h6">Nothing here yet!</Typography>
          <Typography variant="subtitle2">
            Add something to your checklist
          </Typography>
        </Stack>
        <NewTaskButton />
      </Stack>
    </Box>
  );
}
