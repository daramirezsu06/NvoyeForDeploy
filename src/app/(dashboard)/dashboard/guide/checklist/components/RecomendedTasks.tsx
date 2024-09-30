import { List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import theme from '@/src/app/theme';

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
      <Stack></Stack>
      <Typography>
        Recommended checklist tasks to help you meet your needs.
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          OV chipcard
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          EHIC registration
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          GP registration
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
        </ListItem>
        <ListItem sx={{ backgroundColor: '#FFFF', borderRadius: 1 }}>
          List item
        </ListItem>
      </List>
    </Stack>
  );
}
