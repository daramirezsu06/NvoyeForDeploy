import { Paper, Stack } from '@mui/material';
import theme from '@/src/app/theme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const VerificationContainer = ({ children }: Props) => {
  return (
    <Paper
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack
        sx={{
          p: 8,
          backgroundColor: theme.custom.paperElevationTwo,
          borderRadius: 2,
          width: '987px',
        }}
      >
        {children}
      </Stack>
    </Paper>
  );
};

export default VerificationContainer;
