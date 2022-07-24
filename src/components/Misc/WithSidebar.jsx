import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

function WithSidebar() {
  return (
    <div className="container lg:flex mt-10">
      <div className="lg:w-2/12">
        <Sidebar />
      </div>

      <Outlet />
    </div>
  );
}

export default WithSidebar;
