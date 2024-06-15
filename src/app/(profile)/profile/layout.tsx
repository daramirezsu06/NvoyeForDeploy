import React from 'react';
import { Container, Box } from '@mui/material';
import Image from 'next/image';
import styles from './layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container className={styles.container} maxWidth={false}>
      <Box className={styles.imageContainer}>
        <Image
          src="/images/sign_up.png"
          alt="Profile image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box className={styles.formContainer}>{children}</Box>
    </Container>
  );
};

export default Layout;
