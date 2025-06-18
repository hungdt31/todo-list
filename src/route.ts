import { HomePage } from '@/pages/Home';
import TodoPage from '@/pages/Todo';
import PublicLayout from '@/layouts/PublicLayout';
import { paths } from '@/constants/path';

export const PublicRoutes = {
    layout: PublicLayout,
    routes: [
        {
            path: paths.HOME,
            element: HomePage,
        },
        {
            path: paths.TODO,
            element: TodoPage,
        },
    ],
};
