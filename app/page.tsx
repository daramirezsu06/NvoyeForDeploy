import { Typography } from '@mui/material';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Typography variant="h5">Nyove Project</Typography>
      <Footer />
    </main>
  );
}
