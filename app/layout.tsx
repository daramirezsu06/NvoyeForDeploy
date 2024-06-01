import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
       </AppRouterCacheProvider>
      </body>
    </html>
  );
}
