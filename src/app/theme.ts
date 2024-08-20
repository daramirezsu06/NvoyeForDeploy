'use client';
import { Roboto } from 'next/font/google';
import { createTheme, alpha } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
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
      paperEelevationOne: '#FBFAF8',
      paperElevationThwo: '#FBFAF8',
      paperElevationTree: '#FBFAF8',
    },
    text: {
      primary: alpha('#000000', 0.87),
      secondary: alpha('#000000', 0.68),
      disabled: alpha('#000000', 0.38),
    },
  },
});

export default theme;
