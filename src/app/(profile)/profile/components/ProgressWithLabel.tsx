import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function ProgressWithLabel({ value }: { value: number }) {
  return (
    <Box position="relative" display="inline-flex">
      {/* CircularProgress */}
      <CircularProgress
        color="secondary"
        variant="determinate"
        value={(value / 3) * 100}
      />

      {/* Texto sobre el círculo */}
      <Box position="absolute" top="20%" right="15%">
        <Typography variant="caption" component="div">
          {`${value} of 3`}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProgressWithLabel;
