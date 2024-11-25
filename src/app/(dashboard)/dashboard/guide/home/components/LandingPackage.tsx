'use client';
import BrandLogo from '@/src/icons/BrandLogo';
import { Box, Stack, Typography, List } from '@mui/material';
import React, { useState } from 'react';
import LandingListItem from './LandingListItem';
import {
  IRecomendedTask,
  recomendedTasksMocks,
} from '../../checklist/mocks/recomendedTasks';
import RecomendedTasksListItem from '../../checklist/components/recomendedTask/RecomendedTasksListItem';

type Props = {};

export default function LandingPackage({}: Props) {
  //TODO connect to the backend and get the recomended tasks  -> {{url}}/tasks/getRecommendedTasks
  const [recomendedTasks, setRecomendedTasks] =
    useState<IRecomendedTask[]>(recomendedTasksMocks);

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '16px',
        flexDirection: ' column',
        alignItems: 'flex-start',
        gap: ' 8px',
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: '#F8F6F5',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '8px',
          alignSelf: 'stretch',
        }}
      >
        <BrandLogo />
        <Typography variant="h6" color="primary" component={'h2'}>
          Nvoye landing package
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          alignSelf: 'stretch',
        }}
      >
        <List
          sx={{
            display: 'flex',
            padding: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
            alignSelf: ' stretch',
          }}
        >
          {recomendedTasks.map((task) => (
            <RecomendedTasksListItem key={task.id} recomendedTask={task} />
          ))}
          {/* <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem /> */}
        </List>
      </Box>
    </Box>
  );
}
