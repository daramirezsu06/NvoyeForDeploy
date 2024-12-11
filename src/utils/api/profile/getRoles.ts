import { axiosApi } from '../api';

const GetRoles = async () => {
  try {
    const { data } = await axiosApi.get('/getRoles');
    return data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message)); // Usar `new Error` para seguir las buenas prácticas
  }
};

export default GetRoles;
