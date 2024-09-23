import axios from 'axios';
import { baseURL } from './env';
import { store } from '@/src/app/state/store'; // Usa la tienda que has exportado

export const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener el token del estado de Redux
const getToken = () => {
  const state = store.getState(); // Usa la tienda exportada
  return state.auth.token; // Asegúrate de que esta ruta sea correcta
};

axiosApi.interceptors.request.use(
  (config) => {
    const token = getToken(); // Obtiene el token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
