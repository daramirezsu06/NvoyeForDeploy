'use client';
import { Outfit } from 'next/font/google';
import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      paperElevationOne: string;
      paperElevationTwo: string;
      paperElevationThree: string;
      paperElevationFour: string;
    };
  }
  // Permite configurar `custom` al crear un nuevo tema
  interface ThemeOptions {
    custom?: {
      paperElevationOne?: string;
      paperElevationTwo?: string;
      paperElevationThree?: string;
      paperElevationFour?: string;
    };
  }
}

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#3D5BA5',
    },
    secondary: {
      main: '#F7910B',
    },
    error: {
      main: '#B50B0B',
    },
    warning: {
      main: '#EF6C00',
    },
    info: {
      main: '#4B5A80',
    },
    success: {
      main: '#005B00',
    },
    background: {
      default: '#FDFCFB',
      paper: '#FDFCFB',
    },
    text: {
      primary: alpha('#000000', 0.87),
      secondary: alpha('#000000', 0.68),
      disabled: alpha('#000000', 0.38),
    },
  },
  custom: {
    paperElevationOne: '#FBFAF8',
    paperElevationTwo: '#F7F6F5',
    paperElevationThree: '#F5F3F1',
    paperElevationFour: '#F2F0ED',
  },
});

export default theme;
