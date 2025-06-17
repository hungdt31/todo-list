import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/fonts/montserrat';
import theme from '@/styles/theme';
import App from '@/App';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </StrictMode>
);
