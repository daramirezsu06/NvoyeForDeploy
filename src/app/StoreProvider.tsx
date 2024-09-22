'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store'; // Asegúrate de importar el persistor
import React from 'react';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children} {/* Envuelve los hijos con PersistGate */}
      </PersistGate>
    </Provider>
  );
}
