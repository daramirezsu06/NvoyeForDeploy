import {
  Box,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
  Button,
} from '@mui/material';
const paperElevationOne = '#FBFAF8';
const paperElevationTwo = '#F7F6F5';
const paperElevationThree = '#F5F3F1';
const paperElevationFour = '#F2F0ED';

const Question = () => {
  // const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onAnswer(e.target.value);
  // };

  return (
    <Box
      sx={{
        maxWidth: 700,
        minHeight: 379,
        width: '100%',
        padding: 4,
        boxShadow: 3,
        borderRadius: 4,
        backgroundColor: paperElevationTwo,
      }}
    >
      <Stack>
        <Typography variant="h5">
          Would you like help finding housing when you arrive?
        </Typography>
        <Typography variant="body1">
          Tell us more about you to help us make your journey better and more
          personalized?
        </Typography>
        <Box
          sx={{
            backgroundColor: paperElevationFour,
            borderRadius: 2,
            my: 4,
            py: 3,
            px: 3,
          }}
        >
          <RadioGroup row>
            <FormControlLabel
              control={<Radio />}
              label="Yes, I need assistance"
            />
            <FormControlLabel
              control={<Radio />}
              label="its already taken care of"
            />
          </RadioGroup>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="end">
        <Button variant="outlined">Back</Button>
        <Button variant="contained">Next</Button>
      </Stack>
    </Box>
  );
};
export default Question;
