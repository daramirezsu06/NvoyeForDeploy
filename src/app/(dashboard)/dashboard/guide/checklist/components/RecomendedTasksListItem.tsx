import { MoreVert } from '@mui/icons-material';
import { ListItem } from '@mui/material';
import React from 'react';
import { IRecomendedTask } from '../mocks/recomendedTasks';
import { ITask } from '../mocks/tasksMocks';

type Props = {
  recomendedTask: ITask;
};

export default function RecomendedTasksListItem({ recomendedTask }: Props) {
  return (
    <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
      {recomendedTask.title}
      {/* //TODO este boton debe mostrar el modal que muesrte opciones */}
      <MoreVert sx={{ ml: 'auto' }} />
    </ListItem>
  );
}
