import { axiosApi } from '../api';

const GetInsuranceTypes = async () => {
  try {
    const { data } = await axiosApi.get('/getInsuranceTypes');
    return data.data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message); // Usar `new Error` para seguir las buenas prácticas
  }
};

export default GetInsuranceTypes;
