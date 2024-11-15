import { FiberManualRecord } from '@mui/icons-material';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

const TextButton = ({ info }: { info: string }) => {
  return (
    <Stack
      sx={{
        // minWidth: '450px',
        backgroundColor: '#FFFF',
        borderRadius: 1,
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        <Typography variant="h6">medium</Typography>
      </Stack>
      <Stack
        sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography>{info}</Typography>
        <Button sx={{ alignSelf: 'end' }} variant="text" color="primary">
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default TextButton;
