import { axiosApi } from '../api';

interface addLanguage {
  languageId: number;
  levelId: number;
}

const PutStep3 = async (newLanguage: addLanguage) => {
  try {
    const { data } = await axiosApi.put('/diplomat/updateStep3', newLanguage);
    return data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message); // Usar `new Error` para seguir las buenas prácticas
  }
};

export default PutStep3;
