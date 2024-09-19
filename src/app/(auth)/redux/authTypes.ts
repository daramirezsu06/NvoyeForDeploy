export interface AuthState {
  user: string | null;
  token: string | null;
  error: string | null;
  isCodeSent: boolean;
  requestId: number | null;
  isOtpVerified: boolean;
  isPasswordCreated: boolean;
  isOtpSent: boolean;
  isLoggedIn: boolean;
}

export interface SignUpPayload {
  email: string;
  userTypeId: number;
}

export interface VerifyOtpPayload {
  email: string;
  code: string;
}

export interface SendOtpPayload {
  email: string;
}

export interface SetPasswordPayload {
  email: string;
  code: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
