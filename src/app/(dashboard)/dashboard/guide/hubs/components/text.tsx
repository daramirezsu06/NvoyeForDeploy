import { FiberManualRecord } from '@mui/icons-material';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

const Text = ({ info }: { info: string }) => {
  return (
    <Stack
      sx={{
        // minWidth: '450px',
        backgroundColor: '#FFFF',
        borderRadius: '8px',
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        {/* //TODO this title should be dynamic */}
        <Typography variant="h6" component={'h3'}>
          medium
        </Typography>
      </Stack>
      <Stack
        sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography component={'p'}>{info}</Typography>
      </Stack>
    </Stack>
  );
};

export default Text;
