import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { hubMocks } from '@/src/app/mocks/hubsMocks';
import CustomHubCard from '../../../components/CustomSubHubsCard';
import SubCategory_Header from '../components/subCategory_Header';
import { subHubMocks } from '@/src/app/mocks/supHubs';
import Image from 'next/image';
import WavyBuddiesEuro from '@/src/icons/subHubs/HeaderPages/Wavy_Buddies_Euro.svg';
import RecommendedTasks2 from '../components/recommendedTasks2';
import { subHubsJson } from '../components/subHubsJson';
import { provisionalListTasks } from '../components/provisionalLisTask';

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
          minHeight: '250px',
          padding: 3,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'relative',
          overflow: 'hidden', // Asegura que los elementos fuera del contenedor no se vean
          backgroundColor: '#F2F0ED',
        }}
      >
        {/* Fondos Circulares */}
        <Box
          sx={{
            position: 'absolute',

            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: '#3D5BA5',
            opacity: 0.4,
            top: '50px',
            right: '208px',
          }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            width: '234px',
            height: '234px',

            borderRadius: '50%',
            backgroundColor: '#E1840A',
            opacity: 0.4,
            top: '-34px',
            right: '0px',
          }}
        ></Box>

        {/* Imagen SVG */}
        <Stack
          sx={{
            position: 'absolute',
            width: '150px', // Ajusta el tamaño según lo necesites
            right: '150px',
            top: '70px',
          }}
        >
          <Image src={WavyBuddiesEuro} alt="icon" width={250} />
        </Stack>

        {/* Contenido */}
        <Stack
          spacing={2} // Usa spacing en lugar de gap
          sx={{
            maxWidth: '600px', // Ajusta el ancho según lo necesites
            zIndex: 1, // Asegura que el contenido esté sobre los fondos
          }}
        >
          <Typography variant="h5">Finances in the Netherlands</Typography>
          <Typography variant="body1">
            This hub is your go-to source for understanding the myriad costs
            associated with residing in the Hague. From navigating the banking
            system to deciphering the nuances of daily expenses, we provide
            detailed insights to help you manage your finances effectively while
            living in the Netherlands.
          </Typography>
        </Stack>
      </Box>

      {/* GRID */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: '100%',
          px: 3,
          py: 4,
          m: 0,
        }}
      >
        <Typography variant="h5">
          Financial landscape and living expenses
        </Typography>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid
            item
            xs={8}
            sx={{
              width: '100%',
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
              justifyContent: 'start',
              alignItems: 'flex-start',
              alignContent: 'flex-start',
              gap: 3,
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
          <Grid item xs={4}>
            <RecommendedTasks2 recomendedTaskInfo={provisionalListTasks} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
