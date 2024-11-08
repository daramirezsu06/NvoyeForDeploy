import { MoreVert } from '@mui/icons-material';
import { Container, IconButton, ListItem } from '@mui/material';
import React from 'react';
import { IRecomendedTask } from '../mocks/recomendedTasks';
import { ITask } from '../mocks/tasksMocks';

type Props = {
  recomendedTask: ITask;
};

export default function RecomendedTasksListItem({ recomendedTask }: Props) {
  return (
    <ListItem
      sx={{
        backgroundColor: '#FFFF',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: '#F4F0ED',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)',
        },
        padding: '0px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'stretch',
          paddingY: 1,
          justifyContent: 'space-between',
          paddingLeft: { xs: '16px', sm: '16px' },
          paddingRight: { xs: '16px', sm: '16px' },
        }}
      >
        {recomendedTask.title}
        <IconButton>
          {/* //TODO este boton debe mostrar el modal que muesrte opciones */}
          <MoreVert sx={{ ml: 'auto' }} />
        </IconButton>
      </Container>
    </ListItem>
  );
}
