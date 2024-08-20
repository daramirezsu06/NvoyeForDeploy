import { Typography, Container, Box } from '@mui/material';
import Image from 'next/image';
import Question from './components/question';

export default function Checklist() {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        padding: 0,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src="/images/sign_up.png"
          alt="Profile image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
      <Container
        sx={{
          flex: 2,
          pl: { xs: 0, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Question />
      </Container>
    </Container>
  );
}
