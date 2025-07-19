import { useTranslation } from 'react-i18next';
import { Box, Typography, Switch, styled } from '@mui/material';

// Tạo styled component cho language toggle
const LanguageSwitch = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.vars?.palette.primary.main,
    padding: '5px 8px',
    '& .MuiSwitch-root': {
        margin: '0 8px',
    },
    boxShadow: '5px 8px #888888',
}));

// Định nghĩa interface cho props của LanguageLabel
interface LanguageLabelProps {
    active: boolean;
}

// Sử dụng interface đã định nghĩa trong styled component
const LanguageLabel = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'active',
})<LanguageLabelProps>(({ theme, active }) => ({
    fontWeight: active ? 600 : 400,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    fontSize: '0.875rem',
}));

export default function LangSwitcher() {
    const { i18n } = useTranslation();

    // Handle language change through toggle
    const handleLanguageToggle = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newLanguage = event.target.checked ? 'en' : 'vi';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('lng', newLanguage);
    };

    // Fix: double check to correctly identify English language
    const isEnglish = i18n.language === 'en';

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
            }}
        >
            <LanguageSwitch>
                <LanguageLabel active={!isEnglish}>VIE</LanguageLabel>
                <Switch
                    checked={isEnglish}
                    onChange={handleLanguageToggle}
                    size="small"
                />
                <LanguageLabel active={isEnglish}>ENG</LanguageLabel>
            </LanguageSwitch>
        </Box>
    );
}
