import FileValidateIcon from '@/src/icons/FileValidateIcon';
import VerificationContainer from './share/container';
import { Stack, Typography } from '@mui/material';
const EmailVerified = () => {
  return (
    <VerificationContainer>
      <Stack gap={3}>
        <Stack gap={1} alignItems="center">
          <FileValidateIcon />
          <Stack>
            <Typography textAlign="center" variant="h4">
              Diplomatic email verified!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </VerificationContainer>
  );
};
export default EmailVerified;
