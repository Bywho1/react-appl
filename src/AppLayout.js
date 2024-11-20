import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout(){
    return(
        <div className="flex">
            <Sidebar />
            <main className="w-3/4 p-8 bg-gray-100 min-h-screen">
              <Outlet/>
            </main>
        
        </div>
    )
}

export default AppLayout;