import {
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import theme from '@/src/app/theme';
import {
  KeyboardArrowRight,
  KeyboardDoubleArrowRight,
  MoreVert,
} from '@mui/icons-material';
import { IRecomendedTask } from '../mocks/recomendedTasks';
import { ITask } from '../mocks/tasksMocks';
import RecomendedTasksListItem from './RecomendedTasksListItem';

export default function RecomendedTasksList({
  recomendedTasks,
}: {
  recomendedTasks: ITask[];
}) {
  return (
    <Stack
      sx={{
        p: 2,
        backgroundColor: theme.custom.paperElevationTwo,
        borderRadius: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Recommended tasks</Typography>

        {/* //TODO give function to this button -> should collapse the list */}
        <IconButton>
          <Icon>
            <KeyboardDoubleArrowRight />
          </Icon>
        </IconButton>
      </Stack>

      <Typography>
        Recommended checklist tasks to help you meet your needs.
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {recomendedTasks.map((task: ITask) => (
          <RecomendedTasksListItem key={task.id} recomendedTask={task} />
        ))}
      </List>
    </Stack>
  );
}
