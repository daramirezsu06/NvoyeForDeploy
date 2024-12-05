'use client';
import { useVerifyPrechecklist } from '@/src/app/hooks/verifyPrechecklist';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AlertCompletePrechecklist = () => {
  const isPreChecklistIncomplete = useVerifyPrechecklist(); // Llamar directamente al hook aquí
  const [shake, setShake] = useState(false);

  // Este efecto hace que el botón titile si el pre-checklist está incompleto
  useEffect(() => {
    if (isPreChecklistIncomplete) {
      const intervalId = setInterval(() => {
        setShake((prev) => !prev);
      }, 500); // Cambia la animación cada 500 ms

      return () => clearInterval(intervalId);
    }
  }, [isPreChecklistIncomplete]);

  if (!isPreChecklistIncomplete) {
    return null;
  }

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <Link href="/pre-checklist">
        <Button
          variant="contained"
          color="primary"
          sx={{
            animation: shake ? 'shake 0.5s ease-in-out' : 'none',
            '@keyframes shake': {
              '0%': { transform: 'translateX(0)' },
              '25%': { transform: 'translateX(-5px)' },
              '50%': { transform: 'translateX(5px)' },
              '75%': { transform: 'translateX(-5px)' },
              '100%': { transform: 'translateX(0)' },
            },
          }}
        >
          Complete pre-checklist
        </Button>
      </Link>
    </Stack>
  );
};

export default AlertCompletePrechecklist;
