import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import HeaderMain from "./mainHeader";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-Mainbackground_gradint">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className="lg:pl-[393px]">
          <HeaderMain
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
          <main className="pt-6 h-[calc(100vh-89px)] overflow-y-auto pb-[52px]">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
