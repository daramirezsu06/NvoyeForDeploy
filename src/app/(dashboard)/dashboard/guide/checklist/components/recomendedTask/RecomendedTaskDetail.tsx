import React from 'react';
import { IRecomendedTask } from '../../mocks/recomendedTasks';
import theme from '@/src/app/theme';
import {
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { title } from 'process';
import { AddTaskOutlined, Close, TaskOutlined } from '@mui/icons-material';

type Props = {
  recomendedTask: IRecomendedTask;
  handleCloseRecomendedTaskDetail: () => void;
  handleAddRecomendedTaskToChecklist: () => void;
};

export default function RecomendedTaskDetail({
  recomendedTask,
  handleCloseRecomendedTaskDetail,
  handleAddRecomendedTaskToChecklist,
}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: { xs: '100%', md: '800px' },
        maxWidth: '800px',
        borderRadius: 2,
        backgroundColor: theme.custom.paperElevationOne,
        height: 'auto',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          paddingX: { xs: 2, sm: 4 },
          paddingY: 1,
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          {recomendedTask.taskType.name}
        </Typography>
        <IconButton onClick={handleCloseRecomendedTaskDetail}>
          <Icon>
            <Close />
          </Icon>
        </IconButton>
      </Stack>
      {/* // task content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          flex: 1,
          paddingTop: { xs: 2, sm: 4 },
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            paddingX: { xs: 2, md: 6 },
            paddingBottom: 3,
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ flex: 1 }}>
            {recomendedTask.taskType.name}
          </Typography>
          {recomendedTask.categories.length > 0 && (
            <Chip
              variant="outlined"
              label={recomendedTask.categories[0].category.name}
            ></Chip>
          )}
        </Stack>
        {/* //others */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            paddingX: { xs: 2, md: 6 },
            paddingY: { xs: 2, md: 2 },
            backgroundColor: theme.custom.paperElevationTwo,
            gap: 2,
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Typography variant="h6">Description</Typography>
            <Typography variant="body1">
              {recomendedTask.taskType.description}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* //buttons */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'center',
          gap: 4,
          paddingY: 3,
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Button
          variant="outlined"
          color="error"
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={handleCloseRecomendedTaskDetail}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={<AddTaskOutlined />}
          sx={{ textTransform: 'none', borderRadius: 2 }}
          onClick={handleAddRecomendedTaskToChecklist}
        >
          Add to checklist
        </Button>
      </Stack>
    </Box>
  );
}
