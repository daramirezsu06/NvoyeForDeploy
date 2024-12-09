import { DashboardCustomize } from '@mui/icons-material';
import theme from '@/src/app/theme';
import {
  Container,
  Stack,
  Typography,
  LinearProgress,
  Button,
  Box,
} from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const PreChecklistCompletion = () => {
  const [progress, setProgress] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setIsButtonEnabled(true);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: 644,
          },
          height: 552,
          borderRadius: 7,
          backgroundColor: theme.custom.paperElevationTwo,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DashboardCustomize sx={{ fontSize: 50 }} />

        <Stack
          sx={{
            width: {
              xs: '90%',
              sm: 450,
            },
          }}
        >
          <Typography sx={{ mb: 2, textAlign: 'center' }} variant="h6">
            Building your dashboard
          </Typography>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box>
              <Typography variant="body2">{Math.round(progress)}%</Typography>
            </Box>
          </Box>
        </Stack>
        <Link href="/dashboard/guide">
          <Button
            variant="contained"
            sx={{ textTransform: 'none' }}
            disabled={!isButtonEnabled}
          >
            View my dashboard
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default PreChecklistCompletion;
