'use client';
import { Download, DownloadOutlined, FilterAlt } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

type Props = {};

export default function InvoicesTableQueries({}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        alignSelf: 'stretch',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Search"
          sx={{
            width: '200px',
          }}
        />

        <IconButton>
          <Icon>
            <FilterAlt />
          </Icon>
        </IconButton>
      </Box>

      {/* in this box goes te filters and the download button */}
      {/* desktop version */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        {/* here goes the filter chips depending con filters set */}
        <Chip
          label="Paid"
          onDelete={() => {}}
          variant="outlined"
          color="success"
          size="small"
        ></Chip>
        {/* here goes the download button */}
        <Button variant="contained" sx={{ textTransform: 'none', gap: 1 }}>
          Download <DownloadOutlined />
        </Button>
      </Box>

      {/* mobile version */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'end',
          flex: 1,
        }}
      >
        <IconButton>
          <Icon>
            <Download color="primary" />
          </Icon>
        </IconButton>
      </Box>
    </Box>
  );
}
