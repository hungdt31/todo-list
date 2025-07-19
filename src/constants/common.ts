import paths from '@/constants/path';

export interface NavigationItem {
  path: string;
  label: string;
  id: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    path: paths.HOME,
    label: 'Trang chủ',
  },
  {
    id: 'task',
    path: paths.TASK,
    label: 'Quản lý công việc',
  },
  {
    id: 'journal',
    path: paths.JOURNAL,
    label: 'Nhật ký',
  },
];
