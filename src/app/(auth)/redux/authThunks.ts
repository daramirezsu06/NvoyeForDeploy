import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SignUpPayload,
  VerifyOtpPayload,
  SetPasswordPayload,
  LoginPayload,
  SendOtpPayload,
} from './authTypes';
import {
  postLogin,
  postSendOtp,
  postSetPassword,
  postSignUp,
  postVerifyOtp,
} from '@/src/utils/api/auth/auth';
import { createSession } from '@/src/lib/session';
import {
  createServerSession,
  logoutServerSession,
} from '@/src/actions/session';
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload: SignUpPayload, { rejectWithValue }) => {
    try {
      return await postSignUp(payload);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (payload: VerifyOtpPayload, { rejectWithValue }) => {
    try {
      return await postVerifyOtp(payload);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (payload: SendOtpPayload, { rejectWithValue }) => {
    try {
      return await postSendOtp(payload);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const setPassword = createAsyncThunk(
  'auth/setPassword',
  async (payload: SetPasswordPayload, { rejectWithValue }) => {
    try {
      return await postSetPassword(payload);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const data = await createServerSession(payload.email, payload.password);
      return { email: data.email };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutServerSession();
      return 'Logged out successfully';
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
