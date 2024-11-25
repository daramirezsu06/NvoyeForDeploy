'use client';
import React, { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Stack,
  CircularProgress,
  Box,
} from '@mui/material';
import ProgressWithLabel from './ProgressWithLabel';
import GetContries from '@/src/utils/api/profile/getContries';
import Flag from 'react-world-flags'; // Importa la librería
import diplomatUpdate1 from '@/src/utils/api/profile/sendDiplomatUpdate1';
import { useAppDispatch } from '@/src/app/state/hooks';
import { setProfile } from '@/src/app/(dashboard)/redux/profileSlice';

interface ICountry {
  id: number;
  name: string;
  code: string;
  flag: string;
  dialingCode: string;
}

const MissionDetails: React.FC<{ onNext: () => void; step: number }> = ({
  onNext,
  step,
}) => {
  const [homeNation, setHomeNation] = useState<ICountry | null>(null);
  const [assignedCountry, setAssignedCountry] = useState<ICountry | null>(null);
  const [nationsList, setNationsList] = useState<ICountry[]>([]);
  const dispatch = useAppDispatch();

  const handleHomeNationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value);
    const selectedNation = nationsList.find(
      (nation) => nation.id === parseInt(event.target.value)
    );
    setHomeNation(selectedNation || null);
  };

  const handleAssignedCountryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value);
    const selectedNation = nationsList.find(
      (nation) => nation.id === parseInt(event.target.value)
    );
    setAssignedCountry(selectedNation || null);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await GetContries(); // Obtener datos de países
        const countries: ICountry[] = data.data; // Asegúrate de que el formato sea correcto
        // console.log(countries);

        setNationsList(countries); // Establecer la lista de países
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
    // console.log(nationsList);
  }, []);

  // const homeNations = ['USA', 'Canada', 'UK', 'Australia'];
  const possibleCountries = [
    {
      id: 121,
      name: 'Netherlands',
      code: 'NL',
      dialingCode: '+31',
      flag: '🇳🇱',
    },
  ];

  const handleNext = () => {
    const data = { homeCountry: homeNation, assignedCountry };

    const updateDiplomat = async () => {
      try {
        const response = await diplomatUpdate1({ data });
        console.log(response.data);
        dispatch(setProfile(response.data));
        onNext();
      } catch (error) {
        console.log(error);
      }
    };

    updateDiplomat();
  };

  const isButtonDisabled = !homeNation || !assignedCountry;

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" gutterBottom component={'h4'}>
          Mission Details
        </Typography>
        <ProgressWithLabel value={step} />
      </Stack>

      <Typography paragraph component={'span'}>
        Please provide the details of the home nation you represent and the
        country of your current assignation.
      </Typography>
      <TextField
        select
        fullWidth
        label="Home Nation"
        placeholder="Type to search"
        value={homeNation?.id || ''}
        onChange={handleHomeNationChange}
        margin="normal"
        variant="outlined"
      >
        {nationsList.length > 0 ? (
          nationsList.map((nation) => (
            <MenuItem key={nation.id} value={nation.id.toString()}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: 1,
                }}
              >
                <Flag
                  code={nation.code}
                  style={{ width: '20px', height: '15px' }}
                />{' '}
                {/* Renderiza la bandera */}
                <Typography>{nation.name}</Typography> {/* Nombre del país */}
                <Typography variant="body2" color="textSecondary">
                  ({nation.dialingCode})
                </Typography>{' '}
                {/* Código telefónico */}
              </Box>
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Cargando países...</MenuItem>
        )}
      </TextField>
      <TextField
        select
        fullWidth
        label="Assigned Country"
        placeholder="Type to search"
        value={assignedCountry?.id || ''}
        onChange={handleAssignedCountryChange}
        margin="normal"
        variant="outlined"
      >
        {possibleCountries.length > 0 ? (
          possibleCountries.map((nation) => (
            <MenuItem key={nation.id} value={nation.id.toString()}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: 1,
                }}
              >
                <Flag
                  code={nation.code}
                  style={{ width: '20px', height: '15px' }}
                />{' '}
                {/* Renderiza la bandera */}
                <Typography>{nation.name}</Typography> {/* Nombre del país */}
                <Typography variant="body2" color="textSecondary">
                  ({nation.dialingCode})
                </Typography>{' '}
                {/* Código telefónico */}
              </Box>
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Cargando países...</MenuItem>
        )}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleNext}
        disabled={isButtonDisabled} // Deshabilitar el botón si no están seleccionados
      >
        Next
      </Button>
    </>
  );
};

export default MissionDetails;
