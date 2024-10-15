import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  TableRow,
  TableCell,
  IconButton,
  Icon,
  Box,
  Collapse,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Isubscription } from '../../mocks/subscriptions';

export default function MembershipTableRow({
  subscription,
}: {
  subscription: Isubscription;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const date = new Date(subscription.nextCharge);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <>
      <TableRow key={subscription.id}>
        <TableCell
          onClick={toggleExpanded}
          sx={{ cursor: { xs: 'pointer', sm: 'default' } }}
        >
          <IconButton
            onClick={toggleExpanded}
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          {subscription.name}
        </TableCell>
        <TableCell>
          <span style={{ whiteSpace: 'nowrap' }}>
            € {formatPrice(subscription.price)}
          </span>
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {formattedDate}
        </TableCell>
      </TableRow>

      {/* Fila expandida */}
      <TableRow>
        <TableCell
          colSpan={3}
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            borderTop: '2px solid #F8F6F5',
          }}
        >
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <Box
              margin={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingX: { xs: 1, sm: 6 },
              }}
            >
              <Typography
                variant="caption"
                color={'GrayText'}
                sx={{ display: { xs: 'flex', sm: 'none' } }}
              >
                Next charge: {formattedDate}
              </Typography>
              <Typography variant="body2">{subscription.name}</Typography>
              <Typography variant="body1">
                {subscription.description}
              </Typography>
              {/* Aquí puedes agregar más información que desees mostrar */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
