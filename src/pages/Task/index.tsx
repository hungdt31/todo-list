import { Box } from '@mui/material';

import Greeting from '@/components/Greeting';
import LangSwitcher from '@/components/LangSwitcher';
import TaskManager from '@/containers/Task';

const TaskPage = () => {
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
      <TaskManager />
    </main>
  );
};

export default TaskPage;
