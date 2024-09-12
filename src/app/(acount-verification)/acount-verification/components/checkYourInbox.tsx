import FileValidateIcon from '@/src/icons/FileValidateIcon';
import VerificationContainer from './share/container';
import { Stack, Typography } from '@mui/material';
const CheckYourInbox = () => {
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
        <Stack alignItems="center">
          <Typography variant="h5">Head to your inbox!</Typography>
          <Typography variant="body1">
            Click the link weve sent to finalize your account.
          </Typography>
        </Stack>
      </Stack>
    </VerificationContainer>
  );
};
export default CheckYourInbox;
