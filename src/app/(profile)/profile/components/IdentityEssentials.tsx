'use client';
import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Link,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

const IdentityEssentials = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value as string);
  };

  return (
    <Paper
      sx={{
        display: 'flex',
      }}
    >
      <Stack width={'100%'} height={'699px'} paddingX={'16px'} paddingY={'0px'}>
        <Stack
          width={'100%'}
          height={'699px'}
          display={'flex'}
          flexDirection={'column'}
          gap={'32px'}
        >
          <HeaderSection />
          <FormSection
            gender={gender}
            handleGenderChange={handleGenderChange}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

const HeaderSection = () => (
  <Stack
    width={'100%'}
    alignSelf={'stretch'}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
  >
    <Stack width={'100%'} display={'flex'}>
      <Typography variant="h5">Identity Essentials</Typography>
    </Stack>
    <Typography variant="caption">
      Please complete the information below to help us accurately address you.
    </Typography>
  </Stack>
);

interface FormSectionProps {
  gender: string;
  handleGenderChange: (event: SelectChangeEvent<string>) => void;
}

const FormSection = ({ gender, handleGenderChange }: FormSectionProps) => (
  <Stack
    display={'flex'}
    flexDirection={'column'}
    gap={'28px'}
    alignSelf={'stretch'}
  >
    <Stack>
      <TextField required id="first-name" label="First Name" size="small" />
    </Stack>
    <Stack>
      <TextField required id="last-name" label="Last Name" size="small" />
    </Stack>
    <Stack>
      <FormControl required size="small">
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          size="small"
          value={gender}
          label="Gender"
          onChange={handleGenderChange}
        >
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
    </Stack>
    <ProfilePictureSection />
    <ButtonSection />
  </Stack>
);

const ProfilePictureSection = () => (
  <>
    <Stack>
      <Stack display={'flex'} flexDirection={'column'} gap={'8px'}>
        <Typography variant="subtitle2">Profile picture</Typography>
        <Typography variant="body1">
          Not ready to upload a profile picture now? You can update this at
          anytime in your Profile Settings.
        </Typography>
      </Stack>
    </Stack>
    <Container
      sx={{
        borderStyle: 'dashed',
        borderColor: 'divider',
        borderWidth: '1px',
        position: 'relative',
        height: 152,
        maxHeight: '152px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingX: '16px',
        paddingY: '24px',
        cursor: 'pointer',
      }}
    >
      <Stack
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'8px'}
        position={'absolute'}
        zIndex={'2'}
      >
        <Stack
          width={'40px'}
          height={'40px'}
          borderRadius={'100%'}
          bgcolor={'black'}
        ></Stack>
        <Link sx={{ '&:hover': { color: 'action.hover' } }}>
          <Typography variant="subtitle1">Click to upload</Typography>
        </Link>
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
  </>
);

const ButtonSection = () => (
  <Stack
    padding="10px"
    width="100%"
    display="flex"
    justifyContent="space-between"
    flexDirection={'row'}
  >
    <Button
      color="inherit"
      sx={{ width: '61px', height: '30px', fontFamily: 'Outfit-Medium' }}
      size="small"
      variant="outlined"
    >
      BACK
    </Button>
    <Button
      sx={{ width: '61px', height: '30px', fontFamily: 'Outfit-Medium' }}
      size="small"
      variant="contained"
    >
      Next
    </Button>
  </Stack>
);

export default IdentityEssentials;
