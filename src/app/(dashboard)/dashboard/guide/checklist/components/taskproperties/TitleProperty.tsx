import theme from '@/src/app/theme';
import { Save, Edit } from '@mui/icons-material';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Typography,
  Icon,
} from '@mui/material';
import { title } from 'process';
import React from 'react';

type Props = {
  title: string;
  setTitle: (value: string) => void;
  isEditingTitle: boolean;
  setIsEditingTitle: (value: boolean) => void;
};

export default function TitleProperty({
  title,
  setTitle,
  isEditingTitle,
  setIsEditingTitle,
}: Props) {
  const handleEditToggle = () => setIsEditingTitle(!isEditingTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSaveTitle = () => {
    setIsEditingTitle(false);
    //TODO send the change to the backend
  };

  return (
    <Stack
      sx={{
        paddingBottom: 2,
        width: '100%',
        maxWidth: '500px',
        height: '55px',
      }}
    >
      {isEditingTitle ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            value={title}
            onChange={handleTitleChange}
            sx={{
              backgroundColor: theme.custom.paperElevationFour,
              flex: 1,
            }}
          />
          <IconButton onClick={() => setIsEditingTitle(false)}>
            <Save />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" sx={{ flex: 1 }}>
            {title}
          </Typography>
          <IconButton
            onClick={isEditingTitle ? handleSaveTitle : handleEditToggle}
          >
            <Icon>{isEditingTitle ? <Save /> : <Edit />}</Icon>
          </IconButton>
        </Box>
      )}

      {/* <IconButton onClick={handleCloseTaskDetail}>
              <Close />
            </IconButton> */}
    </Stack>
  );
}
