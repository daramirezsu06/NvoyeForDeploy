import { Chip, Stack, Typography } from '@mui/material';
import Banking from '@/src/icons/subHubs/Banking.svg';
import Image from 'next/image';
import { SubCategoryHubsType } from '../hubs.Types';

const SubCategory_Header = ({
  infoHeader,
}: {
  infoHeader: SubCategoryHubsType;
}) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        p: 3,
        borderRadius: 2,
        backgroundColor: '#F5F3F1',
      }}
    >
      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        <Typography variant="h4" component={'h1'}>
          {infoHeader.name && infoHeader.name}
        </Typography>
        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {infoHeader.tags.map((tag, index) => {
            return (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="filled"
                color="default"
                sx={{ borderRadius: '4px', backgroundColor: '#3D5BA54D' }}
              />
            );
          })}
        </Stack>
      </Stack>
      <Image src={Banking} alt="Finance" width={84} height={84} />
    </Stack>
  );
};

export default SubCategory_Header;
