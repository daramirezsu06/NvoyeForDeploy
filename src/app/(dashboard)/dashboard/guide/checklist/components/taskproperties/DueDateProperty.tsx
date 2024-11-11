import React from 'react';
import { Box, Stack, Typography, Icon, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  AddAlertOutlined,
  Clear,
  EventAvailableOutlined,
} from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';
import theme from '@/src/app/theme';

interface DueDatePropertyProps {
  dueDate: Dayjs | null;
  setDueDate: (date: Dayjs | null) => void;
}

export default function DueDateProperty({
  dueDate,
  setDueDate,
}: DueDatePropertyProps) {
  const handleDueDateChange = (date: Dayjs | null) => {
    //TODO this should send the update to de backend
    setDueDate(date);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 1,
        height: '55px',
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
          <EventAvailableOutlined />
        </Icon>
        <Typography variant="body2">Due date</Typography>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {dueDate ? (
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="body1">
              {dueDate.format('DD/MM/YYYY')}
            </Typography>
            <IconButton onClick={() => handleDueDateChange(null)}>
              <Icon>
                <Clear />
              </Icon>
            </IconButton>
          </Stack>
        ) : (
          <DatePicker
            label="Due date"
            format="DD/MM/YYYY "
            value={dueDate}
            onChange={(newValue) => handleDueDateChange(newValue)}
            // sx={{ width: '100%' }}
          />
        )}
      </LocalizationProvider>
    </Stack>
  );
}
