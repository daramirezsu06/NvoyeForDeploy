import {
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';

export const AditionalInfo = () => {
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
          label="Display name"
          defaultValue="Default Value"
          helperText="This is the name displayed in your public profile."
        />
        <TextField
          id="outlined-helperText"
          label="Display name"
          defaultValue="Default Value"
          helperText="This is the name displayed in your public profile."
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Assigned city</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="" // String vacío para que no haya un valor seleccionado inicialmente
            label="Assigned city"
            // onChange={handleChange}
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
          <InputLabel id="demo-simple-select-label">
            Mission institution
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="" // String vacío para placeholder
            label="Mission institution"
            // onChange={handleChange}
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
            value="" // String vacío para placeholder
            label="Job role"
            // onChange={handleChange}
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
          <InputLabel id="demo-simple-select-label">
            Years of experience
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="" // String vacío para placeholder
            label="Years of experience"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New York</MenuItem>
            <MenuItem value={20}>Paris</MenuItem>
            <MenuItem value={30}>Milan</MenuItem>
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
    </Stack>
  );
};
