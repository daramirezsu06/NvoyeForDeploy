import { List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import theme from '@/src/app/theme';
import {
  KeyboardArrowRight,
  KeyboardDoubleArrowRight,
  MoreVert,
} from '@mui/icons-material';

type Props = {};

export default function RecomendedTask({}: Props) {
  return (
    <Stack
      sx={{
        p: 2,
        backgroundColor: theme.custom.paperElevationTwo,
        borderRadius: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Recommended tasks</Typography>
        <KeyboardDoubleArrowRight />
      </Stack>
      <Typography>
        Recommended checklist tasks to help you meet your needs.
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          OV chipcard
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          EHIC registration
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          GP registration
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
          <MoreVert sx={{ ml: 'auto' }} />
        </ListItem>
      </List>
    </Stack>
  );
}
