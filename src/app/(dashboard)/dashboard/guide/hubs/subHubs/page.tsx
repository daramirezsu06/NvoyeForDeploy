import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { hubMocks } from '@/src/app/mocks/hubsMocks';
import CustomHubCard from '../../../components/CustomHubCard';
import SubCategory_Header from '../components/subCategory_Header';
import { subHubMocks } from '@/src/app/mocks/supHubs';

type Props = {};

export default function Hubs({}: Props) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '8px', sm: 3 },
        paddingRight: { xs: '8px', sm: 3 },
        paddingY: { xs: 0, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        flex: 1,
      }}
    >
      {/* UPPER BOX */}
      <Box
        sx={{
          display: 'flex',
          minHeight: '200px',
          padding: 3,
          flexDirection: ' column',
          justifyContent: 'flex-end',
          alignItems: ' flex-start',
          alignSelf: 'stretch',
          position: 'relative',
        }}
      >
        {/* IMAGENES */}
        <Box
          sx={{
            position: 'absolute',
            width: '336px',
            height: '336px',
            zIndex: -1,
            right: '208px',
            top: '-104px',
            borderRadius: ' 336px',
            backgroundColor: ' #F4F0ED',
          }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            width: '234px',
            height: '234px',
            zIndex: -1,
            right: '0px',
            top: '-34px',
            borderRadius: ' 336px',
            backgroundColor: '#3D5BA51F',
            opacity: 0.4,
          }}
        ></Box>

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            alignSelf: 'stretch',
          }}
        >
          <Typography variant="h5" color={'primary'}>
            The Netherlands
          </Typography>
          <Typography variant="h5">diplomatic hub</Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            display: 'flex',
            maxWidth: '450px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: ' stretch',
          }}
        >
          A curated collection of resources to help you navigate the nuances of
          daily life in this vibrant and unique country.
        </Typography>
      </Box>

      {/* GRID */}
      <Grid
        sx={{
          display: 'flex',
          paddingY: 2,
          paddingX: {
            xs: 0,
            sm: 3,
          },
          paddingBottom: {
            xs: '80px',
            sm: 2,
          },
          justifyContent: ' center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: '24px',
          alignSelf: ' stretch',
          flexWrap: 'wrap',
          backgroundColor: '#F8F6F5',
          borderRadius: '8px',
        }}
      >
        {subHubMocks.map((hub) => (
          <CustomHubCard
            key={hub.title}
            icon={hub.icon}
            title={hub.title}
            topics={hub.topics}
          />
        ))}
      </Grid>
    </Container>
  );
}
