import { selectProfile } from '../(dashboard)/redux/profileSlice';
import { useAppSelector } from '@/src/app/state/hooks';

export const useVerifyPrechecklist = () => {
  const profile = useAppSelector(selectProfile);

  const {
    isNeedHousingHelp,
    isWithSpouse,
    isWithChildren,
    isWithPets,
    isPlanAdoptingPets,
    insuranceTypeId,
    chronicDiseasesId,
    vehicleTypeId,
    hobbies,
  } = profile;

  const isPreChecklistIncomplete =
    isNeedHousingHelp === null ||
    isWithSpouse === null ||
    isWithChildren === null ||
    isWithPets === null ||
    isPlanAdoptingPets === null ||
    insuranceTypeId === null ||
    chronicDiseasesId === null ||
    vehicleTypeId === null ||
    !hobbies;

  return isPreChecklistIncomplete;
};
