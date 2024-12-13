import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from './profileTypes';
import { getProfile } from './profileThunks';
import { RootState } from '../../state/store';

const initialState: ProfileState = {
  userState: {
    userId: 0,
    firstName: '',
    lastName: '',
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
    logout: (state) => {
      state.userState = initialState.userState;
      state.status = 'idle';
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProfile.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(getProfile.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.userState = action.payload;
  //     })
  //     .addCase(getProfile.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = (action.error.message as string) || 'get profile failed';
  //     });
  // },
});

export const { setProfile, logout } = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile.userState;

export default profileSlice.reducer;
