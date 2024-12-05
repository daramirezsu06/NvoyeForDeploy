'use client';

import React, { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './state/store'; // Se asume que persistor se exporta desde tu store

export default function PersistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Cambia el estado para indicar que estamos en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>; // Durante SSR, simplemente renderizamos los children sin persistencia.
  }

  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
