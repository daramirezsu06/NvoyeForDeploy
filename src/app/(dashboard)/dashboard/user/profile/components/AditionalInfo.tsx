import { UserData } from '@/src/app/(dashboard)/redux/profileTypes';
import {
  CityType,
  RoleType,
  yearsOfExperiencesType,
} from '@/src/utils/api/profile/types/types';
import {
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Button,
} from '@mui/material';
import { useState } from 'react';
interface AditionalInfoProps {
  displayName: string | null;
  displayEmail: string | null;
  assignedCity: CityType | null;
  missionInstitutionId: number | null;
  roleId: number | null;
  customRole: string | null;
  yearsOfExperienceId: number | null;
  introduction: string | null;
}

export const AditionalInfo = ({
  rolesList,
  yearsOfExperiencesList,
  citesList,
  profileInfo,
}: {
  rolesList: RoleType[];
  yearsOfExperiencesList: yearsOfExperiencesType[];
  citesList: CityType[];
  profileInfo: UserData;
}) => {
  const [aditionalInfo, setAditionalInfo] = useState<AditionalInfoProps>({
    displayName: profileInfo.displayName,
    displayEmail: profileInfo.displayEmail,
    assignedCity: profileInfo.assignedCity,
    missionInstitutionId: profileInfo.missionInstitutionId || 0,
    roleId: profileInfo.roleId,
    customRole: profileInfo.customRole,
    yearsOfExperienceId: profileInfo.yearsOfExperience,
    introduction: profileInfo.introduction,
  });
  return (
    <Stack gap={2}>
      <Stack>
        <Typography variant="h6">Additional information</Typography>
        <Typography variant="subtitle2">
          Customize the information below to enhance your public Nvoye profile.
        </Typography>
      </Stack>
      <Stack gap={2}>
        <TextField
          id="outlined-helperText"
          label="Displayed name"
          defaultValue="Default Value"
          helperText="This is the name displayed in your public profile."
        />
        <TextField
          id="outlined-helperText"
          label="Displayed email"
          defaultValue="Default Value"
          helperText="This is email appear on your community profile."
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Assigned city</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Assigned city"
          >
            {citesList.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.name}
              </MenuItem>
            ))}
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New York</MenuItem>
            <MenuItem value={20}>Paris</MenuItem>
            <MenuItem value={30}>Milan</MenuItem> */}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Mission institution
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Mission institution"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New York</MenuItem>
            <MenuItem value={20}>Paris</MenuItem>
            <MenuItem value={30}>Milan</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Job role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Job role"
          >
            {rolesList.map((role) => (
              <MenuItem key={role.id} value={role.id}>
                {role.name}
              </MenuItem>
            ))}
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New York</MenuItem>
            <MenuItem value={20}>Paris</MenuItem>
            <MenuItem value={30}>Milan</MenuItem> */}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Years of experience
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Years of experience"
          >
            {yearsOfExperiencesList.map((years) => (
              <MenuItem key={years.id} value={years.id}>
                {years.name} {'('}
                {years.description}
                {')'}
              </MenuItem>
            ))}
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New York</MenuItem>
            <MenuItem value={20}>Paris</MenuItem>
            <MenuItem value={30}>Milan</MenuItem> */}
          </Select>
        </FormControl>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={6}
          placeholder="Briefly introduce yourself, e.g. your current role, skills or a key area of xpertise."
          variant="outlined"
        />
      </Stack>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Stack>
  );
};
