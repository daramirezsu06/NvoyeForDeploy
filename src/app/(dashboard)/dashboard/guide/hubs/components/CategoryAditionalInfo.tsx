'use client';
import {
  ArrowOutward,
  FiberManualRecord,
  TextSnippet,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import theme from '@/src/app/theme';
import { FinanceItemhubsType, FinanceType } from '../hubs.Types';

const CategoryAditionalInfo = ({
  financeInfo,
}: {
  financeInfo: FinanceType;
}) => {
  return (
    <Stack
      sx={{
        // minWidth: '752px',
        backgroundColor: '#FFFF',
        borderRadius: '8px',
        border: '1px solid #E5E5E5',
      }}
    >
      <Stack
        sx={{
          px: 2,
          py: 1,
          borderBottom: '1px solid #E5E5E5',
          backgroundColor: theme.custom.paperElevationFour,
        }}
      >
        <Typography variant="h6" component={'h2'}>
          {financeInfo.title}
        </Typography>
      </Stack>
      <List sx={{ p: 2, gap: 2, display: 'flex', flexDirection: 'column' }}>
        {financeInfo.items.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                borderRadius: 1,
                backgroundColor: theme.custom.paperElevationTwo,
                border: '1px solid #E5E5E5',
              }}
            >
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  px: 2,
                  py: '4px',
                }}
              >
                <ListItemText
                  sx={{ flexGrow: 1 }}
                  primary={item.title}
                  secondary={item.secounText}
                />
                <Typography variant="body2" component={'span'}>
                  {item.value}
                </Typography>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default CategoryAditionalInfo;