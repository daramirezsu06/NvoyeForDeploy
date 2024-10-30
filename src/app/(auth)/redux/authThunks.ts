import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SignUpPayload,
  VerifyOtpPayload,
  SetPasswordPayload,
  LoginPayload,
  SendOtpPayload,
} from './authTypes';
import { baseURL } from '@/src/utils/api/env';
import { log } from 'console';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, userTypeId }: SignUpPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userTypeId }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ email, code }: VerifyOtpPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/auth/verifyOTP`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async ({ email }: SendOtpPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/auth/sendOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setPassword = createAsyncThunk(
  'auth/setPassword',
  async (
    { email, code, password }: SetPasswordPayload,
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${baseURL}/auth/setPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
        console.log('el error es', errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log('el error es', error);
      return rejectWithValue(error);
    }
  }
);
