import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { useTheme } from '../context/ThemeContext';

const lightTheme = {
  mode: 'light',
  colors: {
    primaryBlue: '#1da1f2',
    blue: '#29a3ef',
    darkerBlue: '#006dbf',
    green: '#3e8e41',
    red: '#E23D68',
    gray: '#7A7A7A',
    darkGray: '#474747',
    black: '#000',
    white: '#fff',
    background: '#fff',
    surface: '#fff',
    text: '#000',
    textSecondary: '#474747',
    border: '#e6ecf0',
    hover: '#f7f9fa',
  },
};

const darkTheme = {
  mode: 'dark',
  colors: {
    primaryBlue: '#1da1f2',
    blue: '#29a3ef',
    darkerBlue: '#006dbf',
    green: '#3e8e41',
    red: '#E23D68',
    gray: '#8b98a5',
    darkGray: '#71767b',
    black: '#000',
    white: '#fff',
    background: '#15202b',
    surface: '#192734',
    text: '#fff',
    textSecondary: '#8b98a5',
    border: '#38444d',
    hover: '#1c2732',
  },
};

const CustomThemeProvider = ({ children }) => {
  const { theme: themeMode } = useTheme();
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
