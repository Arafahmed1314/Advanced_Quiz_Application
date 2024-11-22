/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const authData = JSON.parse(localStorage.getItem("token"));
    return authData || {};
  });

  useEffect(() => {
    if (auth && Object.keys(auth).length > 0) {
      localStorage.setItem("token", JSON.stringify(auth));
    } else {
      localStorage.removeItem("token");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
