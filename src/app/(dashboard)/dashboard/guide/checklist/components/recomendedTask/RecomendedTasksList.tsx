'use client';
import {
  Badge,
  Box,
  Button,
  Collapse,
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

interface RecomendedTasksListProps {
  recomendedTasks: IRecomendedTask[];
  sx?: object;
}

export default function RecomendedTasksList({
  recomendedTasks,
  sx = {},
}: RecomendedTasksListProps) {
  const [isShowList, setIsShowList] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Stack
      sx={{
        p: 2,
        backgroundColor: theme.custom.paperElevationTwo,
        borderRadius: 3,
        height: 'min-content',
        border: { xs: '0.5px solid #E5E5E5', md: 'none' },
        width: isCollapsed ? '60px' : { xs: 'auto', md: '380px' },
        transition: 'width 0.5s ease',
        ...sx,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {!isCollapsed && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" component={'h3'}>
              Recommended tasks
            </Typography>

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
              {recomendedTasks.length}
            </Badge>
          </Box>
        )}

        <IconButton
          sx={{
            display: { xs: 'none', md: 'flex' },
            transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
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

      {!isCollapsed && (
        <Typography
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
          component={'span'}
        >
          Recommended checklist tasks to help you meet your needs.
        </Typography>
      )}

      {!isCollapsed &&
        (recomendedTasks.length === 0 ? (
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
                <Typography variant="h6" component={'span'}>
                  Nothing here yet!
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Collapse in={isShowList} timeout="auto">
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {recomendedTasks.map((task) => (
                  <RecomendedTasksListItem
                    key={task.id}
                    recomendedTask={task}
                  />
                ))}
              </List>
            </Collapse>

            <List
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {recomendedTasks.map((task) => (
                <RecomendedTasksListItem key={task.id} recomendedTask={task} />
              ))}
            </List>
          </Box>
        ))}
    </Stack>
  );
}
