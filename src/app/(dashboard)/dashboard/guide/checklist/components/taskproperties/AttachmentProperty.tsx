import { AttachFileOutlined, Delete } from '@mui/icons-material';
import {
  Stack,
  Box,
  Icon,
  Typography,
  Select,
  MenuItem,
  Chip,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import React from 'react';
import { IDocument } from '../../mocks/tasksMocks';

type Props = {
  filesAttached: IDocument[];
  setFilesAttached: (filesAttached: IDocument[]) => void;
};

export default function AttachmentProperty({
  filesAttached,
  setFilesAttached,
}: Props) {
  const handleDeleteFile = (fileName: string) => {
    setFilesAttached(filesAttached.filter((file) => file.name !== fileName));
  };

  const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile: IDocument = {
        name: file.name,
        url: '',
        // Puedes agregar más propiedades de archivo aquí según necesites
      };
      setFilesAttached([...filesAttached, newFile]);
    }
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: 1,
        // height: '55px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          color: 'text.secondary',
          width: '100px',
          minWidth: '100px',
        }}
      >
        <Icon sx={{ width: '24px', height: '24px' }}>
          <AttachFileOutlined />
        </Icon>
        <Typography variant="body2">Attachment</Typography>
      </Box>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 1,
          flex: 1,
          width: '100%',
        }}
      >
        <Button
          component="label"
          size="small"
          startIcon={<AttachFileOutlined />}
          sx={{
            textTransform: 'none',
            color: 'primary.main',
            borderRadius: 2,
          }}
        >
          Attach file
          <input type="file" hidden onChange={handleAddFile} />
        </Button>
        {filesAttached.length > 0 && (
          <Divider orientation="horizontal" flexItem />
        )}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {filesAttached.map((file: IDocument) => (
            <Stack
              key={file.name}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle1">{file.name}</Typography>
              <IconButton
                color="error"
                onClick={() => handleDeleteFile(file.name)}
              >
                <Icon>
                  <Delete />
                </Icon>
              </IconButton>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
