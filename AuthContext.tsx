import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  email: string;
  setEmail: (email: string) => void;
}

// Definir el contexto
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Componente AuthProvider que incluye la propiedad `children`
export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
