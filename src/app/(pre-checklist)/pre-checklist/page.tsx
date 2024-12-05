'use client';
import { useEffect, useState } from 'react';
import IntroPage from './components/introPage';
import Housing from './components/Housing';
import PreChecklistCompletion from './components/PreChecklistCompletion';
import { Container, Box } from '@mui/material';
import FamilyCare from './components/FamilyCare';
import Pets from './components/Pets';
import HealthCare from './components/HealthCare';
import Transportation from './components/Transportation';
import GeneralLiving from './components/GeneralLiving';
import GetChronicDiseases from '@/src/utils/api/prechecklist/getChronicDiseases';
import GetInsuranceTypes from '@/src/utils/api/prechecklist/getInsuranceType';
import GetVehicleTypes from '@/src/utils/api/prechecklist/getVehicleTypes';
import GetHobbies from '@/src/utils/api/prechecklist/getHobbies';
import PutPrechecklist from '@/src/utils/api/prechecklist/putPrechecklist';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getProfile } from '../../(dashboard)/redux/profileThunks';
import { chronicDiseasesMock } from './mocks/chronicDiseases.mock';
import { insurancesMock } from './mocks/insurances.mock';
import { vehiclesMock } from './mocks/vehicles.mock';
import { hobbiesMock } from './mocks/hobbies.mock';

export default function PreChecklist() {
  const prechecklist = useAppSelector((state) => state.preChecklistanswers);
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [insuranceTypes, setInsuranceTypes] =
    useState<{ id: number; name: string; description: string }[]>(
      insurancesMock
    );
  const [chronicDiseases, setChronicDiseases] =
    useState<{ id: number; name: string; description: string }[]>(
      chronicDiseasesMock
    );
  const [vehicleTypes, setVehicleTypes] =
    useState<{ id: number; name: string; description: string }[]>(vehiclesMock);
  const [hobbies, setHobbies] =
    useState<{ id: number; name: string; description: string }[]>(hobbiesMock);

  useEffect(() => {
    const fechData = async () => {
      const chronicDiseases = await GetChronicDiseases();
      const insuranceTypes = await GetInsuranceTypes();
      const vehicleTypes = await GetVehicleTypes();
      const hobbies = await GetHobbies();
      console.log(hobbies);

      setInsuranceTypes(insuranceTypes);
      setChronicDiseases(chronicDiseases);
      setVehicleTypes(vehicleTypes);
      setHobbies(hobbies);
    };

    fechData();
  }, []);

  const sentPrechecklist = async () => {
    const {
      isNeedHousingHelp,
      isWithSpouse,
      isWithChildren,
      isWithPets,
      isPlanAdoptingPets,
      insuranceTypeId,
      chronicDiseasesId,
      vehicleTypeId,
      hobbies: hobbyIds,
    } = prechecklist;

    const hobbiesToSend = hobbyIds
      ?.map((id) => hobbies.find((hobby) => hobby.id === id))
      .filter(
        (hobby): hobby is { id: number; name: string; description: string } =>
          hobby !== undefined
      );

    const prechecklisttosent = {
      isNeedHousingHelp,
      isWithSpouse,
      isWithChildren,
      isWithPets,
      isPlanAdoptingPets,
      insuranceTypeId: Array.isArray(insuranceTypeId)
        ? insuranceTypeId[0]
        : insuranceTypeId,
      chronicDiseasesId,
      vehicleTypeId: Array.isArray(vehicleTypeId)
        ? vehicleTypeId[0]
        : vehicleTypeId,
      hobbies: hobbiesToSend,
    };
    console.log(prechecklisttosent);

    const profile = await PutPrechecklist(prechecklisttosent);
    console.log(profile);
  };

  const handleNext = async () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      await sentPrechecklist();
      await dispatch(getProfile());

      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const sections = [
    { component: <IntroPage setStart={handleNext} />, key: 'intro' },
    {
      component: (
        <Housing onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: (
        <FamilyCare onNext={handleNext} onBack={handleBack} step={step} />
      ),
      key: 'housing',
    },
    {
      component: <Pets onNext={handleNext} onBack={handleBack} step={step} />,
      key: 'housing',
    },
    {
      component: (
        <HealthCare
          onNext={handleNext}
          onBack={handleBack}
          step={step}
          insuranceTypes={insuranceTypes}
          chronicDiseases={chronicDiseases}
        />
      ),
      key: 'housing',
    },
    {
      component: (
        <Transportation
          onNext={handleNext}
          onBack={handleBack}
          step={step}
          vehicleTypes={vehicleTypes}
        />
      ),
      key: 'housing',
    },
    {
      component: (
        <GeneralLiving
          onNext={handleNext}
          onBack={handleBack}
          step={step}
          hobbies={hobbies}
        />
      ),
      key: 'housing',
    },
  ];

  return !completed ? (
    <Container
      sx={{
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        paddingLeft: { xs: '0px', sm: '0px' },
        paddingRight: { xs: '0px', sm: '0px' },
      }}
    >
      {!completed && sections[step].component}
    </Container>
  ) : (
    <PreChecklistCompletion />
  );
}
