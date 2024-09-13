import FileValidateIcon from '@/src/icons/FileValidateIcon';
import VerificationContainer from './share/container';
import {
  Box,
  Button,
  FormHelperText,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const Verification = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <VerificationContainer>
      <Stack gap={3}>
        <Stack gap={1} alignItems="center">
          <FileValidateIcon />
          <Stack>
            <Typography textAlign="center" variant="h4">
              Diplomatic email verification required
            </Typography>
          </Stack>
        </Stack>
        <TextField
          fullWidth
          placeholder="Diplomatic email" // Aquí va el placeholder
          helperText="We will send you a link to verify the email you've entered" // Aquí va el texto de ayuda
          variant="outlined" // Puedes usar outlined o filled según prefieras
        />
        <Stack direction="row" justifyContent="end">
          <Button
            onClick={handleNext}
            sx={{
              width: 'auto',
              borderRadius: 1,
              px: '22px',
              py: 1,
            }}
            variant="contained"
          >
            Verify diplomatic email
          </Button>
        </Stack>
      </Stack>
    </VerificationContainer>
  );
};
export default Verification;
