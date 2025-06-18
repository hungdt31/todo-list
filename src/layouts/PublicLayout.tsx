import Header from '@/components/common/header';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/common/footer';

/**
 * PublicLayout provides the standard layout structure for public-facing pages
 * with consistent header, main content area, and footer.
 */
export default function PublicLayout() {
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
                    <Outlet />
                </Container>
            </Box>

            {/* Fixed footer */}
            <Footer />
        </Box>
    );
}
