import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CodeConfirm from './CodeConfirm';
import SetNewPassword from './SetNewPassword';

export default function ResetPasswordModal() {
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  //! traerse el email del estado global

  //!logic to send otp to the users email
  useEffect(() => {
    // creo que aca hay que hacer llamada a send otp
    // console.log(email);
  }, []);

  //!logic to send code to verify
  const handleSubmitCode = () => {
    // creo que aca hay que hacer llamada a verify otp
    console.log(code);
    setStep(2);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* STEP 1: ASK for the CODE */}
      {step === 1 && (
        <CodeConfirm
          code={code}
          setCode={setCode}
          handleSubmitCode={handleSubmitCode}
        />
      )}

      {/* STEP 2: ASK for the NEW PASSWORD */}
      {step === 2 && <SetNewPassword />}
    </Box>
  );
}
