import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  ListItem,
} from '@mui/material';
import Image from 'next/image';
import theme from '@/src/app/theme';
import { Verified, VerifiedTwoTone } from '@mui/icons-material';
import Brandlogo from '@/src/icons/BrandLogo';

const sectionsArray = [
  'Housing',
  'Family care',
  'Pets',
  'Healthcare',
  'Transportation',
  'General living',
];

const IntroPage = ({ setStart }: { setStart: () => void }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        pl: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      {/* Imagen en pantallas grandes, parte izquierda */}
      <Box sx={{ flex: { xs: '', md: 1 }, position: 'relative' }}>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            height: '100%',
            // width: 700,
          }}
        >
          {' '}
          {/* Logo en la esquina superior izquierda */}
          <Box
            sx={{
              position: 'absolute',
              top: '100px',
              left: '170px',
              zIndex: 20,
              width: '120px',
              height: 'auto',
              scale: '3',
              // transform: 'rotate(90deg)',
            }}
          >
            <Brandlogo />
          </Box>
          <Image
            src="/images/ned-intro.jpg"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
              zIndex: 1, // Asegura que el filtro esté sobre la imagen
            }}
          />
          <Typography
            variant="h3"
            color="#FFFFFFDE"
            sx={{
              position: 'absolute',
              bottom: 100,
              left: 50,
              zIndex: 2,
            }}
          >
            Netherland Diplomatic Mission
          </Typography>
        </Box>
        {/* Imagen para pantallas pequeñas */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'relative',
            height: { xs: 250, sm: 300 },
            width: '100%',
            transform: { xs: 'translateX(0px)', sm: 'none' },
          }}
        >
          <Image
            src="/images/getStarted.png"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: {
                xs: 'translate(-55%, -0%)',
                sm: 'translate(-65%, -0%)',
              },
              color: 'white',
              width: '100%',
              textAlign: 'center',
              fontSize: { xs: '1.7rem', sm: '1.9rem' },
            }}
            component={'h1'}
          >
            Netherland Diplomatic Mission
          </Typography>
        </Box>
      </Box>

      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'flex-start', md: 'center' },
          alignItems: 'center',
          justifyItems: 'center',
          padding: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            padding: { xs: 1, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'flex-start', md: 'center' },
            gap: 4,
            borderRadius: 4,
            backgroundColor: {
              xs: theme.custom.paperElevationOne,
              md: theme.custom.paperElevationTwo,
            },
          }}
        >
          <Stack sx={{}}>
            <Typography variant="h5" sx={{ pb: 1 }} component={'h2'}>
              Pre-Checklist Questionnaire
            </Typography>
            <Typography variant="body1" component={'h3'}>
              Tell us more about you to help us make your journey better and
              more personalized.
            </Typography>

            <Box
              sx={{
                backgroundColor: {
                  xs: theme.custom.paperElevationOne,
                  md: theme.custom.paperElevationFour,
                },
                borderRadius: 2,
                py: 3,
                px: { xs: 1, md: 3 },
              }}
            >
              <Typography variant="body1" component={'span'}>
                These questionnaires help us personalize content for:
              </Typography>
              <Grid container spacing={1}>
                {sectionsArray.map((item) => (
                  <Grid item xs={6} key={item}>
                    <ListItem>
                      <VerifiedTwoTone sx={{ mr: 1 }} color="primary" />
                      {item}
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="end" spacing={4}>
            <Button
              variant="contained"
              sx={{ px: 3, py: 1, borderRadius: 2, textTransform: 'none' }}
              onClick={setStart}
            >
              Get started
            </Button>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default IntroPage;
