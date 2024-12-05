import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usamos localStorage en el cliente
import authSlice from '../(auth)/redux/authSlice';
import prechecklistReducer from '../(pre-checklist)/redux/checkListSlice';
import profileReducer from '../(dashboard)/redux/profileSlice';

// Configuración de persistencia solo en el cliente
const persistConfig = {
  key: 'root',
  storage,
};

// Combina los reductores
const rootReducer = combineReducers({
  auth: authSlice,
  preChecklistanswers: prechecklistReducer,
  profile: profileReducer,
});

// Crea el persistReducer solo para el cliente
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creación de la store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, // Reducer persistido
  });
};

// Crear la store directamente, usando la función makeStore
export const store = makeStore(); // Instancia de la store

// Crear el persistor (esto solo debe hacerse en el cliente)
export const persistor = persistStore(store);

// Inferir tipos
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
