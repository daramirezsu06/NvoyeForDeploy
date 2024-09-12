'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import EmailVerification from './components/EmailVerification';
import IntroEmailVerification from './components/intro';
import Verification from './components/verification';
import EmailVerified from './components/EmailVerified';
import CheckYourInbox from './components/checkYourInbox';

const PruebaEmailVerification = () => {
  const [showMailVerification, setShowMailVerification] = useState(false);
  const handleClick = () => {
    setShowMailVerification(true);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        click para abrir verificacion
      </Button>
      {/* <EmailVerification isOpen={showMailVerification} /> */}
      <IntroEmailVerification />
      <Verification />
      <CheckYourInbox />
      <EmailVerified />
    </>
  );
};
export default PruebaEmailVerification;
