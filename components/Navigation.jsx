"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../public/images/logo4.png";
import { IoMdMenu } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/lib/firebase";
import { useRouter } from "next/navigation";
import { signOutFunction } from "../app/lib/auth";
import { COURSE, LOGIN_ROUTE } from "../app/lib/routes";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { PiBooks } from "react-icons/pi";

import Link from "next/link";

function Navigation({ ToggleSidebar }) {
  const [user] = useAuthState(auth);

  return (
    <div
      className="grid grid-cols-4 md:grid-cols-3 justify-between items-center px-4 md:px-28 py-2  
   bg-black text-amber-400  min-w-full    "
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
      justify-end items-center space-x-5 "
      >
        <Link href={COURSE}>
          <li>
            <p className="hidden md:block"> Course</p>
            <PiBooks className="block md:hidden w-8 h-8" />
          </li>
        </Link>
        <li>
          <p className="hidden md:block"> Support</p>
          <MdSupportAgent className="block md:hidden w-8 h-8" />
        </li>
        <li
          className=" overflow-hidden py-1
         px-4 rounded-3xl md:border border-amber-400 cursor-pointer"
        >
          {user ? (
            <button onClick={signOutFunction}>
              <p className="hidden md:block"> Logout</p>
              <BiSolidLogOut className="block md:hidden w-8 h-8" />
            </button>
          ) : (
            <Link href={LOGIN_ROUTE}>
              <p className="hidden md:block">Login</p>
              <BiSolidLogIn className="block md:hidden w-8 h-8" />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
