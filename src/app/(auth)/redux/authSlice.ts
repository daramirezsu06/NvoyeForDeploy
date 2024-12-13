import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authTypes';
import { login, sendOtp, setPassword, signUp, verifyOtp } from './authThunks';
import { RootState } from '../../state/store';

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  isCodeSent: false,
  requestId: null,
  isOtpVerified: false,
  isPasswordCreated: false,
  isOtpSent: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    authlogout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isCodeSent = false;
      state.requestId = null;
      state.isOtpVerified = false;
      state.isPasswordCreated = false;
      state.isOtpSent = false;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.meta.arg.email;
        state.isCodeSent = true;
        state.requestId = action.payload.requestId;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = (action.payload as string) || 'Signup failed';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.meta.arg.email;
        state.error = null;
        state.token = action.payload.data.token;
        state.user = action.payload.data.email;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = action.meta.arg.email;
        state.error = (action.payload as string) || 'Login failed';
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.isOtpVerified = true;
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.error = (action.payload as string) || 'OTP verification failed';
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.user = action.meta.arg.email;
        state.isOtpSent = true;
        state.error = null;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.user = action.meta.arg.email;
        state.error = (action.payload as string) || 'OTP sent failed';
      })
      .addCase(setPassword.fulfilled, (state) => {
        state.isPasswordCreated = true;
        state.error = null;
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.error = (action.payload as string) || 'Password setting failed';
      });
  },
});

export const { setUser, setError, clearError, authlogout } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
