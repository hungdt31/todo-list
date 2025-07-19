import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * AuthLayout provides the standard layout structure for authentication pages
 * with consistent header, main content area.
 */
export default function AuthLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Main content area that grows to fill available space */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
