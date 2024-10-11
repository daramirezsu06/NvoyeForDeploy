import {
  Box,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SidebarItemType } from '../guide/utils/sidevbarGuideList';

export const SidebarItemDesktop = ({
  item,
  isCollapsed,
}: {
  item: SidebarItemType;
  isCollapsed: boolean;
}) => {
  const pathname = usePathname();
  return (
    <ListItem key={item.href} sx={{ padding: 0 }}>
      <Link href={item.href} style={{ width: '100%', textDecoration: 'none' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            alignSelf: 'stretch',
            paddingY: '0px',
            paddingX: '0px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            <IconButton
              color={pathname === item.href ? 'primary' : 'default'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                borderRadius: 0,
              }}
            >
              <Icon
                sx={{
                  paddingX: '10px',
                  paddingY: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  paddingRight: '20px',
                }}
              >
                {item.icon}
              </Icon>
              {!isCollapsed && (
                <ListItemText
                  sx={{
                    display: 'flex',
                    padding: 'var(--borderRadius, 4px) 0px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    flex: '1 0 0',
                  }}
                >
                  <Typography variant="body1">{item.text}</Typography>
                </ListItemText>
              )}
            </IconButton>
          </Box>
        </Box>
      </Link>
    </ListItem>
  );
};
