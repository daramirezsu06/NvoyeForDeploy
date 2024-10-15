'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Icon,
} from '@mui/material';
import React, { useState } from 'react';
import { subscriptions } from '../../mocks/subscriptions';
import MembershipTableRow from './MembershipTableRow';

type Props = {};

export default function MembershipTableBody({}: Props) {
  return (
    <TableBody>
      {subscriptions.map((subscription, index) => (
        <MembershipTableRow key={index} subscription={subscription} />
      ))}
    </TableBody>
  );
}
