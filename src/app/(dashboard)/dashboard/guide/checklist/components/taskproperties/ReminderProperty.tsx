import React from 'react';
import { Box, Stack, Typography, Icon, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AddAlertOutlined, Clear } from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';

interface ReminderPickerProps {
  reminderDate: Dayjs | null;
  setReminderDate: (date: Dayjs | null) => void;
}

export default function ReminderProperty({
  reminderDate,
  setReminderDate,
}: ReminderPickerProps) {
  const handleReminderDateChange = (date: Dayjs | null) => {
    //TODO this should send the update to de backend
    setReminderDate(date);
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
          color: 'text.secondary',
          width: '100px',
          minWidth: '100px',
        }}
      >
        <Icon sx={{ width: '24px', height: '24px' }}>
          <AddAlertOutlined />
        </Icon>
        <Typography variant="body2">Reminder</Typography>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {reminderDate ? (
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
              {reminderDate.format('DD/MM/YYYY HH:mm')}
            </Typography>
            <IconButton onClick={() => handleReminderDateChange(null)}>
              <Icon>
                <Clear />
              </Icon>
            </IconButton>
          </Stack>
        ) : (
          <DateTimePicker
            label="Add reminder"
            format="DD/MM/YYYY HH:mm"
            value={reminderDate}
            // onChange={(newValue) => setReminderDate(newValue)}
            onAccept={(newValue) => handleReminderDateChange(newValue)}
            openTo="day" // Abre el selector de días por defecto
            closeOnSelect={false}
          />
        )}
      </LocalizationProvider>
    </Stack>
  );
}
