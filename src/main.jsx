import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import App from './App.jsx';
import './styles.css';

function Root() {
  const dark = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light', primary: { main: dark ? '#A9C5E2' : '#0B2A4A', contrastText: dark ? '#101820' : '#fff' },
      secondary: { main: dark ? '#FF8794' : '#B3263E' },
      background: { default: dark ? '#101820' : '#FAFAF8', paper: dark ? '#192631' : '#F1F1EF' },
      text: { primary: dark ? '#F3F5F6' : '#1B1F24', secondary: dark ? '#BBC4CB' : '#4B5560' }, divider: dark ? '#344451' : '#D6D9DC'
    },
    shape: { borderRadius: 12 },
    typography: { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', h1: { fontWeight: 750, letterSpacing: '-.04em' }, h2: { fontWeight: 720, letterSpacing: '-.025em' }, h3: { fontWeight: 700 } },
    components: {
      MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 650, borderRadius: 12, padding: '9px 17px' } } },
      MuiCard: { styleOverrides: { root: { borderRadius: 12, border: `1px solid ${dark ? '#344451' : '#D6D9DC'}`, boxShadow: '0 2px 8px rgb(11 42 74 / 4%)' } } },
      MuiChip: { styleOverrides: { root: { borderRadius: 12 } } }
    }
  });
  return <ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><Root /></React.StrictMode>);
