/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const handleAuth = (data) => {
    setAuth(data);
    const authData = JSON.stringify(data);
    localStorage.setItem("token", authData);
  };

  useEffect(() => {
    const authString = localStorage.getItem("token");
    const authData = JSON.parse(authString);
    setAuth(authData);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth: handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
