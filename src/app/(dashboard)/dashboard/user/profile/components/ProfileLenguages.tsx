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
} from '@mui/material';
import GetLanguages from '@/src/utils/api/profile/getLanguages';
import GetLevels from '@/src/utils/api/profile/getLevels';
import PutStep3 from '@/src/utils/api/profile/putStep3';
import { useAppDispatch } from '@/src/app/state/hooks';
import { setProfile } from '@/src/app/(dashboard)/redux/profileSlice';
import { UserData } from '@/src/app/(dashboard)/redux/profileTypes';

interface Language {
  language: string;
  proficiency: string;
}

const ProfileLanguageSkills: React.FC = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [languageID, setLanguageID] = useState<number | null>(null); // Inicializado como null
  const [proficiencyID, setProficiencyID] = useState<number | null>(null); // Inicializado como null
  const [disableNext, setDisableNext] = useState<boolean>(true);
  const [disableSave, setDisableSave] = useState<boolean>(true);
  const [languagesOptions, setLanguagesOptions] = useState<
    { id: number; name: string }[]
  >([]);
  const [levelsOptions, setLevelsOptions] = useState<
    { id: number; name: string; description: string }[]
  >([]);
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

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, minHeight: 300 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Language Skills
        </Typography>
      </Stack>

      <Typography paragraph>
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
              <Typography variant="body1">{lang.language}</Typography>
              <Typography variant="body1">{lang.proficiency}</Typography>
              <Typography
                variant="body1"
                sx={{ cursor: 'pointer', color: 'red', fontWeight: 'bold' }}
              >
                X
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
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
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            disabled={disableSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileLanguageSkills;
