import React from "react";
import Image from "next/image";
import RandomeImage from "../public/images/ferrari.jpg";
import Link from "next/link";

function FieldComp() {
  return (
    <div className="border rounded-md w-72 h-64 bg-stone-100 overflow-hidden grid grid-rows-5 mr-5 my-5">
      <div className="row-span-4 relative">
        <Image src={RandomeImage} alt="/" fill />
      </div>
      <div className=" flex flex-col justify-center row-span-1 text-blue-600 text-sm pl-3">
        <Link href={"/course/service-client"}>
          Access service client prompts
        </Link>
      </div>
    </div>
  );
}

export default FieldComp;
