import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import WelcomeUser from '../components/WelcomeUser';
import CustomHubCard from '../../components/CustomHubCard';
import { relative } from 'path';
import { Close, MoreVert } from '@mui/icons-material';
import BrandLogo from '@/src/icons/BrandLogo';
import Calendarinfo from '@/src/icons/Calendarinfo.png';
import Image from 'next/image';
import LandingListItem from './components/LandingListItem';

type Props = {};

export default function Home({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Columna en pantallas móviles, fila en pantallas grandes
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',

        // minWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: 3 },
        paddingRight: { xs: '0px', sm: 3 },
        paddingY: { xs: 0, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        flex: 1,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          gap: 3,
        }}
      >
        <WelcomeUser />

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
            alignSelf: 'stretch',
            borderRadius: 2,
            backgroundColor: '#F8F6F5',
          }}
        >
          {/* Recommended hubs */}
          <Box
            sx={{
              display: 'flex',
              padding: 2,
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
              alignSelf: ' stretch',
            }}
          >
            <Stack
              sx={{
                display: ' flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: ' center',
                alignSelf: 'stretch',
              }}
            >
              <Typography variant="h6">Recommended hubs</Typography>
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                View all hubs
              </Button>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: ' center',
                gap: 3,
                alignSelf: ' stretch',
                flexWrap: 'nowrap',
                // overflowX: 'auto',
              }}
            >
              {/* //! ACA VAN LAS TRES TARJETAS DE HUB */}
              <CustomHubCard />
              <CustomHubCard />
              <CustomHubCard />
            </Stack>
          </Box>

          {/* Scheduled task */}
          <Box></Box>
        </Stack>
      </Box>

      {/* BOX DE LA DERECHA */}
      <Box
        sx={{
          display: 'flex',
          maxWidth: '500px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
          flex: 1,
          alignSelf: ' stretch',
        }}
      >
        {/* Box de arriba */}
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch',
            borderRadius: '16px',
            border: '1px solid #E6E5E5',
            background:
              'radial-gradient(310.85% 220.14% at 6.95% 17.38%, rgba(255, 255, 255, 0.87) 0%, #FFDCAD 63.51%, rgba(255, 255, 255, 0.87) 100%)',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              display: 'flex',
              padding: '8px',
              flexDirection: ' column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: '0px',
              top: '0px',
            }}

            // onClick={() => {}} //este onclick debe dejar de mostrar este contenedor
          >
            <Icon>
              <Close />
            </Icon>
          </IconButton>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              gap: '8px',
              alignSelf: 'stretch',
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
              }}
            >
              <Typography variant="caption">Recommended for you</Typography>
              <Typography variant="h6">
                Connect your calendar and sync your tasks
              </Typography>
              <Typography variant="caption">
                Connect your calendar to receive notifications and reminder for
                all checklist task items.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
                alignSelf: 'stretch',
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                Connect now
              </Button>
              <Button
                variant="text"
                color="inherit"
                size="small"
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                Remind me later
              </Button>
            </Stack>
          </Stack>
          <Image
            src={Calendarinfo}
            alt="Calendarinfo"
            style={{ position: 'absolute', right: '10px', bottom: '10px' }}
          />
        </Box>
        {/* Box de abajo */}
        <Box
          sx={{
            display: 'flex',
            padding: '16px',
            flexDirection: ' column',
            alignItems: 'flex-start',
            gap: ' 8px',
            alignSelf: 'stretch',
            borderRadius: 2,
            backgroundColor: '#F8F6F5',
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: '8px',
              alignSelf: 'stretch',
            }}
          >
            <BrandLogo />
            <Typography variant="h6" color="primary">
              Nvoye landing package
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              alignSelf: 'stretch',
            }}
          >
            <List
              sx={{
                display: 'flex',
                padding: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 2,
                alignSelf: ' stretch',
              }}
            >
              <LandingListItem />
              <LandingListItem />
              <LandingListItem />
              <LandingListItem />
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
