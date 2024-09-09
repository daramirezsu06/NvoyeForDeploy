import { Box, LinearProgress, Typography } from '@mui/material';

const ProgressLine = ({ step }: { step: number }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', my: 4 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={(step / 6) * 100} />
      </Box>
      <Box>
        <Typography variant="body2">{Math.round((step / 6) * 100)}%</Typography>
      </Box>
    </Box>
  );
};

export default ProgressLine;
