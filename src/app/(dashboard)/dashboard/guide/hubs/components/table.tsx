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
import { TableHubsType } from '../hubs.Types';

const TableHubs = ({ tableInfo }: { tableInfo: TableHubsType }) => {
  return (
    <Stack
      sx={{
        // minWidth: '752px',
        backgroundColor: '#FFFF',
        borderRadius: '8px',
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        <Typography variant="h6" component={'h3'}>
          {tableInfo.title}
        </Typography>
      </Stack>
      <Table>
        <TableHead>
          <TableRow>
            {tableInfo.columns &&
              tableInfo.columns.map((column, index) => (
                <TableCell key={index} sx={{ p: 2 }}>
                  {column}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo.rows.map((row, index) => {
            return (
              <TableRow key={index}>
                {row.map((column, index) => (
                  <TableCell key={index} sx={{ p: 2 }}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default TableHubs;
