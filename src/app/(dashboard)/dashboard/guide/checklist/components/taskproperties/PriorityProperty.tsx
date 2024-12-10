import theme from '@/src/app/theme';
import { LowPriorityOutlined } from '@mui/icons-material';
import {
  Stack,
  Box,
  Icon,
  Typography,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import { setPriority } from 'os';
import React from 'react';

type Props = {
  priority: string;
  setPriority: (value: string) => void;
};

export default function PriorityProperty({ priority, setPriority }: Props) {
  const chipColor =
    priority === 'Low'
      ? 'success'
      : priority === 'Medium'
        ? 'warning'
        : priority === 'High'
          ? 'error'
          : 'primary';

  const handlePriorityChange = (value: string) => {
    //TODO send this update to the backend
    setPriority(value);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 1,
        height: '35px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          color: theme.palette.text.secondary,
          width: '100px',
          minWidth: '100px',
        }}
      >
        <Icon sx={{ width: '24px', height: '24px' }}>
          <LowPriorityOutlined />
        </Icon>
        <Typography variant="body2">Priority</Typography>
      </Box>
      {priority === '' ? (
        <Select
          value=""
          displayEmpty
          onChange={(event) =>
            handlePriorityChange(event.target.value as string)
          }
          sx={{
            '& .MuiInputBase-root': {
              minWidth: 120,
              height: '36px',
              border: 'none',
              backgroundColor: 'transparent',
              padding: '26px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          <MenuItem value="" disabled>
            Add priority
          </MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      ) : (
        <Chip
          size="medium"
          variant="outlined"
          label={priority}
          color={chipColor}
          onDelete={() => handlePriorityChange('')}
        />
      )}
    </Stack>
  );
}
