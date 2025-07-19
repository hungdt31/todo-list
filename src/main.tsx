import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/fonts/montserrat';
import theme from '@/styles/theme';
import App from '@/App';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from '@/utils/i18n';
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
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
    </StrictMode>,
);
