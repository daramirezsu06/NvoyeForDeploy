import { useRouter } from 'next/navigation';

import { UserData } from '../(dashboard)/redux/profileTypes';

export const useRedirectionProfile = () => {
  const router = useRouter();

  const conditionalRedirect = (profile: UserData) => {
    const {
      firstName,
      lastName,
      email,
      homeCountry,
      assignedCountry,
      languageSkills,
    } = profile;

    const isProfileIncomplete =
      !firstName ||
      !lastName ||
      !email ||
      !homeCountry?.id ||
      !assignedCountry?.id ||
      !languageSkills ||
      languageSkills.length === 0;

    if (isProfileIncomplete) {
      router.push('/profile');
    } else {
      router.push('/dashboard/guide/home');
    }
  };

  return conditionalRedirect;
};
