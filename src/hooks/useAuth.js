"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { checkAuth, logout } from "@/services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      checkAuth()
        .then(setUser)
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
