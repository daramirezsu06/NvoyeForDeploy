import { useRouter } from 'next/navigation';
import { selectProfile } from '../(dashboard)/redux/profileSlice';
import { selectToken } from '../(auth)/redux/authSlice'; // Seleccionamos el token
import { UserData } from '../(dashboard)/redux/profileTypes';
import { useAppSelector } from '@/src/app/state/hooks';
import { useEffect } from 'react';

export const UseRedirectionProfile = () => {
  const router = useRouter();
  const profile = useAppSelector(selectProfile);
  const token = useAppSelector(selectToken); // Obtenemos el token

  const conditionalRedirect = (profile: UserData) => {
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
      router.push('/dashboard/home');
    }
  };

  useEffect(() => {
    // Verifica si el usuario está autenticado antes de intentar redirigir
    if (token && profile) {
      conditionalRedirect(profile);
    } else if (!token) {
      // Si no está autenticado, redirigir al login
      router.push('/login');
    }
  }, [profile, token]);

  return null;
};
