import { FiberManualRecord } from '@mui/icons-material';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

const BulletedList = () => {
  return (
    <Stack
      sx={{
        minWidth: '752px',
        backgroundColor: '#FFFF',
        borderRadius: 1,
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        <Typography variant="h6">medium</Typography>
      </Stack>
      <List sx={{ py: 1 }}>
        <ListItem>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FiberManualRecord />
            <ListItemText>List item</ListItemText>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FiberManualRecord />
            <ListItemText>List item</ListItemText>
          </Stack>
        </ListItem>
      </List>
    </Stack>
  );
};

export default BulletedList;
