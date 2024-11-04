import { FiberManualRecord } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const TableHubs = () => {
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ p: 2 }}>Head</TableCell>
            <TableCell sx={{ p: 2 }}>Head</TableCell>
            <TableCell sx={{ p: 2 }}>Head</TableCell>
            <TableCell sx={{ p: 2 }}>Head</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ p: 2 }}>
              <Typography variant="body2">List item</Typography>
            </TableCell>
            <TableCell sx={{ p: 2 }}>
              <Typography variant="body2">List item</Typography>
            </TableCell>
            <TableCell sx={{ p: 2 }}>
              <Typography variant="body2">List item</Typography>
            </TableCell>
            <TableCell sx={{ p: 2 }}>
              <Typography variant="body2">List item</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};

export default TableHubs;
