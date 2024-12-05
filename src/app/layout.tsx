import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import './globals.css';
import { CssBaseline } from '@mui/material';
import StoreProvider from './StoreProvider'; // Aquí envolvemos con el provider cliente

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {' '}
          {/* StoreProvider contiene lógica cliente */}
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
