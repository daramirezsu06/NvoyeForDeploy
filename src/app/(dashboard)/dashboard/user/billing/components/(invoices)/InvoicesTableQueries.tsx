'use client';
import { Download, DownloadOutlined, FilterAlt } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import InvoicesFilters from './InvoicesFilters';
import dayjs, { Dayjs } from 'dayjs';

type Filters = {
  status: string;
  amountFilterValues: [number, number];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  searchText: string;
};
type FilterKeys = keyof Filters;

type Props = {
  handleApplyFilters: (filters: Filters) => void;
};

export default function InvoicesTableQueries({ handleApplyFilters }: Props) {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const handleShowFilters = () => setIsShowFilters(true);
  const handleDontShowFilters = () => setIsShowFilters(false);

  const [filters, setFilters] = useState<Filters>({
    status: '',
    amountFilterValues: [0, 1000],
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
    searchText: '',
  });

  const handleDeleteChip = (key: FilterKeys) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (key === 'amountFilterValues') {
        updatedFilters.amountFilterValues = [0, 1000];
      } else if (key === 'startDate' || key === 'endDate') {
        updatedFilters[key] = null;
      } else {
        updatedFilters[key] = '';
      }
      handleApplyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    handleApplyFilters(newFilters);
    setIsShowFilters(false);
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchText = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchText: newSearchText,
    }));
    handleApplyFilters({ ...filters, searchText: newSearchText });
  };

  const chipColor =
    filters.status === 'Paid'
      ? 'success'
      : filters.status === 'Overdue'
        ? 'warning'
        : filters.status === 'Failed' || filters.status === 'Canceled'
          ? 'error'
          : 'primary';

  const isDefaultAmountFilter =
    JSON.stringify(filters.amountFilterValues) === JSON.stringify([0, 1000]);

  const justity =
    filters.status ||
    filters.startDate ||
    filters.endDate ||
    !isDefaultAmountFilter
      ? 'space-between'
      : 'flex-end';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              mt: 1,
            }}
            value={filters.searchText}
            onChange={handleSearchTextChange}
          />

          <IconButton onClick={handleShowFilters}>
            <Icon>
              <FilterAlt />
            </Icon>
          </IconButton>
          <Modal
            open={isShowFilters}
            onClose={handleDontShowFilters}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <InvoicesFilters
              handleDontShowFilters={handleDontShowFilters}
              handleApplyFilters={applyFilters}
              initialFilters={filters}
            />
          </Modal>
        </Box>

        {/* in this box goes te filters and the download button */}
        {/* desktop version */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: justity,
            flex: 1,
          }}
        >
          {/* here goes the filter chips depending con filters set e.g. */}
          {/* Renderizando los chips según los filtros aplicados */}
          {filters.status && (
            <Chip
              label={` ${filters.status}`}
              onDelete={() => handleDeleteChip('status')}
              variant="outlined"
              color={chipColor}
              size="small"
            />
          )}
          {filters.startDate && (
            <Chip
              label={`Start Date: ${filters.startDate.format('DD-MM-YYYY')}`}
              onDelete={() => handleDeleteChip('startDate')}
              variant="outlined"
              size="small"
              color="primary"
            />
          )}
          {filters.endDate && (
            <Chip
              label={`End Date: ${filters.endDate.format('DD-MM-YYYY')}`}
              onDelete={() => handleDeleteChip('endDate')}
              variant="outlined"
              size="small"
              color="primary"
            />
          )}
          {filters.amountFilterValues &&
            (filters.amountFilterValues[0] !== 0 ||
              filters.amountFilterValues[1] !== 1000) && (
              <Chip
                label={`Amount: €${filters.amountFilterValues[0]} - €${filters.amountFilterValues[1]}`}
                onDelete={() => handleDeleteChip('amountFilterValues')}
                variant="outlined"
                size="small"
                color="warning"
              />
            )}

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
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: '',
          justifyContent: '',
          flex: 1,
          paddingTop: '8px',
        }}
      >
        {filters.status && (
          <Chip
            label={` ${filters.status}`}
            onDelete={() => handleDeleteChip('status')}
            variant="outlined"
            color={chipColor}
            size="small"
            sx={{
              maxWidth: '500px',
            }}
          />
        )}
        {filters.startDate && (
          <Chip
            label={`Start Date: ${filters.startDate.format('DD-MM-YYYY')}`}
            onDelete={() => handleDeleteChip('startDate')}
            variant="outlined"
            size="small"
            color="primary"
            sx={{
              maxWidth: '500px',
            }}
          />
        )}
        {filters.endDate && (
          <Chip
            label={`End Date: ${filters.endDate.format('DD-MM-YYYY')}`}
            onDelete={() => handleDeleteChip('endDate')}
            variant="outlined"
            size="small"
            color="primary"
            sx={{
              maxWidth: '500px',
            }}
          />
        )}
        {filters.amountFilterValues &&
          (filters.amountFilterValues[0] !== 0 ||
            filters.amountFilterValues[1] !== 1000) && (
            <Chip
              label={`Amount: €${filters.amountFilterValues[0]} - €${filters.amountFilterValues[1]}`}
              onDelete={() => handleDeleteChip('amountFilterValues')}
              variant="outlined"
              size="small"
              color="warning"
              sx={{
                maxWidth: '500px',
              }}
            />
          )}
      </Box>
    </Box>
  );
}
