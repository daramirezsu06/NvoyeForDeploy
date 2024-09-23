import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Importa combineReducers
import authSlice from '../(auth)/redux/authSlice';
import prechecklistReducer from '../(pre-checklist)/redux/checkListSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from '../(dashboard)/redux/profileSlice';

// Configuración de persistencia
const persistConfig = {
  key: 'root', // clave que se utilizará en el almacenamiento
  storage, // define el almacenamiento a utilizar (localStorage)
};

// Combina los reductores
const rootReducer = combineReducers({
  auth: authSlice,
  preChecklistanswers: prechecklistReducer,
  profile: profileReducer,
});

// Crea un persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Crea el persistor
export const persistor = persistStore(store);

// Inferir el tipo de store
export type AppStore = typeof store;

// Inferir los tipos `RootState` y `AppDispatch` desde la tienda misma
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
