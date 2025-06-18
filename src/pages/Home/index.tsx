import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    styled,
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TableChartIcon from '@mui/icons-material/TableChart';
import DataArrayIcon from '@mui/icons-material/DataArray';
import paths from '@/constants/path';
import { useNavigate } from 'react-router-dom';

const StyledSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    '&:nth-of-type(odd)': {
        backgroundColor:
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
    },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[10],
    },
}));

const CardIconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3, 0),
    '& svg': {
        fontSize: 60,
        color: theme.palette.primary.main,
    },
}));

const FlexContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
});

const FlexItem = styled(Box)(({ width }: { width: string }) => ({
    flex: 1,
    minWidth: width,
}));

export function HomePage() {
    const navigate = useNavigate();

    return (
        <Box component="main">
            {/* Hero Section */}
            <StyledSection
                sx={{
                    backgroundImage:
                        'linear-gradient(45deg, #00809D 30%, #03A6A1 90%)',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Quản lý công việc hiệu quả
                    </Typography>
                    <Typography variant="h5" component="p" paragraph>
                        Ứng dụng TaskMaster sử dụng các công nghệ hiện đại để
                        mang lại trải nghiệm tốt nhất
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        onClick={() => navigate(paths.TODO)}
                        sx={{
                            mt: 2,
                            backgroundColor: 'white',
                            color: '#00809D',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.9)',
                            },
                        }}
                    >
                        Bắt đầu ngay
                    </Button>
                </Container>
            </StyledSection>

            {/* Technologies Section */}
            <StyledSection>
                <Container>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        align="center"
                        sx={{ mb: 6 }}
                    >
                        Công nghệ hiện đại
                    </Typography>

                    <FlexContainer>
                        {/* OneSignal Card */}
                        <FlexItem width="280px">
                            <FeatureCard>
                                <CardIconWrapper>
                                    <NotificationsActiveIcon />
                                </CardIconWrapper>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        align="center"
                                    >
                                        OneSignal
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        Tích hợp thông báo đẩy mạnh mẽ với
                                        React-OneSignal. Gửi thông báo thời gian
                                        thực về deadline, nhiệm vụ mới và cập
                                        nhật quan trọng đến người dùng trên
                                        nhiều nền tảng.
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        mt: 'auto',
                                        justifyContent: 'center',
                                        pb: 3,
                                    }}
                                >
                                    <Button size="small" color="primary">
                                        Tìm hiểu thêm
                                    </Button>
                                </CardActions>
                            </FeatureCard>
                        </FlexItem>

                        {/* Ag-Grid Card */}
                        <FlexItem width="280px">
                            <FeatureCard>
                                <CardIconWrapper>
                                    <TableChartIcon />
                                </CardIconWrapper>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        align="center"
                                    >
                                        Ag-Grid
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        Hiển thị và quản lý dữ liệu công việc
                                        với bảng tương tác hiệu năng cao.
                                        Ag-Grid cung cấp khả năng lọc, sắp xếp,
                                        nhóm và xuất dữ liệu một cách nhanh
                                        chóng và linh hoạt.
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        mt: 'auto',
                                        justifyContent: 'center',
                                        pb: 3,
                                    }}
                                >
                                    <Button size="small" color="primary">
                                        Tìm hiểu thêm
                                    </Button>
                                </CardActions>
                            </FeatureCard>
                        </FlexItem>

                        {/* MUI Datatables Card */}
                        <FlexItem width="280px">
                            <FeatureCard>
                                <CardIconWrapper>
                                    <DataArrayIcon />
                                </CardIconWrapper>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        align="center"
                                    >
                                        MUI Datatables
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        Trải nghiệm bảng dữ liệu với giao diện
                                        Material Design tinh tế. MUI Datatables
                                        tích hợp hoàn hảo với hệ sinh thái
                                        Material-UI, cho phép tùy chỉnh giao
                                        diện và chức năng dễ dàng.
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        mt: 'auto',
                                        justifyContent: 'center',
                                        pb: 3,
                                    }}
                                >
                                    <Button size="small" color="primary">
                                        Tìm hiểu thêm
                                    </Button>
                                </CardActions>
                            </FeatureCard>
                        </FlexItem>
                    </FlexContainer>
                </Container>
            </StyledSection>

            {/* Features Section */}
            {/* <StyledSection>
                <Container>
                    <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
                        Tính năng nổi bật
                    </Typography>
                    
                    <FlexContainer sx={{ gap: '24px' }}>
                        <FlexItem width="45%">
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Typography variant="h6" gutterBottom>
                                    Thông báo thời gian thực
                                </Typography>
                                <Typography variant="body1">
                                    Nhận thông báo tức thì về các nhiệm vụ quan trọng, deadline sắp đến và cập nhật từ đồng nghiệp thông qua OneSignal.
                                </Typography>
                            </Paper>
                        </FlexItem>
                        <FlexItem width="45%">
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Typography variant="h6" gutterBottom>
                                    Quản lý dữ liệu hiệu quả
                                </Typography>
                                <Typography variant="body1">
                                    Xem, lọc và sắp xếp công việc với Ag-Grid và MUI Datatables. Dễ dàng tìm kiếm và tổ chức các nhiệm vụ theo nhiều tiêu chí khác nhau.
                                </Typography>
                            </Paper>
                        </FlexItem>
                        <FlexItem width="45%">
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Typography variant="h6" gutterBottom>
                                    Xuất dữ liệu đa định dạng
                                </Typography>
                                <Typography variant="body1">
                                    Xuất danh sách công việc sang nhiều định dạng như Excel, CSV và PDF để chia sẻ hoặc lưu trữ thông tin một cách thuận tiện.
                                </Typography>
                            </Paper>
                        </FlexItem>
                        <FlexItem width="45%">
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Typography variant="h6" gutterBottom>
                                    Giao diện tùy biến
                                </Typography>
                                <Typography variant="body1">
                                    Tùy chỉnh giao diện hiển thị dữ liệu theo nhu cầu cá nhân với các tùy chọn về cột, bộ lọc và chế độ hiển thị.
                                </Typography>
                            </Paper>
                        </FlexItem>
                    </FlexContainer>
                </Container>
            </StyledSection> */}
        </Box>
    );
}
