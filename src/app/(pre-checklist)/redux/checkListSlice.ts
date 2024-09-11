import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

interface AnswersState {
  typeOfPets: string[] | null;
  wantAdoptingPet: string | null;
  TypeOfInsurance: string | null;
  ChronicConditions: string[] | null;
  typeOfVehicle: string[] | null;
  hepWhenArrive: string | null;
  isMovingWithPartner: string | null;
  hasChildrenMoving: string | null;
  isBringingPets: string | null;
  hasHealthInsurance: string | null;
  hasChronicConditions: string | null;
  isTransportingVehicle: string | null;
  hobbiesAndActivities: string | null;
}

const initialState: AnswersState = {
  hepWhenArrive: null,
  isMovingWithPartner: null,
  hasChildrenMoving: null,
  isBringingPets: null,
  typeOfPets: null,
  wantAdoptingPet: null,
  hasHealthInsurance: null,
  TypeOfInsurance: null,
  hasChronicConditions: null,
  ChronicConditions: null,
  isTransportingVehicle: null,
  typeOfVehicle: null,
  hobbiesAndActivities: null,
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
