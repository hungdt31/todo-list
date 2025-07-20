import { Box, Button } from '@mui/material';
import { useContext } from 'react';

import Greeting from '@/components/Greeting';
import LangSwitcher from '@/components/LangSwitcher';
import TaskManager from '@/containers/Task';
import { AuthContext } from '@/contexts/Auth';

const TaskPage = () => {
  const auth = useContext(AuthContext);
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <LangSwitcher />
          <Button
            color='error'
            variant='outlined'
            onClick={() => auth?.logout()}
          >
            Đăng xuất
          </Button>
        </Box>
      </Box>
      <TaskManager />
    </main>
  );
};

export default TaskPage;
