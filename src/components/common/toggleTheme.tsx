import FormControl from '@mui/material/FormControl';
import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    const handleChange = (event: SelectChangeEvent) => {
        setMode(event.target.value as 'system' | 'light' | 'dark');
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small-label">Mode</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={mode}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={"light"}>
                    <Box sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1.5
                    }}>
                        <WbSunnyIcon />
                        <Typography>Light</Typography>
                    </Box>
                </MenuItem>

                <MenuItem value={"dark"}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1.5
                    }}>
                        <DarkModeIcon />
                        <Typography>Dark</Typography>
                    </Box>
                </MenuItem>

                <MenuItem value={"system"}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1.5
                    }}>
                        <SettingsSuggestIcon />
                        <Typography>System</Typography>
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    )
}