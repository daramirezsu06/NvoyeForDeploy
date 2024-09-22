import { Typography } from '@mui/material';
import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Typography variant="h5">Home page</Typography>
      <Link className={styles.login_button} href="/login">
        Login
      </Link>
    </main>
  );
}
