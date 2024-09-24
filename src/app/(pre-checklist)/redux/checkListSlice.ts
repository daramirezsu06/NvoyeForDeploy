import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

interface AnswersState {
  isNeedHousingHelp: boolean | null;
  isWithSpouse: boolean | null;
  isWithChildren: boolean | null;
  isWithPets: boolean | null;
  typeOfPets: string[] | null;
  isPlanAdoptingPets: boolean | null;
  hasHealthInsurance: boolean | null;
  insuranceTypeId: number | number[] | null;
  hasChronicConditions: boolean | null;
  chronicDiseasesId: number | null; // Cambiado a number[] para manejar arrays de números
  vehicleTypeId: number | number[] | null; // Cambiado a number[] para manejar arrays de números
  isTransportingVehicle: boolean | null;
  hobbies: number[] | null; // Cambiado a number[] para manejar arrays de números
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
        value: boolean | string | number | string[] | number[] | null; // Tipo extendido para aceptar múltiples tipos
      }>
    ) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    // Opcional: agregar un método para manejar la adición o eliminación de elementos en arrays (para selección múltiple)
    toggleArrayAnswer(
      state,
      action: PayloadAction<{
        name: keyof AnswersState;
        value: number; // Para manejar selección de múltiples elementos como hobbies, etc.
      }>
    ) {
      const { name, value } = action.payload;
      const currentArray = state[name] as number[] | null;

      if (currentArray) {
        // Si el valor ya está en el array, lo eliminamos, de lo contrario, lo añadimos
        if (currentArray.includes(value)) {
          state[name] = currentArray.filter((item) => item !== value);
        } else {
          state[name] = [...currentArray, value];
        }
      } else {
        state[name] = [value]; // Si no existe un array aún, lo inicializamos con el primer valor
      }
    },
  },
});

export const selectAnswers = (state: RootState) => state.preChecklistanswers;

export const { setAnswer, toggleArrayAnswer } = prechecklistSlice.actions;

export default prechecklistSlice.reducer;
