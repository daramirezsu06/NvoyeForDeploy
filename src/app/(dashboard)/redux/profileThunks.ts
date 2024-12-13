import DeleteLanguageSkills from '@/src/utils/api/profile/deleteLaguageSkill';
import GetProfile from '@/src/utils/api/profile/getprofile';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetProfile(); // Llama a la API
      return data; // Retorna directamente los datos obtenidos
    } catch (error: any) {
      // Manejo del error y envío del mensaje a Redux
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Failed to fetch profile'
      );
    }
  }
);

export const deleteLanguageSkills = createAsyncThunk(
  'profile/deleteLanguageSkills',
  async (playload: number, { rejectWithValue }) => {
    try {
      const data = await DeleteLanguageSkills({ languageSkillId: playload }); // Llama a la API
      return data; // Retorna directamente los datos obtenidos
    } catch (error: any) {
      // Manejo del error y envío del mensaje a Redux
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Failed to fetch profile'
      );
    }
  }
);
