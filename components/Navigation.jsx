"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/lib/firebase";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { COURSE, LOGIN_ROUTE } from "../app/lib/routes";

import Link from "next/link";

function Navigation() {
  const [showsidebar, setShowsidebar] = React.useState(false);
  const ToggleSidebar = () => {
    console.log("licked");
    setShowsidebar(!showsidebar); // Toggle the state
  };

  const [user] = useAuthState(auth);
  const router = useRouter();
  // useEffect(() => {
  //   // This code now runs on client side only
  //   const userSession = sessionStorage.getItem("user");
  //   console.log({ user });

  //   if (!user && !userSession) {
  //     router.push("/sign-in");
  //   }
  // }, [user, router]);
  return (
    <div
      className="grid grid-cols-4 md:grid-cols-3 justify-between items-center px-4 md:px-28 py-2  
   bg-black text-amber-400  min-w-full fixed  "
    >
      <div className="col-span-2 flex flex-row items-center ">
        <Link href="/">
          <div className="">
            <Image
              src={Logo}
              alt="logo"
              height={80}
              className=" left-0 -top-1/2"
            />
          </div>
        </Link>
        <div className="mx-5 block cursor-pointer">
          <IoMdMenu className="w-8 h-8 " onClick={ToggleSidebar} />
        </div>
      </div>
      <ul
        className="col-span-2 md:col-span-1 flex flex-row 
      justify-end items-center space-x-8 "
      >
        <Link href={COURSE}>
          <li>Courses</li>
        </Link>
        <li>Support</li>
        <li
          className=" overflow-hidden py-1
         px-4 rounded-3xl border border-amber-400 cursor-pointer"
        >
          {user ? (
            <button onClick={signOut}>Logout</button>
          ) : (
            <Link href={LOGIN_ROUTE}>Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
