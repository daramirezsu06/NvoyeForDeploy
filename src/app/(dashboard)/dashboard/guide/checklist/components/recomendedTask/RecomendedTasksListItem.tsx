import { MoreVert } from '@mui/icons-material';
import { Container, IconButton, ListItem } from '@mui/material';
import React from 'react';
import { IRecomendedTask } from '../../mocks/recomendedTasks';
import { IBackendTasks } from '../../mocks/tasksMocks';
import RecomendedTaskItemMenu from './RecomendedTaskItemMenu';

type Props = {
  recomendedTask: IRecomendedTask;
};

export default function RecomendedTasksListItem({ recomendedTask }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(recomendedTask);

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
        {recomendedTask.taskType?.name}
        <IconButton onClick={handleClick}>
          <MoreVert sx={{ ml: 'auto' }} />
        </IconButton>
        <RecomendedTaskItemMenu
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          recomendedTask={recomendedTask}
        />
      </Container>
    </ListItem>
  );
}
