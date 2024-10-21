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
import React, { useEffect, useState } from 'react';
import { IPaymentMethod } from '../../mocks/paymentMethods';
import {
  ChevronRight,
  CreditCardOutlined,
  EditOutlined,
} from '@mui/icons-material';
import DefaultPayment from './DefaultPayment';
import EditPaymentMethod from './EditPaymentMethod';
import valid from 'card-validator';
import PaymentMethodDetail from './PaymentMethodDetail';

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

  const [isShowPaymentMethodDetail, setIsShowPaymentMethodDetail] =
    useState(false);
  const handleShowPaymentMethodDetail = () => {
    console.log(paymentMethod);
    setIsShowPaymentMethodDetail(true);
  };

  const handleClosePaymentMethodDetail = () =>
    setIsShowPaymentMethodDetail(false);

  const handleDeletePaymentMethod = () => {
    console.log('delete payment method');
    console.log(paymentMethod);
    //TODO send info to backend using de DELETE (Delete Payment Method) -> {{url}}/payment-methods/delete/id
  };

  const handleSetDefault = () => {
    console.log(paymentMethod);

    //!TODO funcion que mande al back la info correspondiente y muestre alerta
  };

  const last4 = paymentMethod.cardNumber.slice(-4);
  const [cardCompany, setCardCompany] = useState<string>('');
  useEffect(() => {
    const cardValidation = valid.number(paymentMethod.cardNumber);
    if (cardValidation.card) {
      setCardCompany(cardValidation.card.niceType);
    }
  }, [paymentMethod.cardNumber]);

  return (
    <>
      <TableRow key={paymentMethod.id}>
        <TableCell>
          <Icon>
            <CreditCardOutlined />
          </Icon>
        </TableCell>
        <TableCell>
          {cardCompany} ending in {last4}
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
        <TableCell>
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
                display: { xs: 'none', sm: 'inline' },
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
          <IconButton
            onClick={() => {
              handleShowPaymentMethodDetail();
            }}
          >
            <Icon>
              <ChevronRight />
            </Icon>
          </IconButton>
        </TableCell>

        {/* Modal for editing payment method */}
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

        {/* Modal for Set Default card */}
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
            handleSetDefault={handleSetDefault}
            paymentMethod={paymentMethod}
            handleCloseSetDefault={handleCloseSetDefault}
          />
        </Modal>

        {/* Modal for Card Details*/}
        <Modal
          open={isShowPaymentMethodDetail}
          onClose={handleClosePaymentMethodDetail}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <PaymentMethodDetail
            handleShowEditMethod={handleShowEditMethod}
            handleSetDefault={handleSetDefault}
            handleDeletePaymentMethod={handleDeletePaymentMethod}
            paymentMethod={paymentMethod}
            handleClosePaymentMethodDetail={handleClosePaymentMethodDetail}
          />
        </Modal>
      </TableRow>
    </>
  );
}
