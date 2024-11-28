'use client';
import { MoreVert } from '@mui/icons-material';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { recomendedTaskItemType, recomendedTaskType } from '../hubs.Types';
import RecomendedTasksListItem from '../../checklist/components/recomendedTask/RecomendedTasksListItem';
import { IRecomendedTask } from '../../checklist/mocks/recomendedTasks';
import Link from 'next/link';

const RecommendedTasks2 = ({
  recomendedTaskInfo,
}: {
  recomendedTaskInfo: any;
}) => {
  // console.log('recomendedTaskInfo:', recomendedTaskInfo);
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '100%' },
        maxWidth: { xs: '100%', md: '400px' },
        borderRadius: 2,
        height: 'min-content',
        p: 2,
        backgroundColor: '#F5F3F1',
      }}
    >
      <Stack
        sx={{
          mb: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" component={'h3'}>
          Recommended tasks
        </Typography>
        <Button variant="contained" sx={{ textTransform: 'none' }}>
          <Link
            href="/dashboard/guide/checklist"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            View checklist
          </Link>
        </Button>
      </Stack>
      <Typography sx={{ mb: 2 }} variant="caption" component={'span'}>
        Recommended checklist tasks to help you meet your needs.
      </Typography>
      <Stack sx={{ gap: 2 }}>
        <List sx={{ display: 'flex', flexDirection: 'column', py: 1, gap: 1 }}>
          {recomendedTaskInfo.items.map(
            (item: IRecomendedTask, index: number) => {
              return (
                <RecomendedTasksListItem key={index} recomendedTask={item} />
              );
            }
          )}
        </List>
      </Stack>
    </Stack>
  );
};

export default RecommendedTasks2;
