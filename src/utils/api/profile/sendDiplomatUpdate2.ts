import { axiosApi } from '../api';

const diplomatUpdate2 = async ({ data }: { data: any }) => {
  try {
    const response = await axiosApi.put('/diplomat/updateStep2', data);
    return response.data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message); // Usar `new Error` para seguir las buenas prácticas
  }
};
export default diplomatUpdate2;
