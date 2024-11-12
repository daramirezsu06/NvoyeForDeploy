'use client';
import {
  ArrowOutward,
  FiberManualRecord,
  TextSnippet,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import theme from '@/src/app/theme';
import { ResourceItemHubsType } from '../hubs.Types';

const ResourceList = ({
  resourceInfo,
}: {
  resourceInfo: ResourceItemHubsType[];
}) => {
  return (
    <Stack
      sx={{
        // minWidth: '752px',
        backgroundColor: '#FFFF',
        borderRadius: 1,
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
        <Typography variant="h6">Resources</Typography>
      </Stack>
      <List sx={{ p: 2, gap: 8, display: 'flex', flexDirection: 'column' }}>
        {resourceInfo.map((resource, index) => {
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
                }}
              >
                <TextSnippetOutlined
                  color="primary"
                  sx={{ width: '24px', height: '24px', flexGrow: 0 }}
                />

                <ListItemText
                  sx={{
                    flexGrow: 1,
                  }}
                  primary={resource.title}
                  secondary={resource.link}
                />

                <Stack sx={{ p: 1 }}>
                  <ArrowOutward
                    color="primary"
                    sx={{ width: '24px', height: '24px', flexGrow: 0 }}
                  />
                </Stack>
              </Stack>
            </ListItem>
          );
        })}

        {/* <ListItem
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
            }}
          >
            <TextSnippetOutlined
              color="primary"
              sx={{ width: '24px', height: '24px', flexGrow: 0 }}
            />

            <ListItemText
              sx={{
                flexGrow: 1,
              }}
              primary="List item"
              secondary="Secondary"
            />

            <Stack sx={{ p: 1 }}>
              <ArrowOutward
                color="primary"
                sx={{ width: '24px', height: '24px', flexGrow: 0 }}
              />
            </Stack>
          </Stack>
        </ListItem> */}
      </List>
    </Stack>
  );
};

export default ResourceList;
