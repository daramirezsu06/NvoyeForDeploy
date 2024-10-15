import {
  Box,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import React from 'react';
import MembershipTableBody from './MembershipTableBody';

type Props = {};

export default function MembershipTable({}: Props) {
  return (
    <Box>
      {/* Desktop Table */}
      <TableContainer
        sx={{
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <Table>
          {/* table head */}
          <TableHead>
            <TableRow>
              <TableCell>
                Subscriptions
                {/* <TableSortLabel
                  active={true}
                  direction="asc"
                  onClick={() => {}}
                ></TableSortLabel> */}
              </TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Next charge</TableCell>
            </TableRow>
          </TableHead>

          {/* table body */}
          <MembershipTableBody />
        </Table>
      </TableContainer>

      {/* mobile table */}
      <TableContainer
        sx={{
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Table>
          {/* table head */}

          {/* table body */}
          <MembershipTableBody />
        </Table>
      </TableContainer>
    </Box>
  );
}
