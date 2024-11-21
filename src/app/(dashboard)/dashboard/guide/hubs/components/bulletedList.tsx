import { FiberManualRecord } from '@mui/icons-material';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { BulletedListHubsType } from '../hubs.Types';

const BulletedList = ({ bulletInfo }: { bulletInfo: BulletedListHubsType }) => {
  return (
    <Stack
      sx={{
        // minWidth: '752px',
        backgroundColor: '#FFFF',
        borderRadius: 1,
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        <Typography variant="h6">{bulletInfo.title}</Typography>
      </Stack>
      <List sx={{ py: 1 }}>
        {bulletInfo.items &&
          bulletInfo.items.map((item, index) => {
            return (
              <ListItem key={index}>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                  }}
                >
                  <FiberManualRecord />
                  <ListItemText>{item}</ListItemText>
                </Stack>
              </ListItem>
            );
          })}
      </List>
    </Stack>
  );
};

export default BulletedList;
