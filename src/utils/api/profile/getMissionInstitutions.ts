import { axiosApi } from '../api';

const GetMissionInstitutions = async ({
  countryId,
  cityId,
}: {
  countryId: number;
  cityId: number;
}) => {
  try {
    const { data } = await axiosApi.get(
      `/getMissionInstitutions?countryId=${countryId}&cityId=${cityId}`
    );
    return data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message)); // Usar `new Error` para seguir las buenas prácticas
  }
};

export default GetMissionInstitutions;
