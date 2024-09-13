import { Drawer } from '@mui/material';
import { useState } from 'react';
import IntroEmailVerification from './intro';
import Verification from './verification';
import CheckYourInbox from './checkYourInbox';

const EmailVerification = () => {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
