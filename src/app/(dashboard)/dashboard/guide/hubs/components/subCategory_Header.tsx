import { Chip, Stack, Typography } from '@mui/material';
import Finance from '@/src/icons/FinanceIcon.png';
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
      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h4">
          {infoHeader.name && infoHeader.name}
        </Typography>
        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {infoHeader.tags.map((tag, index) => {
            return <Chip key={index} label={tag} />;
          })}
        </Stack>
      </Stack>
      <Image src={Finance} alt="Finance" width={48} height={48} />
    </Stack>
  );
};

export default SubCategory_Header;
