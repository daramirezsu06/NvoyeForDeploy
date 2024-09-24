import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

interface AnswersState {
  isNeedHousingHelp: string | null;
  isWithSpouse: string | null;
  isWithChildren: string | null;
  isWithPets: string | null;
  typeOfPets: string[] | null;
  isPlanAdoptingPets: string | null;
  hasHealthInsurance: string | null;
  insuranceTypeId: string | null;
  hasChronicConditions: string | null;
  chronicDiseasesId: string[] | null;
  vehicleTypeId: string[] | null;
  isTransportingVehicle: string | null;
  hobbies: string | null;
}

const initialState: AnswersState = {
  isNeedHousingHelp: null,
  isWithSpouse: null,
  isWithChildren: null,
  isWithPets: null,
  typeOfPets: null,
  isPlanAdoptingPets: null,
  hasHealthInsurance: null,
  insuranceTypeId: null,
  hasChronicConditions: null,
  chronicDiseasesId: null,
  isTransportingVehicle: null,
  vehicleTypeId: null,
  hobbies: null,
};

const prechecklistSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer(
      state,
      action: PayloadAction<{
        name: keyof AnswersState;
        value: string | string[];
      }>
    ) {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const selectAnswers = (state: RootState) => state.preChecklistanswers;

export const { setAnswer } = prechecklistSlice.actions;

export default prechecklistSlice.reducer;
