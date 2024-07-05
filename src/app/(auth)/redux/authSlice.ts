import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null; // change the type based on the api response
  error: string | null;
  isCodeSent: boolean;
  requestId: number | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
  isCodeSent: false,
  requestId: null,
};

interface SignUpPayload {
  email: string;
  userType: number;
}

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
        state.error = action.payload as string;
      });
  },
});

export const { setUser, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
