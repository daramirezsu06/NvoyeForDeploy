'use client';
import {
  Icon,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Button,
  IconButton,
  Modal,
} from '@mui/material';
import React, { useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import {
  ChevronRight,
  CreditCardOutlined,
  EditOutlined,
} from '@mui/icons-material';
import DefaultPayment from './DefaultPayment';
import EditPaymentMethod from './EditPaymentMethod';

export default function PaymentMethodsTableRow({
  paymentMethod,
}: {
  paymentMethod: IPaymentMethod;
}) {
  const [isShowSetDefault, setIsShowSetDefault] = useState(false);
  const handleShowSetDefault = () => setIsShowSetDefault(true);
  const handleCloseSetDefault = () => setIsShowSetDefault(false);

  const [isShowEditMethod, setIsShowEditMethod] = useState(false);
  const handleShowEditMethod = () => setIsShowEditMethod(true);
  const handleCloseEditMethod = () => setIsShowEditMethod(false);

  const handleDeletePaymentMethod = () => {
    console.log('delete payment method');
    console.log(paymentMethod);
    //TODO send info to backend
  };

  return (
    <>
      <TableRow key={paymentMethod.id}>
        <TableCell>
          <Icon>
            <CreditCardOutlined />
          </Icon>
        </TableCell>
        <TableCell>
          {paymentMethod.cardCompany} ending in {paymentMethod.last4}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {paymentMethod.cardHolderName}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          <Typography
            onClick={handleDeletePaymentMethod}
            color="red"
            sx={{ cursor: 'pointer' }}
          >
            Delete
          </Typography>
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {paymentMethod.isDefault ? (
            <Typography variant="body2" color="GrayText">
              Default
            </Typography>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                handleShowSetDefault();
              }}
              sx={{
                textTransform: 'none',
              }}
            >
              Set as default
            </Button>
          )}
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          <IconButton
            onClick={() => {
              handleShowEditMethod();
            }}
          >
            <Icon>
              <EditOutlined />
            </Icon>
          </IconButton>
        </TableCell>
        <TableCell
          sx={{
            display: { xs: 'table-cell', sm: 'none' },
          }}
        >
          {/* //TODO give functionality to this button */}
          <IconButton>
            <Icon>
              <ChevronRight />
            </Icon>
          </IconButton>
        </TableCell>
        <Modal
          open={isShowEditMethod}
          onClose={handleCloseEditMethod}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <EditPaymentMethod
            paymentMethod={paymentMethod}
            handleCloseEditMethod={handleCloseEditMethod}
          />
        </Modal>
        <Modal
          open={isShowSetDefault}
          onClose={handleCloseSetDefault}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <DefaultPayment
            paymentMethod={paymentMethod}
            handleCloseSetDefault={handleCloseSetDefault}
          />
        </Modal>
      </TableRow>
    </>
  );
}
