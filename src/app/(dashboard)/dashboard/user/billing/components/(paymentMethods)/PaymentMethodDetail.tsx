import React, { useEffect, useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import {
  Box,
  Button,
  Icon,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import theme from '@/src/app/theme';
import {
  ArrowBack,
  CreditCard,
  Delete,
  DeleteOutline,
  EditOutlined,
} from '@mui/icons-material';
import EditPaymentMethod from './EditPaymentMethod';
import valid from 'card-validator';

export default function PaymentMethodDetail({
  paymentMethod,
  handleClosePaymentMethodDetail,
  handleDeletePaymentMethod,
  handleSetDefault,
  handleShowEditMethod,
  handleShowDeleteMethod,
  handleShowSetDefault,
}: {
  paymentMethod: IPaymentMethod;
  handleClosePaymentMethodDetail: () => void;
  handleDeletePaymentMethod: () => void;
  handleSetDefault: () => void;
  handleShowEditMethod: () => void;
  handleShowDeleteMethod: () => void;
  handleShowSetDefault: () => void;
}) {
  const last4 = paymentMethod.cardNumber.slice(-4);
  const [cardCompany, setCardCompany] = useState<string>('');
  useEffect(() => {
    const cardValidation = valid.number(paymentMethod.cardNumber);
    if (cardValidation.card) {
      setCardCompany(cardValidation.card.niceType);
    }
  }, [paymentMethod.cardNumber]);

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '40px',
        padding: { xs: 0, sm: 4 },
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        height: '100%',
        // display: { xs: 'flex', sm: 'none' },
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        // gap: '40px',
        // padding: { xs: 1, sm: 4 },
        // boxSizing: 'border-box',
        // position: 'relative',
        // width: '95%',
        // height: '95%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'flex-start',
          // justifyContent: 'space-between',
          gap: '10px',
          width: { xs: '100%' },
          height: { xs: '100%' },
          borderRadius: '0x',
          // borderRadius: '16px',
          backgroundColor: theme.custom.paperElevationTwo,
          elevation: 8,
          paddingY: 4,
          paddingX: 2,
          boxShadow: ' 0px 18px 20px 1px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={handleClosePaymentMethodDetail}>
            <Icon>
              <ArrowBack />
            </Icon>
          </IconButton>
          <Typography variant="h5">Payment Method Details</Typography>
        </Box>

        {/* Card Details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box
            sx={{
              // alignSelf: 'flex-start',
              borderRadius: 2,
              backgroundColor: theme.custom.paperElevationFour,
              padding: 2,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box
                sx={{
                  width: '42px',
                  height: '42px',
                }}
              >
                <CreditCard sx={{ width: '100%', height: '100%' }} />
              </Box>
              <Box>
                <Typography variant="subtitle1">{cardCompany}</Typography>
                <Typography variant="subtitle2">Ending in {last4}</Typography>
                <Typography
                  variant="body1"
                  color={theme.palette.text.secondary}
                >
                  {paymentMethod.cardHolderName}
                </Typography>
              </Box>
            </Box>

            {/* Edit Button */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                alignSelf: 'stretch',
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  gap: 1,
                }}
                onClick={handleShowEditMethod}
              >
                <EditOutlined />
                Edit
              </Button>
            </Box>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Button
              variant="outlined"
              size="large"
              color="error"
              sx={{ borderRadius: 2, textTransform: 'none', gap: 1 }}
              onClick={handleShowDeleteMethod}
            >
              <DeleteOutline />
              Remove
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: 2, textTransform: 'none' }}
              onClick={handleShowSetDefault}
            >
              Set as default
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
