import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import LoginForm from "../components/auth/LoginForm";

function UserPrivateRoutes() {
  const { auth } = useAuth();

  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

export default UserPrivateRoutes;
