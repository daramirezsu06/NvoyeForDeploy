import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authTypes';
import { login, setPassword, signUp, verifyOtp } from './authThunks';

const initialState: AuthState = {
  user: null,
  error: null,
  isCodeSent: false,
  requestId: null,
  isOtpVerified: false,
  isPasswordCreated: false,
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
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = (action.payload as string) || 'Signup failed';
      })
      .addCase(verifyOtp.pending, (state) => {
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.isOtpVerified = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.error = (action.payload as string) || 'OTP verification failed';
      })
      .addCase(setPassword.fulfilled, (state) => {
        state.isPasswordCreated = true;
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.error = (action.payload as string) || 'Password setting failed';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.meta.arg.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = action.meta.arg.email;
        state.error = (action.payload as string) || 'Login failed';
      });
  },
});

export const { setUser, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
