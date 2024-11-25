import { MoreVert } from '@mui/icons-material';
import {
  Container,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

type Props = {};

export default function LandingListItem({}: Props) {
  return (
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        borderRadius: '8px',
        backgroundColor: '#FDFCFB',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
          alignItems: 'center',
          alignSelf: 'stretch',
          paddingLeft: { xs: '0px', sm: 0 },
          paddingRight: { xs: '0px', sm: 0 },
        }}
      >
        <ListItemText
          sx={{
            display: 'flex',
            padding: '0px',
            flexDirection: ' column',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          <Typography variant="body1" component={'span'}>
            Gym Registration
          </Typography>
        </ListItemText>
        <IconButton>
          <Icon>
            <MoreVert />
          </Icon>
        </IconButton>
      </Container>
    </ListItem>
  );
}
