// Layout.js
import { useState } from "react";
import Header from "../Navigation/Header/Header";
import Sidebar from "../Navigation/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
