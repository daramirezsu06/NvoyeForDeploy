import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SignUpPayload,
  VerifyOtpPayload,
  SetPasswordPayload,
  LoginPayload,
  SendOtpPayload,
} from './authTypes';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, userType }: SignUpPayload, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userType }),
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
      const response = await fetch('http://localhost:8000/auth/verifyOTP', {
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
      const response = await fetch('http://localhost:8000/auth/sendOtp', {
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
      const response = await fetch('http://localhost:8000/auth/setPassword', {
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
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
