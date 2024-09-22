import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Checklist, DeviceHub, Home } from '@mui/icons-material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBar
          color="default"
          sx={{
            display: {
              sm: 'none',
            },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <CssBaseline />
        {children}

        <BottomNavigation
          sx={{
            display: {
              sm: 'none',
            },
            //agregado
            position: 'fixed',
            bottom: 0,
            width: '100%',
          }}
        >
          <BottomNavigationAction label="Recents" icon={<Home />} />
          <BottomNavigationAction label="Recents" icon={<DeviceHub />} />
          <BottomNavigationAction label="Recents" icon={<Checklist />} />
        </BottomNavigation>
      </body>
    </html>
  );
}
