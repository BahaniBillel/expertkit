"use client";

import React, { useState } from "react";
import { useUser } from "../lib/auth";
import { ReactNode } from "react";
import AuthGuard from "./_authgard/AuthGuard";
import Sidebar from "../../components/Sidebar"; // Ensure correct spelling if necessary
import Navigation from "../../components/Navigation";
import { PiCaretDoubleLeft, PiCaretDoubleRight } from "react-icons/pi";

export default function Layout({ children }) {
  const user = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (user === false) return <>Auth loading...</>;
  if (!user) return <AuthGuard />;

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar container */}
      <div className="relative">
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

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <Navigation />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}
