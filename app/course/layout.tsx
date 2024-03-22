"use client";

import React, { useState } from "react";
import { useUser } from "../lib/auth";
import { ReactNode } from "react";
import AuthGuard from "./_authgard/AuthGuard";
import SidebarSM from "../../components/SidebarSM"; // Ensure correct spelling if necessary
import Sidebar from "../../components/Sidebar"; // Ensure correct spelling if necessary
import Navigation from "../../components/Navigation";
import { PiCaretDoubleLeft, PiCaretDoubleRight } from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const user = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarOpenSM, setSidebarOpenSM] = useState(true);
  const pathname = usePathname();
  const findPathname = pathname.includes("/course/");

  if (user === false) return <>Auth loading...</>;
  if (!user) return <AuthGuard />;

  const HandleSideBar = () => {
    setSidebarOpenSM(!sidebarOpenSM);
  };

  return (
    <div className="flex h-screen  container">
      {/* Sidebar container */}

      {!findPathname ? null : (
        <div className="relative hidden md:block">
          {/* Sidebar */}
          <div
            className={`transition-width duration-300 overflow-hidden ${
              sidebarOpen ? "w-96" : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`absolute top-5 -right-16 transform -translate-x-full bg-slate-900 text-amber-500 p-2 
           focus:outline-none z-10 transition-transform duration-300 ${
             !sidebarOpen && "-translate-x-1/2 z-50 "
           }`}
          >
            {sidebarOpen ? <PiCaretDoubleLeft /> : <PiCaretDoubleRight />}
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <Navigation ToggleSidebar={HandleSideBar} />
        <div className="overflow-auto relative">
          <SidebarSM isOpen={sidebarOpenSM} isClicked={HandleSideBar} />

          {children}
        </div>
      </div>
    </div>
  );
}
