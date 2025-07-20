import { type ReactNode, useCallback, useState } from 'react';

import { AuthContext } from '@/contexts/Auth';

// 3. Tạo Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const localStorageKey = 'isLoggedIn';
  const getValueFromLocalStorage = () => {
    const isLoggedInFromLS = localStorage.getItem(localStorageKey);
    return isLoggedInFromLS == 'true';
  };
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getValueFromLocalStorage());
  const value = {
    isLoggedIn,
    login: useCallback(() => {
      localStorage.setItem(localStorageKey, 'true');
      setIsLoggedIn(true);
    }, []),
    logout: useCallback(() => {
      localStorage.setItem(localStorageKey, 'false');
      setIsLoggedIn(false);
    }, []),
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
