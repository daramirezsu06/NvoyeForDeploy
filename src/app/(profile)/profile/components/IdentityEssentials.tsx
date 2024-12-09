'use client';
import React, { useEffect, useState } from 'react';
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
import ProgressWithLabel from './ProgressWithLabel';
import GetGenders from '@/src/utils/api/profile/getGenders';
import diplomatUpdate2 from '@/src/utils/api/profile/sendDiplomatUpdate2';
import { setProfile } from '@/src/app/(dashboard)/redux/profileSlice';
import { useAppDispatch } from '@/src/app/state/hooks';
import { gendersMock } from '../mocks/genders.mock';

interface Gender {
  id: number;
  name: string;
}

const IdentityEssentials: React.FC<{
  onNext: () => void;
  onBack: () => void;
  step: number;
}> = ({ onNext, onBack, step }) => {
  const [genderList, setGenderList] = useState<Gender[]>(gendersMock);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<number | ''>('');
  const [profilePicture, setProfilePicture] = useState('default');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const data = await GetGenders();

        if (Array.isArray(data.data)) {
          setGenderList(data.data);
        } else {
          console.error('Data format is incorrect:', data);
        }
        // setGenderList(data);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };
    fetchGenders();
  }, []);

  const handleChangeFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<number>) => {
    setGender(Number(event.target.value)); // Cambiamos a Number para que el valor sea numérico
  };

  const handleNext = async () => {
    const data = {
      firstName,
      lastName,
      genderId: gender,
      profilePicture,
    };
    console.log('Enviando:', data);
    const updateDiplomat = async () => {
      try {
        const response = await diplomatUpdate2({ data });
        console.log('respuesta', response.data);
        dispatch(setProfile(response.data));
        onNext();
      } catch (error) {
        console.log(error);
      }
    };
    updateDiplomat();

    //  onNext();
  };

  const isDisabled = !firstName || !lastName || !gender;

  return (
    <>
      <HeaderSection step={step} />
      <FormSection
        firstName={firstName}
        lastName={lastName}
        handleChangeFirstName={handleChangeFirstName}
        handleChangeLastName={handleChangeLastName}
        gender={gender}
        handleGenderChange={handleGenderChange}
        handleNext={handleNext}
        onBack={onBack}
        genderList={genderList}
        isDisabled={isDisabled}
      />
    </>
  );
};

const HeaderSection: React.FC<{ step: number }> = ({ step }) => (
  <>
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h4" gutterBottom component="h2">
        Identity essentials
      </Typography>
      <ProgressWithLabel value={step} />
    </Stack>

    <Typography paragraph>
      Please complete the information below to help us accurately address you.
    </Typography>
  </>
);

interface FormSectionProps {
  firstName: string;
  lastName: string;
  handleChangeFirstName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeLastName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  gender: number | '';
  handleGenderChange: (event: SelectChangeEvent<number>) => void;
  handleNext: () => void;
  onBack: () => void;
  genderList: Gender[];
  isDisabled: boolean;
}

const FormSection = ({
  firstName,
  lastName,
  handleChangeFirstName,
  handleChangeLastName,
  gender,
  handleGenderChange,
  handleNext,
  onBack,
  genderList,
  isDisabled,
}: FormSectionProps) => (
  <Stack spacing={3}>
    <TextField
      required
      id="first-name"
      label="First name"
      size="small"
      fullWidth
      value={firstName}
      onChange={handleChangeFirstName}
    />
    <TextField
      required
      id="last-name"
      label="Last name"
      size="small"
      fullWidth
      value={lastName}
      onChange={handleChangeLastName}
    />
    <FormControl required size="small" fullWidth>
      <InputLabel id="gender-select-label">Gender</InputLabel>
      <Select
        labelId="gender-select-label"
        id="gender-select"
        value={gender !== '' ? gender : ''}
        label="Gender"
        onChange={handleGenderChange}
      >
        {genderList.length > 0 ? (
          genderList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Loading...</MenuItem>
        )}
        {/* <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Non-binary">Non-binary</MenuItem>
        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
        <MenuItem value="Other">Other</MenuItem> */}
      </Select>
    </FormControl>
    <ProfilePictureSection />
    <ButtonSection
      handleNext={handleNext}
      onBack={onBack}
      isDisabled={isDisabled}
    />
  </Stack>
);

const ProfilePictureSection = () => (
  <Stack spacing={1}>
    <Typography variant="subtitle2" component={'h3'}>
      Profile picture
    </Typography>
    <Typography variant="body2" component={'span'}>
      Not ready to upload a profile picture now? You can update this at any time
      in your Profile settings.
    </Typography>
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
          <Typography variant="subtitle1" component={'span'}>
            Click to upload
          </Typography>
        </Link>
        <Typography variant="body2" component={'span'}>
          or drag and drop
        </Typography>
        <Typography variant="body2" component={'span'}>
          SVG, PNG, JPG or GIF (max. 3MB)
        </Typography>
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

const ButtonSection: React.FC<{
  handleNext: () => void;
  onBack: () => void;
  isDisabled: boolean;
}> = ({ handleNext, onBack, isDisabled }) => (
  <Stack direction="row" justifyContent="space-between">
    <Button
      onClick={onBack}
      variant="contained"
      color="inherit"
      sx={{
        backgroundColor: 'inherit',
        textTransform: 'none',
        color: 'black',
        width: '100px',
        '&:hover': {
          // El selector correcto para hover
          backgroundColor: 'inherit',
          color: 'black', // Aquí mantienes el color negro en hover
        },
      }}
    >
      Back
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={handleNext}
      sx={{ width: '100px', textTransform: 'none' }}
      disabled={isDisabled}
    >
      Next
    </Button>
  </Stack>
);

export default IdentityEssentials;
