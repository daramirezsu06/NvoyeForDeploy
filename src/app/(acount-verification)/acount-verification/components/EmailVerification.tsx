import { Drawer } from '@mui/material';
import { useState } from 'react';
import IntroEmailVerification from './intro';
import Verification from './verification';
import CheckYourInbox from './checkYourInbox';

const EmailVerification = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step == 1 && <IntroEmailVerification handleNext={handleNext} />}
      {step == 2 && <Verification handleNext={handleNext} />}
      {step == 3 && <CheckYourInbox />}
    </>
  );
};

export default EmailVerification;
