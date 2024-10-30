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
    | null
    | undefined;
}

const PutPrechecklist = async (PrechecklistInfo: PrechecklistInfo) => {
  try {
    const { data } = await axiosApi.put(
      '/diplomat/updatePrechecklist',
      PrechecklistInfo
    );
    return data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(message);
  }
};

export default PutPrechecklist;
