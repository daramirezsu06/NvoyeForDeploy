import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null; // change the type based on the api response
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
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
    signUp: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { signUp, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
