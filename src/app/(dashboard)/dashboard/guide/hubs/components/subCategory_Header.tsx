import { Chip, Stack, Typography } from '@mui/material';
import Banking from '@/src/icons/subHubs/Banking.svg';
import Image from 'next/image';
import { SubCategoryHubsType } from '../hubs.Types';
import { subHubMocks } from '../mocks/supHubs';

const SubCategory_Header = ({
  infoHeader,
}: {
  infoHeader: SubCategoryHubsType;
}) => {
  const hub = subHubMocks.find((item) => item.title === infoHeader.name);
  const srcImage = hub ? hub.icon : null;

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row-reverse', md: 'row' },
        gap: 3,
        p: 3,
        borderRadius: '16px',
        backgroundColor: '#F5F3F1',
        // flex: 'wrap',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'column' },
          gap: 2,
          flex: 1,
        }}
      >
        <Typography
          variant="h4"
          component={'h1'}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {infoHeader.name && infoHeader.name}
        </Typography>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
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
      {srcImage && (
        <Image
          src={srcImage}
          alt="Finance"
          width={60}
          height={60}
          style={{ width: 'full', height: 'full' }}
        />
      )}
    </Stack>
  );
};

export default SubCategory_Header;
