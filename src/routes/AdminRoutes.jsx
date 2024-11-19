import { Outlet } from "react-router-dom";

import DashBoardHeader from "../admin/dashBoard/DashBoardHeader";

function AdminRoutes() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <DashBoardHeader />
      <Outlet />
    </div>
  );
}

export default AdminRoutes;
