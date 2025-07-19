import { createContext } from 'react';

// 1. Định nghĩa kiểu cho giá trị của Context
interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

// 2. Tạo Context với giá trị mặc định
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
