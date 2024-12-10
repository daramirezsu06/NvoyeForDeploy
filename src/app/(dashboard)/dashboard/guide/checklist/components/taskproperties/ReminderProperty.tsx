import React from 'react';
import { Box, Stack, Typography, Icon, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AddAlertOutlined, Clear } from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';
import theme from '@/src/app/theme';

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
            onAccept={(newValue) => handleReminderDateChange(newValue)}
            openTo="day"
            closeOnSelect={false}
            sx={{
              '& .MuiInputBase-root': {
                height: '36px',
                border: 'none',
                backgroundColor: 'transparent',
                padding: '26px',
                color: 'black',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
        )}
      </LocalizationProvider>
    </Stack>
  );
}
