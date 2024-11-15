import { CategoryOutlined } from '@mui/icons-material';
import {
  Stack,
  Box,
  Icon,
  Typography,
  Chip,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import { ICategoryDetail } from '../../mocks/tasksMocks';
import { backendHubs, IBackendHub } from '@/src/app/mocks/hubsMocks';

interface Props {
  categories: ICategoryDetail[];
  setCategories: (value: ICategoryDetail[]) => void;
}

export default function CategoriesProperty({
  categories,
  setCategories,
}: Props) {
  //TODO bring the hubs -> {{url}}/hubs/getAllHubs
  const [hubs, setHubs] = useState<IBackendHub[]>(backendHubs);

  const handleDeleteCategory = (categoryName: string) => {
    setCategories(
      categories.filter((category) => category.name !== categoryName)
    );
  };

  const handleAddCategory = (hubName: string) => {
    const newCategory: ICategoryDetail = {
      name: hubName,
      description: '',
    };
    setCategories([...categories, newCategory]);
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 1,
        height: '55px',
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
          <CategoryOutlined />
        </Icon>
        <Typography variant="body2">Category</Typography>
      </Box>

      {categories.length === 0 ? (
        <Select
          value=""
          displayEmpty
          onChange={(event) => handleAddCategory(event.target.value as string)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          {hubs.map((hub) => (
            <MenuItem key={hub.name} value={hub.name}>
              {hub.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        categories.map((category) => (
          <Chip
            key={category.name}
            size="small"
            variant="outlined"
            label={category.name}
            onDelete={() => handleDeleteCategory(category.name)}
          />
        ))
      )}
    </Stack>
  );
}
