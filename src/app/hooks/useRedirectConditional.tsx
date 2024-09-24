import { useRouter } from 'next/navigation';
import { selectProfile } from '../(dashboard)/redux/profileSlice';
import { selectToken } from '../(auth)/redux/authSlice';
import { useAppSelector } from '@/src/app/state/hooks';

export const useRedirectionProfile = () => {
  const router = useRouter();
  const profile = useAppSelector(selectProfile);
  const token = useAppSelector(selectToken);

  const conditionalRedirect = () => {
    if (!token) {
      router.push('/login');
      return;
    }
    console.log(profile);

    if (!profile) return;

    const {
      firstName,
      lastName,
      email,
      homeCountry,
      assignedCountry,
      languageSkills,
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

    const isProfileIncomplete =
      !firstName ||
      !lastName ||
      !email ||
      !homeCountry ||
      !assignedCountry ||
      !languageSkills ||
      languageSkills.length === 0;

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

    if (isProfileIncomplete) {
      router.push('/profile');
    } else if (isPreChecklistIncomplete) {
      router.push('/pre-checklist');
    } else {
      router.push('/dashboard/guide/home');
    }
  };

  return conditionalRedirect;
};
