import { Trans, withTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
function Greeting() {
    return (
        <Typography
            variant="h4"
            sx={{
                fontWeight: 600,
                background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.info.main} 90%)`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                mb: 1,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '15%',
                    height: '4px',
                    bottom: '-4px',
                    left: '0',
                    backgroundColor: (theme) => theme.palette.info.main,
                    borderRadius: '2px',
                },
                letterSpacing: '0.5px',
                textShadow: '1px 1px 1px rgba(0,0,0,0.1)',
            }}
        >
            <Trans
                i18nKey="welcome"
                values={{ name: 'Dr. Michelin' }}
                components={{
                    1: (
                        <span
                            style={{
                                fontWeight: 700,
                                fontStyle: 'italic',
                                color: 'inherit',
                            }}
                        />
                    ),
                }}
            />
        </Typography>
    );
}

export default withTranslation()(Greeting);
