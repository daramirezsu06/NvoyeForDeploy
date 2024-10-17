import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { timeZonesList } from '../util/timezones';
import { timeFormatsList } from '../util/timeFormats';
import { dateFormatList } from '../util/dateFormatList';

export default function DateAndTime() {
  //! MODIFICAR ESTOS VALORES DE ACUERDO A LOS QUE YA TENGA EL USUARIO
  const [timeZone, setTimeZone] = useState(timeZonesList[0].region);
  const [timeFormat, setTimeFormat] = useState(timeFormatsList[0].value);
  const [dateFormat, setDateFormat] = useState(dateFormatList[0].value);

  return (
    <Box
      sx={{
        padding: 4,
        alignSelf: 'stretch',
        backgroundColor: '#F8F6F5',
        borderRadius: 2,
        width: { xs: 'full', sm: '400px', md: '565px' },
        marginBottom: { xs: '60px', sm: 0 },
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          marginBottom: '24px',
        }}
      >
        <Typography variant="h6">Date and Time</Typography>
        <Typography variant="subtitle2">
          Customize your displayed date and time format.{' '}
        </Typography>
      </Stack>

      <Stack
        sx={{
          gap: 2,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="time-zone">Time zone</InputLabel>
          <Select
            variant="outlined"
            size="medium"
            label="Time zone"
            value={timeZone}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
            onChange={(event) => setTimeZone(event.target.value)}
            sx={{
              maxHeight: 200,
            }}
          >
            {timeZonesList.map((timeZone) => (
              <MenuItem key={timeZone.id} value={timeZone.region}>
                {timeZone.code} {timeZone.region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="time-format">Time format</InputLabel>
          <Select
            variant="outlined"
            size="medium"
            label="Time format"
            value={timeFormat}
            onChange={(event) => setTimeFormat(event.target.value)}
            sx={{}}
          >
            {timeFormatsList.map((timeFormat) => (
              <MenuItem key={timeFormat.id} value={timeFormat.value}>
                {timeFormat.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="date-format">Date format</InputLabel>
          <Select
            variant="outlined"
            size="medium"
            label="Date format"
            value={dateFormat}
            onChange={(event) => setDateFormat(event.target.value)}
            sx={{}}
          >
            {dateFormatList.map((dateFormat) => (
              <MenuItem key={dateFormat.id} value={dateFormat.value}>
                {dateFormat.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
