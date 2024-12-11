'use client';
import React, { useEffect, useState } from 'react';
import Flag from 'react-world-flags';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Link,
  SelectChangeEvent,
  Typography,
  Box,
} from '@mui/material';
import { possibleCountries } from './conuntries';
import { UserData } from '@/src/app/(dashboard)/redux/profileTypes';
import { GenderType, ICountryType } from '@/src/utils/api/profile/types/types';

interface FormSectionProps {
  firstName: string;
  lastName: string;
  handleChangeFirstName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeLastName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  gender: number | '';
  handleGenderChange: (event: SelectChangeEvent<number>) => void;
  handleNext: () => void;
  onBack: () => void;
  genderList: GenderType[];
}

export const IdentitiForm = ({
  profile,
  countriesList,
  gendersList,
}: {
  profile: UserData;
  countriesList: ICountryType[];
  gendersList: GenderType[];
}) => {
  const [identityForm, setIdentityForm] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    gender: profile.gender,
    homeCountry: profile.homeCountry,
    assignedCountry: profile.assignedCountry,
  });

  const handleChangenames = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentityForm({
      ...identityForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangegender = (event: SelectChangeEvent<string>) => {
    setIdentityForm({
      ...identityForm,
      [event.target.name]: gendersList.find(
        (gender) => gender.id === parseInt(event.target.value)
      ),
    });
  };
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentityForm({
      ...identityForm,
      [event.target.name]: countriesList.find(
        (country) => country.id === parseInt(event.target.value)
      ),
    });
  };
  return (
    <>
      <Stack direction="column" justifyContent="space-between">
        <Typography variant="h6" gutterBottom>
          Identity essentials
        </Typography>
        <Typography paragraph>Your personal information.</Typography>
      </Stack>
      <Stack>
        <ProfilePictureSection />
        <Stack>
          <Typography variant="subtitle1">Personal details</Typography>
          <Stack spacing={3}>
            <TextField
              value={identityForm.firstName}
              required
              id="first-name"
              size="small"
              fullWidth
              name="firstName"
              onChange={handleChangenames}
              //   value={firstName}
              //   onChange={handleChangeFirstName}
            />
            <TextField
              value={identityForm.lastName}
              required
              id="last-name"
              size="small"
              fullWidth
              name="lastName"
              onChange={handleChangenames}
              //   value={lastName}
              //   onChange={handleChangeLastName}
            />
            <FormControl required size="small" fullWidth>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={String(identityForm.gender.id)}
                label="Gender"
                name="gender"
                onChange={handleChangegender}
                // onChange={handleGenderChange}
              >
                {gendersList && gendersList.length > 0 ? (
                  gendersList.map((item: GenderType) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>Cargando géneros...</MenuItem>
                )}
                {/* <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Non-binary">Non-binary</MenuItem>
                <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                <MenuItem value="Other">Other</MenuItem> */}
              </Select>
            </FormControl>

            <TextField
              select
              fullWidth
              label="Home Nation"
              placeholder="Type to search"
              //   value={homeNation?.id || ''}
              //   onChange={handleHomeNationChange}
              margin="normal"
              variant="outlined"
              value={identityForm.homeCountry.id}
              name="homeCountry"
              onChange={handleChangeCountry}
            >
              {countriesList && countriesList.length > 0 ? (
                countriesList.map((nation) => (
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
                      <Typography>{nation.name}</Typography>{' '}
                      {/* Nombre del país */}
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
              //   value={assignedCountry?.id || ''}
              //   onChange={handleAssignedCountryChange}
              margin="normal"
              variant="outlined"
              value={identityForm.assignedCountry.id}
              name="assignedCountry"
              onChange={handleChangeCountry}
            >
              {countriesList && countriesList.length > 0 ? (
                countriesList.map((nation) => (
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
                      <Typography>{nation.name}</Typography>{' '}
                      {/* Nombre del país */}
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
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const ProfilePictureSection = () => (
  <Stack spacing={1}>
    <Typography variant="subtitle2">Profile picture</Typography>

    <Container
      sx={{
        borderStyle: 'dashed',
        borderColor: 'divider',
        borderRadius: '8px',
        height: 152,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <Stack spacing={1} alignItems="center" position="absolute" zIndex={2}>
        <Box width={40} height={40} borderRadius="50%" bgcolor="#ccc" />
        <Link sx={{ '&:hover': { color: 'action.hover' } }}>
          <Typography variant="subtitle1">Click to upload</Typography>
        </Link>
        <Typography variant="body2">or drag and drop</Typography>
        <Typography variant="body2">SVG, PNG, JPG or GIF (max. 3MB)</Typography>
      </Stack>
      <input
        type="file"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          height: '100%',
          width: '100%',
        }}
      />
    </Container>
  </Stack>
);
