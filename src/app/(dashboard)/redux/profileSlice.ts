import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from './profileThunks';
import { ProfileState } from './profileTypes';
import { RootState } from '../../state/store';
import { logout } from '../../(auth)/redux';

const initialState: ProfileState = {
  userState: {
    userId: 0,
    firstName: '',
    lastName: '',
    gender: {
      id: 0,
      name: '',
    },
    email: '',
    profilePicture: '',
    displayName: null,
    isEmailVerified: false,
    isOfficialEmailVerified: false,
    homeCountry: {
      id: 0,
      code: '',
      flag: '',
      name: '',
      dialingCode: '',
    },
    assignedCountry: {
      id: 0,
      code: '',
      flag: '',
      name: '',
      dialingCode: '',
    },
    assignedCity: null,
    roleId: null,
    yearsOfExperience: null,
    introduction: null,
    vehicleTypeId: null,
    insuranceTypeId: null,
    chronicDiseasesId: null,
    missionInstitutionId: null,
    isWithSpouse: null,
    isWithChildren: null,
    isNeedHousingHelp: null,
    isWithPets: null,
    isPlanAdoptingPets: null,
    hobbies: null,
    createdAt: '',
    updatedAt: null,
    currentOnboardingStep: 0,
    languageSkills: [],
  },
  status: 'idle',
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.userState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Limpia errores previos
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userState = action.payload.data; // Guarda los datos en el estado
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Guarda el mensaje de error
      })
      .addCase(logout.fulfilled, (state) => {
        state.userState = initialState.userState;
        state.status = 'idle';
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setProfile } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile.userState;

export default profileSlice.reducer;
