import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { hubMocks } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/hubsMocks';
import CustomHubCard from '../../components/CustomHubCard';
import SubCategory_Header from './components/subCategory_Header';

type Props = {};

export default function Hubs({}: Props) {
  //TODO country should be fetch from user

  //TODO hubs should be fetch from country

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          maxWidth: '1280px',
          paddingLeft: { xs: 1, sm: 0 },
          paddingRight: { xs: 1, sm: 0 },
          paddingY: { xs: 0, sm: 0 },
          marginLeft: { xs: '0px', sm: '0px' },
          marginRight: { xs: '0px', sm: '0px' },
          flex: 1,
        }}
      >
        {/* UPPER BOX */}
        <Box
          sx={{
            display: 'flex',
            minHeight: '160px',
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
            <Typography variant="h5" color={'primary'} component={'h1'}>
              The Netherlands
            </Typography>
            <Typography variant="h5" component={'h1'}>
              diplomatic hub
            </Typography>
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
            component={'h2'}
          >
            A curated collection of resources to help you navigate the nuances
            of daily life in this vibrant and unique country.
          </Typography>
        </Box>

        {/* GRID */}
        <Grid
          sx={{
            display: 'flex',
            paddingY: 2,
            paddingX: {
              xs: 2,
              sm: 3,
            },
            paddingBottom: {
              xs: '80px',
              sm: 2,
            },
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '24px',
            alignSelf: ' stretch',
            flexWrap: 'wrap',
            backgroundColor: '#F8F6F5',
            borderRadius: '8px',
          }}
        >
          {hubMocks.map((hub) => (
            <CustomHubCard
              key={hub.title}
              icon={hub.icon}
              title={hub.title}
              topics={hub.topics}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
