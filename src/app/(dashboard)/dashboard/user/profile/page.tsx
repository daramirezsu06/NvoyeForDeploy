'use client';
import IdentityEssentials from '@/src/app/(profile)/profile/components/IdentityEssentials';
import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '@/src/app/theme';
import { IdentitiForm } from './components/ProfileIdentiti';
import ProfileLanguageSkills from './components/ProfileLenguages';
import { AditionalInfo } from './components/AditionalInfo';
import { useAppSelector } from '@/src/app/state/hooks';
import { selectProfile } from '../../../redux/profileSlice';

import GetContries from '@/src/utils/api/profile/getContries';
import GetGenders from '@/src/utils/api/profile/getGenders';
import {
  CityType,
  GenderType,
  ICountryType,
  LanguageType,
  LivelsOptionType,
  MissionInstitutionType,
  RoleType,
  yearsOfExperiencesType,
} from '@/src/utils/api/profile/types/types';
import GetLanguages from '@/src/utils/api/profile/getLanguages';
import GetLevels from '@/src/utils/api/profile/getLevels';
import GetCitiesByCountry from '@/src/utils/api/profile/getCitiesByCountry';
import GetRoles from '@/src/utils/api/profile/getRoles';
import { count } from 'console';
import GetMissionInstitutions from '@/src/utils/api/profile/getMissionInstitutions';
import GetYearsOfExperiences from '@/src/utils/api/profile/getYearsOfExperiences';

export default function Profile() {
  const profile = useAppSelector(selectProfile);
  const [conutries, setConutries] = useState<ICountryType[]>([]);
  const [genders, setGenders] = useState<GenderType[]>([]);
  const [lenguages, setLenguages] = useState<LanguageType[]>([]);
  const [livels, setLivels] = useState<LivelsOptionType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  const [roles, setRoles] = useState<RoleType[]>([]);
  const [missionInstitutions, setMissionInstitutions] = useState<
    MissionInstitutionType[]
  >([]);
  const [yearsOfExperiences, setYearsOfExperiences] = useState<
    yearsOfExperiencesType[]
  >([]);
  const getListToIdetity = async () => {
    const getCountries = await GetContries();
    const getGenders = await GetGenders();
    const getLanguages = await GetLanguages();
    const getLivels = await GetLevels();
    const getCities = await GetCitiesByCountry({
      countryId: profile.assignedCountry.id,
    });
    const getRoles = await GetRoles();
    // const getMissionInstitutions = await GetMissionInstitutions({countryId: profile.assignedCountry.id, cityId: profile.assignedCity.id});
    const getYearsOfExperiences = await GetYearsOfExperiences();
    const countries = getCountries.data;
    const genders = getGenders.data;
    const languages = getLanguages.data;
    const livels = getLivels.data;
    setConutries(countries);
    setGenders(genders);
    setLenguages(languages);
    setLivels(livels);
    setYearsOfExperiences(getYearsOfExperiences.data);
    setCities(getCities.data);
    setRoles(getRoles.data);
    // setMissionInstitutions(getMissionInstitutions.data);
  };

  useEffect(() => {
    getListToIdetity();
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: { xs: 'auto', sm: 'calc(100vh - 64px)' },
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingX: { xs: 1, sm: 5 },
        paddingY: { xs: 1, sm: 2 },
        marginLeft: { xs: '0px', sm: '0px' },
        marginRight: { xs: '0px', sm: '0px' },
        backgroundColor: '#FDFCFB',
      }}
    >
      <Stack sx={{ mb: 8 }}>
        <Stack sx={{ mb: 0, padding: 2 }}>
          <Typography variant="h4">Profile</Typography>
        </Stack>
        <Stack sx={{ gap: 4 }}>
          <Stack
            sx={{
              backgroundColor: theme.custom.paperElevationTwo,
              width: { xs: 'full', sm: '400px', md: '565px' },
              borderRadius: 3,
              p: 4,
            }}
          >
            <IdentitiForm
              profile={profile}
              countriesList={conutries}
              gendersList={genders}
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: theme.custom.paperElevationTwo,
              width: { xs: 'full', sm: '400px', md: '565px' },
              borderRadius: 3,
              p: 4,
            }}
          >
            <ProfileLanguageSkills
              profileData={profile}
              lenguagesList={lenguages}
              livelList={livels}
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: theme.custom.paperElevationTwo,
              width: { xs: 'full', sm: '400px', md: '565px' },
              borderRadius: 3,
              p: 4,
            }}
          >
            <AditionalInfo
              rolesList={roles}
              yearsOfExperiencesList={yearsOfExperiences}
              citesList={cities}
              profileInfo={profile}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
