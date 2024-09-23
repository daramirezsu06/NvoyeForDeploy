'use client';
import React, { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Stack,
  CircularProgress,
} from '@mui/material';
import ProgressWithLabel from './ProgressWithLabel';

const MissionDetails: React.FC<{ onNext: () => void; step: number }> = ({
  onNext,
  step,
}) => {
  const [homeNation, setHomeNation] = useState('');
  const [assignedCountry, setAssignedCountry] = useState('');

  const handleHomeNationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHomeNation(event.target.value);
  };

  const handleAssignedCountryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAssignedCountry(event.target.value);
  };
  useEffect(() => {});

  const homeNations = ['USA', 'Canada', 'UK', 'Australia'];
  const assignedCountries = ['India', 'Germany', 'France', 'Japan'];

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Mission Details
        </Typography>
        <ProgressWithLabel value={step} />
      </Stack>

      <Typography paragraph>
        Please provide the details of the home nation you represent and the
        country of your current assignation.
      </Typography>
      <TextField
        select
        fullWidth
        label="Home Nation"
        placeholder="Type to search"
        value={homeNation}
        onChange={handleHomeNationChange}
        margin="normal"
        variant="outlined"
      >
        {homeNations.map((nation) => (
          <MenuItem key={nation} value={nation}>
            {nation}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        fullWidth
        label="Assigned Country"
        placeholder="Type to search"
        value={assignedCountry}
        onChange={handleAssignedCountryChange}
        margin="normal"
        variant="outlined"
      >
        {assignedCountries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={onNext}
      >
        Next
      </Button>
    </>
  );
};

export default MissionDetails;
