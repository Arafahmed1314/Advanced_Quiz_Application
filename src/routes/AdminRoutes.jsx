import { Outlet, Navigate } from "react-router-dom";

import DashBoardHeader from "../admin/dashBoard/DashBoardHeader";
import { useAuth } from "../context/AuthContext";

function AdminRoutes() {
  const { auth } = useAuth();

  if (!auth.user || auth.user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {auth?.user?.role === "admin" && (
        <>
          {" "}
          <DashBoardHeader />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default AdminRoutes;
