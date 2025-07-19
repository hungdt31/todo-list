import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import withAuth from '@/hocs/withAuth';

/**
 * PrivateLayout provides the standard layout structure for public-facing pages
 * with consistent header, main content area, and footer.
 */

// Tạo component wrapper cho Outlet
const AuthenticatedOutlet = withAuth(() => <Outlet />);

export default function PrivateLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Fixed header */}
      <Header />

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
        <Container maxWidth="xl">
          <AuthenticatedOutlet />
        </Container>
      </Box>

      {/* Fixed footer */}
      <Footer />
    </Box>
  );
};
