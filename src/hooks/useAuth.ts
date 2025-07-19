import { useContext } from 'react';

import { AuthContext } from '@/contexts/Auth';

// 4. Tạo một Custom Hook để dễ dàng sử dụng Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
