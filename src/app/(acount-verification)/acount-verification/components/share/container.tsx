import { Box, Paper } from '@mui/material';
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
      <Box
        sx={{
          p: 8,
          backgroundColor: theme.custom.paperElevationTwo,
          borderRadius: 2,
          width: '987px',
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

export default VerificationContainer;
