import TodoBoard from '@/components/todo/board';
import LangSwitcher from '@/components/common/langSwitcher';
import { Box } from '@mui/material';
import Greeting from '@/components/common/greeting';

export default function TodoPage() {
    return (
        <main>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Greeting />
                <LangSwitcher />
            </Box>
            <TodoBoard />
        </main>
    );
}
