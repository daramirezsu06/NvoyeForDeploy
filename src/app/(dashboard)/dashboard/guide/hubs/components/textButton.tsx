'use client';
import { Button, Collapse, Stack, Typography } from '@mui/material';
import { useState } from 'react';

interface IProps {
  title: string;
  text: string;
}

const TextButton = ({ info }: { info: IProps }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  const previewText =
    info.text.length > 200 ? info.text.substring(0, 200) + '...' : info.text;

  return (
    <Stack
      sx={{
        // minWidth: '450px',
        backgroundColor: '#FFFF',
        borderRadius: 1,
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack sx={{ px: 2, py: 1, borderBottom: '1px solid #E5E5E5' }}>
        {/* //TODO this title should be dynamic */}
        <Typography variant="h6">{info.title}</Typography>
      </Stack>
      <Stack
        sx={{
          px: 2,
          py: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'max-height 0.5s ease',
          overflow: 'hidden',
          maxHeight: expanded ? '1000px' : '200px',
        }}
      >
        <Typography>{expanded ? info.text : `${previewText}...`}</Typography>
        {info.text.length > 200 && (
          <Button
            sx={{ alignSelf: 'end', textTransform: 'none' }}
            variant="text"
            color="primary"
            onClick={toggleExpanded}
          >
            {expanded ? 'Read less' : 'Read more'}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default TextButton;
