'use server';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload, FullSessionPayload } from './sessionTypes';

const secretKey = process.env.SESSION_SECRET;

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session');
  }
}

export async function createSession(payload: any) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  payload.expiresAt = expiresAt;
  const session = await encrypt(payload);

  cookies().set('session', session, {
    httpOnly: true,
    // secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
  console.log('Sesión creada exitosamente para:');
}

export const deleteSession = async () => {
  cookies().delete('session');
};

export const getSession = async (): Promise<FullSessionPayload | null> => {
  const cookie = cookies().get('session')?.value;
  console.log('Intentando obtener sesión');
  console.log('Cookie:', cookie);

  const session = await decrypt(cookie);
  console.log('Sesión obtenida exitosamente');
  console.log('Sesión:', session);

  return session as FullSessionPayload; // Si no hay datos válidos, retorna null
};
