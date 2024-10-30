import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

export interface AnswersState {
  isNeedHousingHelp: boolean | null;
  isWithSpouse: boolean | null;
  isWithChildren: boolean | null;
  isWithPets: boolean | null;
  typeOfPets: string[] | null;
  isPlanAdoptingPets: boolean | null;
  hasHealthInsurance: boolean | null;
  insuranceTypeId: number | number[] | null;
  hasChronicConditions: boolean | null;
  chronicDiseasesId: number | null;
  vehicleTypeId: number | number[] | null;
  isTransportingVehicle: boolean | null;
  hobbies: number[] | null;
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
        value: boolean | string | number | string[] | number[] | null;
      }>
    ) {
      const { name, value } = action.payload;
      (state[name] as boolean | string | number | string[] | number[] | null) =
        value;
    },

    toggleArrayAnswer(
      state,
      action: PayloadAction<{
        name: keyof AnswersState;
        value: number;
      }>
    ) {
      const { name, value } = action.payload;
      const currentArray = state[name] as number[] | null;

      if (currentArray) {
        if (currentArray.includes(value)) {
          (state[name] as number[]) = currentArray.filter(
            (item) => item !== value
          );
        } else {
          (state[name] as number[]) = [...currentArray, value];
        }
      } else {
        (state[name] as number[]) = [value];
      }
    },
  },
});

export const selectAnswers = (state: RootState) => state.preChecklistanswers;

export const { setAnswer, toggleArrayAnswer } = prechecklistSlice.actions;

export default prechecklistSlice.reducer;
