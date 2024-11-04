import { Chip, Stack, Typography } from '@mui/material';
import Finance from '@/src/icons/FinanceIcon.png';
import Image from 'next/image';

const SubCategory_Header = () => {
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
        <Typography variant="h4">Banking</Typography>
        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Chip label="Convenient banking" />
          <Chip label="Easy payments" />
          <Chip label="Atm access" />
        </Stack>
      </Stack>
      <Image src={Finance} alt="Finance" width={48} height={48} />
    </Stack>
  );
};

export default SubCategory_Header;
