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
import questionsUpdated from './arrayChecklist';
import { Verified } from '@mui/icons-material';
const GetStarted = ({ setStart }) => {
  return (
    <>
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src="/images/getStarted.png"
          alt="Profile image"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Container
        sx={{
          flex: 1,
          pl: { xs: 0, sm: 4 },
          px: 6,
          py: 12,
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: 6,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            borderRadius: 4,
            backgroundColor: theme.custom.paperElevationTwo,
          }}
        >
          <Stack>
            <Typography variant="h5">Pre-Checklist Questionnaire </Typography>
            <Typography variant="body1">
              Tell us more about you to help us make your journey better and
              more personalized
            </Typography>
            <Box
              sx={{
                backgroundColor: theme.custom.paperElevationFour,
                borderRadius: 2,
                py: 3,
                px: 3,
              }}
            >
              <Typography variant="body1">
                These questionnaires helps us personalize content for:
              </Typography>
              <Grid container spacing={1}>
                {questionsUpdated.map((item) => (
                  <Grid item xs={6} key={item.section}>
                    <ListItem>
                      <Verified sx={{ mr: 1 }} />
                      {item.section}
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="end" spacing={4}>
            <Button
              variant="contained"
              sx={{ px: 3, py: 1, borderRadius: 1 }}
              onClick={() => setStart(true)}
            >
              Get started
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default GetStarted;
