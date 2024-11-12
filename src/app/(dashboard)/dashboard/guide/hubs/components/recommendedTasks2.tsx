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

const RecommendedTasks2 = ({
  recomendedTaskInfo,
}: {
  recomendedTaskInfo: recomendedTaskType;
}) => {
  return (
    <Stack
      sx={{
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
        <Typography variant="h6">{recomendedTaskInfo.title}</Typography>
        <Button variant="contained">View checklist</Button>
      </Stack>
      <Typography sx={{ mb: 2 }} variant="caption">
        Recommended checklist tasks to help you meet your needs.
      </Typography>
      <Stack sx={{ gap: 2 }}>
        <List sx={{ display: 'flex', flexDirection: 'column', py: 1, gap: 1 }}>
          {recomendedTaskInfo.items.map((item, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: '#FFFF',
                  borderRadius: 1,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <ListItemText
                  sx={{ flexGrow: 1, py: 0.5 }}
                  primary={item.title}
                />
                <IconButton sx={{ p: 1 }}>
                  <MoreVert />
                </IconButton>
              </ListItem>
            );
          })}
          {/* <ListItem
            sx={{
              backgroundColor: '#FFFF',
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ListItemText sx={{ flexGrow: 1, py: 0.5 }} primary="OV chipcard" />
            <IconButton sx={{ p: 1 }}>
              <MoreVert />
            </IconButton>
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: '#FFFF',
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ListItemText sx={{ flexGrow: 1, py: 0.5 }} primary="OV chipcard" />
            <IconButton sx={{ p: 1 }}>
              <MoreVert />
            </IconButton>
          </ListItem> */}
        </List>
      </Stack>
    </Stack>
  );
};

export default RecommendedTasks2;
