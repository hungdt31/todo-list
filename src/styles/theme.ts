import { createTheme } from '@mui/material';

// Step 1: Extend the palette types with declaration merging
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      header: string;
      sidebar: string;
      taskcard: string;
      bgFooter: string;
      lang: string;
      // Add more custom colors as needed
    };
  }

  interface PaletteOptions {
    custom?: {
      header?: string;
      sidebar?: string;
      taskcard?: string;
      bgFooter?: string;
      lang?: string;
      // Match the structure from above
    };
  }
}

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#00809D',
        },
        info: {
          main: '#008B8B',
        },
        // Step 2: Add your custom variables
        custom: {
          header: '#f5f5f5',
          sidebar: '#ffffff',
          taskcard: '#ffff',
          bgFooter: '#eceff4',
          lang: '#eceff4',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#03A6A1',
        },
        info: {
          main: '#007878',
        },
        // Mirror the same structure in dark mode
        custom: {
          header: '#1e1e1e',
          sidebar: '#121212',
          taskcard: '#000',
          bgFooter: '#2e3440',
          lang: '#efffff',
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
