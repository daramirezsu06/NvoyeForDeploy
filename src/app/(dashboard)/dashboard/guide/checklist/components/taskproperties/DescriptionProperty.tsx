import theme from '@/src/app/theme';
import { Stack, Typography, TextField } from '@mui/material';
import React from 'react';

type Props = {
  description: string;
  setDescription: (description: string) => void;
};

export default function DescriptionProperty({
  description,
  setDescription,
}: Props) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
      }}
    >
      <Typography variant="h6">Description</Typography>

      <TextField
        multiline
        value={description}
        placeholder="Write a description"
        sx={{
          backgroundColor: theme.custom.paperElevationFour,
          width: '100%',
        }}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Stack>
  );
}
