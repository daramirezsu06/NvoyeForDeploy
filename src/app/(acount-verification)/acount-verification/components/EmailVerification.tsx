import { Drawer } from '@mui/material';
import { useState } from 'react';

const EmailVerification = ({ isOpen }: { isOpen: boolean }) => {
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
    <Drawer open={isOpen}>
      <div>
        <h1>este es el drawer</h1>
      </div>
    </Drawer>
  );
};

export default EmailVerification;
