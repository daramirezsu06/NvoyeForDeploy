import { EditNoteOutlined } from '@mui/icons-material';
import { Stack, Box, Icon, Typography, TextField } from '@mui/material';
import React from 'react';
import theme from '@/src/app/theme';

type Props = {
  notes: string;
  setNotes: (value: string) => void;
};

export default function NotesProperty({ notes, setNotes }: Props) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 1,
        // height: '55px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          color: 'text.secondary',
          width: '100px',
          minWidth: '100px',
        }}
      >
        <Icon sx={{ width: '24px', height: '24px' }}>
          <EditNoteOutlined />
        </Icon>
        <Typography variant="body2">Note</Typography>
      </Box>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 1,
          flex: 1,
          width: '100%',
        }}
      >
        <TextField
          variant="standard"
          multiline
          value={notes}
          placeholder="Enter a personal note"
          sx={{
            backgroundColor: theme.custom.paperElevationFour,
            width: '100%',
          }}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}
