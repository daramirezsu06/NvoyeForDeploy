'use client';
import {
  Badge,
  Box,
  Button,
  Icon,
  IconButton,
  List,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import theme from '@/src/app/theme';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { IRecomendedTask } from '../../mocks/recomendedTasks';

import RecomendedTasksListItem from '../recomendedTask/RecomendedTasksListItem';
import Image from 'next/image';
import icon from '@/src/icons/AddTaskIcon.png';

export default function RecomendedTasksList({
  recomendedTasks,
}: {
  recomendedTasks: IRecomendedTask[];
}) {
  const [isShowList, setIsShowList] = useState(false);

  return (
    <Stack
      sx={{
        p: 2,
        backgroundColor: theme.custom.paperElevationTwo,
        borderRadius: 3,
        height: 'min-content',
        border: { xs: '0.5px solid #E5E5E5', md: 'none' },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Recommended tasks</Typography>

          <Badge
            sx={{
              display: { xs: 'flex', md: 'none' },
              backgroundColor: 'secondary.main',
              color: 'white',
              borderRadius: '100px',
              padding: '0px 8px',
            }}
            variant="standard"
          >
            {recomendedTasks.length}{' '}
          </Badge>
        </Box>

        {/* //TODO give function to this button -> should collapse the list  */}
        <IconButton
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
          // onClick={() => {}}
        >
          <Icon>
            <KeyboardDoubleArrowRight />
          </Icon>
        </IconButton>

        <Button
          sx={{
            display: { xs: 'flex', md: 'none' },
            textTransform: 'none',
            padding: 0,
            color: 'black',
          }}
          size="medium"
          onClick={() => setIsShowList(!isShowList)}
        >
          View
        </Button>
      </Stack>

      <Typography
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        Recommended checklist tasks to help you meet your needs.
      </Typography>

      {recomendedTasks.length === 0 ? (
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
            </Stack>
          </Stack>
        </Box>
      ) : (
        <List
          sx={{
            display: {
              xs: isShowList ? 'flex' : 'none', // Muestra u oculta la lista en pantallas xs
              md: 'flex', // Siempre muestra la lista en pantallas sm o más grandes
            },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {recomendedTasks.map((task: IRecomendedTask) => (
            <RecomendedTasksListItem key={task.id} recomendedTask={task} />
          ))}
        </List>
      )}
    </Stack>
  );
}
