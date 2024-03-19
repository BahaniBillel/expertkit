"use client";

import { useUser } from "../lib/auth";
import { ReactNode } from "react";
import AuthGuard from "./_authgard/AuthGuard";
import Sidear from "../../components/Sidear";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useUser();

  if (user === false) return <>Auth loading...</>;
  if (!user) return <AuthGuard />;
  return (
    <div className="grid grid-cols-8 h-screen pt-[96px]">
      <div className="col-span-2">
        <Sidear />
      </div>
      <div className="col-span-6 border flex flex-col items-center p-6">
        {children}
      </div>
    </div>
  );
}
