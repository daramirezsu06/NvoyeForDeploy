import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VerificationContainer from './share/container';
import FileValidateIcon from '@/src/icons/FileValidateIcon';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';

const IntroEmailVerification = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <VerificationContainer>
      <Stack gap={3}>
        {/* titulo e icono  */}
        <Stack gap={1} alignItems="center">
          <FileValidateIcon />
          <Stack>
            <Typography textAlign="center" variant="h4">
              Diplomatic email verification required
            </Typography>
            <Typography textAlign="center" variant="subtitle1">
              You will only need to complete this process once
            </Typography>
          </Stack>
        </Stack>
        {/* contenido */}
        <Stack gap={3}>
          <Stack gap={1}>
            <Stack direction="row" alignItems="center" gap="10px">
              <CheckCircleOutline />
              <Typography variant="h5">Enhanced security</Typography>
            </Stack>
            <Typography variant="body1">
              By verifying your diplomatic email, you contribute to upholding
              the highest standards of security for all users.
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Stack direction="row" alignItems="center" gap="10px">
              <CheckCircleOutline />
              <Typography variant="h5">Trusted status</Typography>
            </Stack>
            <Typography variant="body1">
              Verification adds credibility to your account, signaling to others
              that you are a verified diplomat within our community.
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Stack direction="row" alignItems="center" gap="10px">
              <CheckCircleOutline />
              <Typography variant="h5">Access to premium features</Typography>
            </Stack>
            <Typography variant="body1">
              Unlock additional features and functionalities reserved for
              verified diplomats.
            </Typography>
          </Stack>
        </Stack>
        {/* boton verification */}
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

export default IntroEmailVerification;
