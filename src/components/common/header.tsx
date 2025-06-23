import { styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ToggleTheme from '@/components/common/toggleTheme';
import paths from '@/constants/path';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const ParentDiv = styled('div')(({ theme }) => ({
    color: '#ffff',
    backgroundColor: theme.vars?.palette.info.main,
    padding: '12px 24px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
}));

const LogoLink = styled(RouterLink)((_) => ({
    textDecoration: 'none',
    display: 'inline-flex',
    color: 'inherit',
    '&:hover': {
        opacity: 0.9,
    },
}));

const Logo = styled('div')((_) => ({
    display: 'flex',
    alignItems: 'center',
    '& h1': {
        fontSize: '1.5rem',
        margin: 0,
        fontWeight: 700,
        letterSpacing: '0.5px',
    },
}));

interface NavigationProps {
    isOpen: boolean;
}

// Overlay để làm mờ phía sau menu khi mở trên mobile
const Overlay = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<NavigationProps>(({ isOpen }) => ({
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 5,
}));

// Menu điều hướng cho desktop - luôn hiển thị trong header
const DesktopNavigation = styled('nav')({
    display: 'none', // Mặc định ẩn trên mobile
    alignItems: 'center',
    gap: '20px',
    margin: '0 auto',
    '@media (min-width: 769px)': {
        display: 'flex', // Chỉ hiển thị trên desktop
    },
});

// Menu điều hướng cho mobile - hiển thị tách biệt khi nhấn nút menu
const MobileNavigation = styled('nav', {
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<NavigationProps>(({ isOpen, theme }) => ({
    display: isOpen ? 'flex' : 'none',
    position: 'fixed',
    top: '100px',
    left: '10%',
    right: '10%',
    width: '80%',
    flexDirection: 'column',
    backgroundColor: theme.vars?.palette.info.main,
    padding: '16px',
    margin: 0,
    zIndex: 10,
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    '@media (min-width: 769px)': {
        display: 'none', // Luôn ẩn trên desktop
    },
}));

const NavLink = styled(RouterLink)((_) => ({
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '6px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    '&.active': {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    '@media (max-width: 768px)': {
        width: '100%',
        textAlign: 'center',
        padding: '12px',
        margin: '8px 0',
        fontSize: '16px',
    },
}));

const RightSection = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginLeft: '20px',
});

const MenuButton = styled('button')({
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '8px',
    marginRight: '10px',
    '@media (max-width: 768px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const DesktopContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    '@media (max-width: 768px)': {
        justifyContent: 'flex-end',
    },
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ngăn cuộn trang khi menu mobile đang mở
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <ParentDiv>
                <LogoLink to={paths.HOME}>
                    <Logo>
                        <h1>TaskMaster</h1>
                    </Logo>
                </LogoLink>

                <MenuButton onClick={toggleMenu}>
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </MenuButton>

                <DesktopContainer>
                    {/* Menu điều hướng desktop - chỉ hiển thị trên màn hình lớn */}
                    <DesktopNavigation>
                        <NavLink to={paths.HOME}>Trang chủ</NavLink>
                        <NavLink to={paths.TODO}>Quản lý công việc</NavLink>
                    </DesktopNavigation>

                    <RightSection>
                        <ToggleTheme />
                    </RightSection>
                </DesktopContainer>
            </ParentDiv>

            {/* Overlay để làm mờ phía sau - chỉ hiển thị khi menu mobile mở */}
            <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />

            {/* Menu điều hướng mobile - chỉ hiển thị khi nhấn nút menu trên màn hình nhỏ */}
            <MobileNavigation isOpen={isMenuOpen}>
                <NavLink to={paths.HOME} onClick={() => setIsMenuOpen(false)}>
                    Trang chủ
                </NavLink>
                <NavLink to={paths.TODO} onClick={() => setIsMenuOpen(false)}>
                    Quản lý công việc
                </NavLink>
            </MobileNavigation>
        </>
    );
}
