import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
  error: string | null;
  isCodeSent: boolean;
  requestId: number | null;
  isOtpVerified: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  isCodeSent: false,
  requestId: null,
  isOtpVerified: false,
};

interface SignUpPayload {
  email: string;
  userType: number;
}

interface VerifyOtpPayload {
  email: string;
  code: string;
}

// Async thunk for signup
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
      debugger;
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

// Async thunk for verifying OTP
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
      });
  },
});

export const { setUser, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
