'use client';
import React, { useState } from 'react';
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

const IdentityEssentials: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value as string);
  };

  return (
    <>
      <HeaderSection />
      <FormSection
        gender={gender}
        handleGenderChange={handleGenderChange}
        onNext={onNext}
        onBack={onBack}
      />
    </>
  );
};

const HeaderSection = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Identity essentials
    </Typography>
    <Typography paragraph>
      Please complete the information below to help us accurately address you.
    </Typography>
  </>
);

interface FormSectionProps {
  gender: string;
  handleGenderChange: (event: SelectChangeEvent<string>) => void;
  onNext: () => void;
  onBack: () => void;
}

const FormSection = ({
  gender,
  handleGenderChange,
  onNext,
  onBack,
}: FormSectionProps) => (
  <Stack spacing={3}>
    <TextField
      required
      id="first-name"
      label="First name"
      size="small"
      fullWidth
    />
    <TextField
      required
      id="last-name"
      label="Last name"
      size="small"
      fullWidth
    />
    <FormControl required size="small" fullWidth>
      <InputLabel id="gender-select-label">Gender</InputLabel>
      <Select
        labelId="gender-select-label"
        id="gender-select"
        value={gender}
        label="Gender"
        onChange={handleGenderChange}
      >
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Non-binary">Non-binary</MenuItem>
        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
    <ProfilePictureSection />
    <ButtonSection onNext={onNext} onBack={onBack} />
  </Stack>
);

const ProfilePictureSection = () => (
  <Stack spacing={1}>
    <Typography variant="subtitle2">Profile picture</Typography>
    <Typography variant="body2">
      Not ready to upload a profile picture now? You can update this at any time
      in your Profile Settings.
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

const ButtonSection: React.FC<{ onNext: () => void; onBack: () => void }> = ({
  onNext,
  onBack,
}) => (
  <Stack direction="row" justifyContent="space-between">
    <Button
      color="inherit"
      sx={{
        width: '100px',
        height: '40px',
        fontFamily: 'Outfit-Medium',
        borderRadius: '8px',
      }}
      size="large"
      variant="outlined"
      onClick={onBack}
    >
      Back
    </Button>
    <Button
      sx={{
        width: '100px',
        height: '40px',
        fontFamily: 'Outfit-Medium',
        borderRadius: '8px',
      }}
      size="large"
      variant="contained"
      color="primary"
      onClick={onNext}
    >
      Next
    </Button>
  </Stack>
);

export default IdentityEssentials;
