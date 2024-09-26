import { BloomFilter } from 'next/dist/shared/lib/bloom-filter';
import { axiosApi } from '../api';

interface PrechecklistInfo {
  isNeedHousingHelp: boolean | null;
  isWithSpouse: boolean | null;
  isWithChildren: boolean | null;
  isWithPets: boolean | null;
  isPlanAdoptingPets: boolean | null;
  insuranceTypeId?: number | null;
  chronicDiseasesId?: number | null;
  vehicleTypeId?: number | null;
  hobbies:
    | {
        id: number;
        name: string;
        description: string;
      }[]
    | null;
}

const PutPrechecklist = async (PrechecklistInfo: PrechecklistInfo) => {
  try {
    const { data } = await axiosApi.put(
      '/diplomat/updatePrechecklist',
      PrechecklistInfo
    );
    return data;
  } catch (error: any) {
    // Si el error es de Axios, manejar con error.response, de lo contrario, usar el mensaje genérico
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message); // Usar `new Error` para seguir las buenas prácticas
  }
};

export default PutPrechecklist;
