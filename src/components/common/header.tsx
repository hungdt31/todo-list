import { styled } from "@mui/material"
import ToggleTheme from "@/components/common/toggleTheme";

const ParentDiv = styled('div')(({ theme }) => ({
    color: '#ffff',
    backgroundColor: theme.vars?.palette.info.main, // Use .main to access the actual color
    padding: 8,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}));

export default function Header() {
    
    return (
        <ParentDiv>
            <h1>
                TodoList
            </h1>
            <ToggleTheme />
        </ParentDiv>
    );
}