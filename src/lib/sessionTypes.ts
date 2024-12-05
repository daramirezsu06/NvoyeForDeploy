export interface FullSessionPayload extends SessionPayload {
  iat?: number; // Opcional
  exp?: number; // Opcional
  [key: string]: any; // Si hay campos adicionales no definidos estrictamente
}
export type SessionPayload = {
  token: string;
  email: string;
};
