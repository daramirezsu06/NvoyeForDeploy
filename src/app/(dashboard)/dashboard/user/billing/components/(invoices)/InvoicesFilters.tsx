import { Clear, Close, DateRange } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  ListSubheader,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField, DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

type Filters = {
  status: string;
  amountFilterValues: [number, number];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  searchText: string;
};

type Props = {
  handleDontShowFilters: () => void;
  handleApplyFilters: (filters: Filters) => void;
  initialFilters: Filters;
};

export default function InvoicesFilters({
  handleDontShowFilters,
  handleApplyFilters,
  initialFilters,
}: Props) {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1000,
      label: '€1.000',
    },
  ];
  const [amountFilterValues, setAmountFilterValues] = useState<
    [number, number]
  >([0, 1000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setAmountFilterValues(newValue as [number, number]);
  };

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const [status, setStatus] = useState<string>('');
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setAmountFilterValues(initialFilters.amountFilterValues);
    setStartDate(initialFilters.startDate);
    setEndDate(initialFilters.endDate);
    setStatus(initialFilters.status);
    setSearchText(initialFilters.searchText);
  }, [initialFilters]);

  const handleClearFilters = () => {
    setAmountFilterValues([0, 1000]);
    setStartDate(null);
    setEndDate(null);
    setStatus('');
    setSearchText('');
  };

  const handleSubmit = () => {
    const newFilters: Filters = {
      status: status, // usa el estado actual
      amountFilterValues: amountFilterValues, // usa el estado actual
      startDate: startDate, // usa el estado actual
      endDate: endDate, // usa el estado actual
      searchText: searchText,
    };

    // Aquí aplicas los nuevos filtros
    handleApplyFilters(newFilters);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingY: { xs: 0, sm: 0 },
        paddingX: { xs: 0, sm: 0 },
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#FFF',
        width: { xs: '95%', sm: '555px' },
        paddingBottom: { xs: 1, sm: 1 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          height: '64px',
          backgroundColor: '#F7F5F2',
          borderRadius: '8px 8px 0px 0px',
          padding: { xs: '0px 8px 0px 24px', sm: '0px 8px 0px 24px' },
        }}
      >
        <Typography variant="h6">Filter by</Typography>
        <IconButton onClick={handleDontShowFilters}>
          <Icon>
            <Close></Close>
          </Icon>
        </IconButton>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingX: { xs: 3, sm: 3 },
          mb: 1,
        }}
      >
        <ListSubheader sx={{ zIndex: 0, backgroundColor: '#FFF' }}>
          Amount
        </ListSubheader>
        {/* <Typography variant="subtitle2">Amount</Typography> */}
        <Slider
          color="primary"
          marks={marks}
          aria-label="Custom marks"
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          step={100}
          value={amountFilterValues}
          onChange={handleChange}
        ></Slider>
        <ListSubheader sx={{ zIndex: 0, backgroundColor: '#FFF' }}>
          Date
        </ListSubheader>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            gap: '10px',
            width: '100%',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start date"
              format="DD-MM-YYYY"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              sx={{
                width: '100%',
              }}
            />
            <DatePicker
              label="End date"
              format="DD-MM-YYYY"
              value={endDate}
              minDate={startDate || undefined}
              onChange={(newValue) => setEndDate(newValue)}
              sx={{
                width: '100%',
              }}
            />
          </LocalizationProvider>
        </Stack>

        <ListSubheader sx={{ zIndex: 0, backgroundColor: '#FFF' }}>
          Status
        </ListSubheader>
        <FormControl component="fieldset">
          <RadioGroup value={status} onChange={handleStatusChange}>
            <FormControlLabel
              value="Paid"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="Paid"
              sx={{
                color: 'success.main', // Define el color inicial del label
                '& .MuiFormControlLabel-label': {
                  color: 'success.main', // Define el color al estar seleccionado
                },
              }}
            />
            <FormControlLabel
              value="Pending"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="Pending"
              sx={{
                color: 'primary.main',
                '& .MuiFormControlLabel-label': {
                  color: 'primary.main',
                },
              }}
            />
            <FormControlLabel
              value="Failed"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="Failed"
              sx={{
                color: 'error.main',
                '& .MuiFormControlLabel-label': {
                  color: 'error.main',
                },
              }}
            />
            <FormControlLabel
              value="Overdue"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="Overdue"
              sx={{
                color: 'warning.main',
                '& .MuiFormControlLabel-label': {
                  color: 'warning.main',
                },
              }}
            />
            <FormControlLabel
              value="Canceled"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="Canceled"
              sx={{
                color: 'error.main',
                '& .MuiFormControlLabel-label': {
                  color: 'error.main',
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          height: '64px',
          borderRadius: '0px 0px 8px 8px',
          padding: { xs: '0px 8px 0px 24px', sm: '0px 8px 0px 24px' },
          gap: 4,
        }}
      >
        <Button
          size="large"
          color="error"
          variant="outlined"
          sx={{ textTransform: 'none', borderRadius: 2, gap: 1 }}
          onClick={handleClearFilters}
        >
          Clear filters <Clear />
        </Button>
        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'none', borderRadius: 2, gap: 1 }}
          onClick={handleSubmit}
        >
          Apply
        </Button>
      </Container>
    </Box>
  );
}
