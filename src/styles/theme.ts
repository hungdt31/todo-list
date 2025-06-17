import { createTheme } from '@mui/material';

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#00809D',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#03A6A1',
                },
            },
        },
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                // Apply to all HTML elements
                html: {
                    fontFamily:
                        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                },
                body: {
                    fontFamily:
                        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                },
                // You can target any standard HTML element here
                'h1, h2, h3, h4, h5, h6, p, span, div, button': {
                    fontFamily:
                        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                },
            },
        },
    },
});

export default theme;
