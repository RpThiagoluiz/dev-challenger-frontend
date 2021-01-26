import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@spedy-admin-news:logged");
    return !!isLogged;
  });

  const singIn = (user, pass) => {
    if (user === "user" && pass === "1234") {
      localStorage.setItem("@spedy-admin-news:logged", "true");
      setLogged(true);
    } else {
      alert(`Usuário ou senha inválidos!`);
    }
  };

  const signOut = () => {
    localStorage.removeItem("@spedy-admin-news:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
