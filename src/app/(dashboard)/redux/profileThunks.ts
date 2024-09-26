import GetProfile from '@/src/utils/api/profile/getprofile';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfile = createAsyncThunk('profile/getProfile', GetProfile);
