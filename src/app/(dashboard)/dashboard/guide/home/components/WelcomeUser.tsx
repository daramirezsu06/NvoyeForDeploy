'use client';
import { selectProfile } from '@/src/app/(dashboard)/redux/profileSlice';
import { useAppSelector } from '@/src/app/state/hooks';
import { Stack, Typography } from '@mui/material';

const getCurrentDate = () => {
  const today = new Date();
  const weekday = today.toLocaleDateString('en-US', { weekday: 'short' }); // Día de la semana (corto)
  const day = today.getDate(); // Día del mes
  const month = today.toLocaleDateString('en-US', { month: 'short' }); // Mes (corto)
  const year = today.getFullYear(); // Año completo
  return `${weekday}, ${day} ${month} ${year}`;
};

export default function WelcomeUser() {
  const profile = useAppSelector(selectProfile);
  const currentDate = getCurrentDate();

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        gap: 3,
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: '#FBFAF8',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
          flex: 1,
        }}
      >
        {/* //! HERE GOES THE USER NAME and the country*/}
        <Typography variant="subtitle2" component={'span'}>
          Welcome, {profile.firstName} {profile.lastName}
        </Typography>
        <Typography variant="h6" component={'h1'}>
          Your Hub for the Netherlands
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="caption" component={'span'}>
          Today&apos;s
        </Typography>
        <Typography variant="h6" component={'span'}>
          {currentDate}
        </Typography>
      </Stack>
    </Stack>
  );
}
