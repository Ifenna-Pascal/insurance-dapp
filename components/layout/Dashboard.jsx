import React, { useContext } from "react";
import { ToggleContext } from "../context/Toggle";
import RightBar from "../dashboard/RightBar";
import Sidebar from "../dashboard/Sidebar";

function Dashboard({ children }) {
  const { expand } = useContext(ToggleContext);
  return (
    <div className="bg-tetiary relative overflow-hidden w-full h-screen">
      <Sidebar />
      <main className="p-6 h-full ml-[120px]">
        <div className="bg-secondary p-12  h-full rounded-2xl shadow-xl">
          {children}
        </div>
      </main>
      <RightBar expand={expand} />
    </div>
  );
}

export default Dashboard;
