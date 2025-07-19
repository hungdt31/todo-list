import type { RouteGroup } from '@route';

import { paths } from '@/constants/path';
import AuthLayout from '@/layouts/AuthLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import PublicLayout from '@/layouts/PublicLayout';
import { HomePage } from '@/pages/Home';
import { JournalPage } from '@/pages/Journal';
import { LoginPage } from '@/pages/Login';
import TaskPage from '@/pages/Task';

export const routes: RouteGroup[] = [
  {
    layout: PublicLayout,
    routes: [
      {
        path: paths.HOME,
        element: HomePage,
      },
    ],
  },
  {
    layout: AuthLayout,
    routes: [
      {
        path: paths.LOGIN,
        element: LoginPage,
      },
    ],
  },
  {
    layout: PrivateLayout,
    routes: [
      {
        path: paths.TASK,
        element: TaskPage,
      },
      {
        path: paths.JOURNAL,
        element: JournalPage,
      },
    ],
  },
];
