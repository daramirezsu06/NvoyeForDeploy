'use server';
import { getSession, createSession, deleteSession } from '@/src/lib/session';
import { postLogin } from '../utils/api/auth/auth';
import { SessionPayload } from '../lib/sessionTypes';

export const createServerSession = async (email: string, password: string) => {
  console.log('Intentando crear sesión para:', email);
  const data = await postLogin({ email, password });
  await createSession(data);
  console.log('Sesión creada exitosamente para:', email);
  return data;
};

export const getServerSession = async (): Promise<SessionPayload | null> => {
  const response = await getSession();
  console.log('Sesión obtenida exitosamente');
  console.log('Sesión obtenida en getServerSession:', response);

  if (response?.data?.token && response?.data?.email) {
    return {
      token: response.data.token,
      email: response.data.email,
    };
  }

  return null; // Si no se encuentra un token o email, retorna null
};

export const logoutServerSession = async () => {
  console.log('Intentando cerrar sesión');
  await deleteSession();
  console.log('Sesión cerrada exitosamente');
};
