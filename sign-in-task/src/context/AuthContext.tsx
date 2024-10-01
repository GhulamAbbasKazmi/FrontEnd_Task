import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextProps {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Define a type for the props including `children`
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {


  const [user, setUser] = useState<string | null>(localStorage.getItem('user') || null);

  const login = async (username: string, password: string) => {
    const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
    if (response.data) {
      setUser(response.data.username);
      localStorage.setItem('user', response.data.username); // Store user in localStorage for persistence
    } else {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
