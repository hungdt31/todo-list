import { type ReactNode, useState } from 'react';

import { AuthContext } from '@/contexts/Auth';

// 3. Tạo Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    isLoggedIn,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
