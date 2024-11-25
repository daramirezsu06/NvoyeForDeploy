import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { hubMocks } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/hubsMocks';
import CustomHubCard from '../../../components/CustomSubHubsCard';
import SubCategory_Header from '../components/subCategory_Header';
import { subHubMocks } from '@/src/app/(dashboard)/dashboard/guide/hubs/mocks/supHubs';
import Image from 'next/image';
import WavyBuddiesEuro from '@/src/icons/subHubs/HeaderPages/Wavy_Buddies_Euro.svg';
import RecommendedTasks2 from '../components/recommendedTasks2';
import { subHubsJson } from '../components/subHubsJson';
import { provisionalListTasks } from '../components/provisionalLisTask';
import theme from '@/src/app/theme';
import { West, WestOutlined } from '@mui/icons-material';
import Link from 'next/link';
import CustomCategoryCard from '../../../components/CustomCategoryCard';

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
        paddingLeft: { xs: 0, sm: 0 },
        paddingRight: { xs: 0, sm: 0 },
        paddingY: { xs: 0, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        flex: 1,
        paddingBottom: { xs: 6, md: 0 },
      }}
    >
      {/* UPPER BOX */}
      <Container
        sx={{
          display: 'flex',
          minHeight: '250px',
          padding: 3,
          flexDirection: 'column',
          width: '100%',
          maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
          // justifyContent: 'flex-end',
          position: 'relative',
          overflow: 'hidden', // Asegura que los elementos fuera del contenedor no se vean
          backgroundColor: '#F2F0ED',
          gap: 4,
        }}
      >
        {/* //back button and title */}
        <Box>
          <Link href={'/dashboard/guide/hubs'}>
            <Button
              variant="text"
              sx={{ textTransform: 'none' }}
              startIcon={<WestOutlined />}
            >
              {/* //TODO hub name should be dinamic acording ti the url */}
              HubName
            </Button>
          </Link>
        </Box>

        {/* Fondos Circulares */}
        <Box
          sx={{
            position: 'absolute',

            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: '#3D5BA5',
            opacity: 0.1,
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
            opacity: 0.1,
            top: '-34px',
            right: '0px',
          }}
        ></Box>

        {/* Imagen SVG */}
        <Stack
          sx={{
            display: { xs: 'none', md: 'flex' },
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
            maxWidth: { xs: '100%', md: '60%' },
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            component={'h1'}
          >
            Finances in the Netherlands
          </Typography>
          <Typography
            variant="h5"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            component={'h1'}
          >
            Finances in the Netherlands
          </Typography>
          <Typography variant="body1" component={'h4'}>
            This hub is your go-to source for understanding the myriad costs
            associated with residing in the Hague. From navigating the banking
            system to deciphering the nuances of daily expenses, we provide
            detailed insights to help you manage your finances effectively while
            living in the Netherlands.
          </Typography>
        </Stack>
      </Container>

      {/* GRID */}
      <Box
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
        <Typography variant="h5" component={'h2'}>
          Financial landscape and living expenses
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            // alignSelf: 'stretch',
          }}
        >
          <Grid
            item
            // xs={8}
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
              backgroundColor: { xs: '', md: '#F8F6F5' },
              borderRadius: '8px',
              flex: 1,
            }}
          >
            {subHubMocks.map((hub) => (
              <CustomCategoryCard
                key={hub.title}
                icon={hub.icon}
                title={hub.title}
              />
            ))}
          </Grid>

          <RecommendedTasks2 recomendedTaskInfo={provisionalListTasks} />
        </Box>
      </Box>
    </Container>
  );
}
