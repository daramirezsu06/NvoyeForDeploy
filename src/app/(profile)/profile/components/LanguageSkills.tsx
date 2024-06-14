'use client';
import React, { useState } from 'react';
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
} from '@mui/material';

interface Language {
  language: string;
  proficiency: string;
}

const LanguageSkills: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');

  const allLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
  ];
  const proficiencies = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Fluent',
    'Native Speaker',
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (language && proficiency) {
      setLanguages([...languages, { language, proficiency }]);
      setLanguage('');
      setProficiency('');
      setOpen(false);
    }
  };

  const handleDelete = (index: number) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Language Skills
      </Typography>
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
                onClick={() => handleDelete(index)}
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
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            margin="normal"
            variant="outlined"
          >
            {allLanguages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Select your proficiency"
            value={proficiency}
            onChange={(e) => setProficiency(e.target.value)}
            margin="normal"
            variant="outlined"
          >
            {proficiencies.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button variant="contained" color="primary">
          Back
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default LanguageSkills;
