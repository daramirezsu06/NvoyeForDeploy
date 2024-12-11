'use client';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Stack,
  IconButton,
} from '@mui/material';
import ProgressWithLabel from './ProgressWithLabel';
import GetLanguages from '@/src/utils/api/profile/getLanguages';
import GetLevels from '@/src/utils/api/profile/getLevels';
import PutStep3 from '@/src/utils/api/profile/putStep3';
import { useAppDispatch } from '@/src/app/state/hooks';
import { setProfile } from '@/src/app/(dashboard)/redux/profileSlice';
import { UserData } from '@/src/app/(dashboard)/redux/profileTypes';
import { levelsMock } from '../mocks/levels.mock';
import { languagesMock } from '../mocks/languages.mock';
import { DeleteForeverOutlined, Edit, EditOutlined } from '@mui/icons-material';

interface Language {
  language: string;
  proficiency: string;
}

const LanguageSkills: React.FC<{
  onNext: () => void;
  onBack: () => void;
  step: number;
}> = ({ onBack, onNext, step }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([
    // { language: 'English', proficiency: 'Beginner' },
    // { language: 'Spanish', proficiency: 'Fluent' },
  ]);
  const [languageID, setLanguageID] = useState<number | null>(null); // Inicializado como null
  const [proficiencyID, setProficiencyID] = useState<number | null>(null); // Inicializado como null
  const [disableNext, setDisableNext] = useState<boolean>(true);
  const [disableSave, setDisableSave] = useState<boolean>(true);
  const [languagesOptions, setLanguagesOptions] =
    useState<{ id: number; name: string }[]>(languagesMock);
  const [levelsOptions, setLevelsOptions] =
    useState<{ id: number; name: string; description: string }[]>(levelsMock);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const languagesData = await GetLanguages();
        const levelsData = await GetLevels();
        setLanguagesOptions(languagesData);
        setLevelsOptions(levelsData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (languages.length > 0) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [languages]);

  useEffect(() => {
    if (languageID && proficiencyID) {
      setDisableSave(false);
    } else {
      setDisableSave(true);
    }
  }, [languageID, proficiencyID]);

  const handleNext = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (languageID && proficiencyID) {
      const newLanguage = { languageId: languageID, levelId: proficiencyID };
      const profileUpdate: UserData = await PutStep3(newLanguage);
      dispatch(setProfile(profileUpdate));
      setLanguages(
        profileUpdate.languageSkills.map((item) => {
          return { language: item.language.name, proficiency: item.level.name };
        })
      );

      setLanguageID(null);
      setProficiencyID(null);
      setOpen(false);
      setDisableSave(true);
    }
  };

  //TODO this function should contact the backend and update the user
  const handleDeleteLanguage = (index: number) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, minHeight: 300 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" gutterBottom component={'h1'}>
          Language skills
        </Typography>
        <ProgressWithLabel value={step} />
      </Stack>

      <Typography paragraph component={'span'}>
        Please indicate the languages you speak and your proficiency level in
        each below.
      </Typography>

      {languages.length > 0 && (
        <Box sx={{ mb: 2 }}>
          {languages.map((lang, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
                borderBottom: '1px solid #ccc',
                paddingBottom: 1,
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Typography variant="body1" component={'span'}>
                  {lang.language}
                </Typography>
                <Typography variant="body1" component={'span'}>
                  {lang.proficiency}
                </Typography>
              </Box>

              {/* //TODO here should be a edit and a delete icon with funtions */}
              <Box>
                {/* <IconButton color="primary">
                  <EditOutlined/>
                </IconButton> */}
                <IconButton
                  color="error"
                  onClick={() => handleDeleteLanguage(index)}
                >
                  <DeleteForeverOutlined />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, textTransform: 'none' }}
        onClick={handleClickOpen}
        disabled={languages.length >= 5}
      >
        + Add a language
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Select a language</DialogTitle>
        <DialogContent>
          <TextField
            select
            fullWidth
            label="Select a language"
            value={languageID}
            onChange={(e) => setLanguageID(+e.target.value)}
            margin="normal"
            variant="outlined"
          >
            {languagesOptions.map((lang) => (
              <MenuItem key={lang.id} value={lang.id}>
                {lang.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Select your proficiency"
            value={proficiencyID}
            onChange={(e) => setProficiencyID(+e.target.value)}
            margin="normal"
            variant="outlined"
          >
            {levelsOptions.map((level) => (
              <MenuItem key={level.id} value={level.id}>
                {level.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            sx={{ textTransform: 'none' }}
          >
            Close
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            disabled={disableSave}
            sx={{ textTransform: 'none' }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="contained"
          onClick={onBack}
          sx={{
            backgroundColor: 'inherit',
            color: 'black',
            width: '100px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'inherit',
              color: 'black',
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          sx={{ width: '100px', textTransform: 'none' }}
          disabled={disableNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default LanguageSkills;
