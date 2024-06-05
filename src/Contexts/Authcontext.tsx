import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  currentUser: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValues = {
  currentUser: null,
  setCurrentUser: () => {},
};
const AuthContext = createContext<AuthContextProps>(defaultValues);

interface AuthcontextProviderProps {
  children: React.ReactNode;
}

function AuthcontextProvider({ children }: AuthcontextProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>({});
  console.log(currentUser);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthcontextProvider;
