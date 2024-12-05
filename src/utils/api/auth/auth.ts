import axios from 'axios';
import { baseURL } from '@/src/utils/api/env';
import {
  LoginPayload,
  SendOtpPayload,
  SetPasswordPayload,
  SignUpPayload,
  VerifyOtpPayload,
} from '@/src/app/(auth)/redux';

export const postSignUp = async (payload: SignUpPayload) => {
  const response = await axios.post(`${baseURL}/auth/register`, payload);
  return response.data;
};

export const postVerifyOtp = async (payload: VerifyOtpPayload) => {
  const response = await axios.post(`${baseURL}/auth/verifyOTP`, payload);
  return response.data;
};

export const postSendOtp = async (payload: SendOtpPayload) => {
  const response = await axios.post(`${baseURL}/auth/sendOtp`, payload);
  return response.data;
};

export const postSetPassword = async (payload: SetPasswordPayload) => {
  const response = await axios.post(`${baseURL}/auth/setPassword`, payload);
  return response.data;
};

export const postLogin = async (payload: LoginPayload) => {
  const response = await axios.post(`${baseURL}/auth/login`, payload);
  return response.data;
};
