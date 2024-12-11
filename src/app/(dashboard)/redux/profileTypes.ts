import { CityType } from '@/src/utils/api/profile/types/types';

export interface ProfileState {
  status: string;
  error: string | null;
  userState: UserData;
}

export interface UserData {
  userId: number;
  firstName: string;
  lastName: string;
  gender: {
    id: number;
    name: string;
  };
  email: string;
  profilePicture: string;
  displayName: string | null;
  displayEmail: string | null;
  isEmailVerified: boolean;
  isOfficialEmailVerified: boolean;
  homeCountry: Country;
  assignedCountry: Country;
  assignedCity: CityType | null;
  roleId: number | null;
  yearsOfExperience: number | null;
  introduction: string | null;
  vehicleTypeId: number | null;
  insuranceTypeId: number | null;
  chronicDiseasesId: number | null;
  missionInstitutionId: number | null;
  isWithSpouse: boolean | null;
  isWithChildren: boolean | null;
  isNeedHousingHelp: boolean | null;
  isWithPets: boolean | null;
  isPlanAdoptingPets: boolean | null;
  hobbies: string | null;
  createdAt: string;
  updatedAt: string | null;
  currentOnboardingStep: number;
  languageSkills: LanguageSkill[];
  customRole: string | null;
}

interface Country {
  id: number;
  code: string;
  flag: string;
  name: string;
  dialingCode: string;
}

interface LanguageSkill {
  language: Language;
  level: LanguageLevel;
}

interface Language {
  id: number;
  name: string;
  description: string;
}

interface LanguageLevel {
  id: number;
  name: string;
  description: string;
}
