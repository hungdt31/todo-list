import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/fonts/montserrat';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App';
import { AuthProvider } from '@/contexts/Auth/AuthProvider';
import theme from '@/styles/theme';
import i18n from '@/utils/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
              <App />
            </I18nextProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </AuthProvider>
  </StrictMode>,
);
