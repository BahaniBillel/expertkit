import React from "react";
import Image from "next/image";
import RandomeImage from "../public/images/ferrari.jpg";
import Link from "next/link";

function FieldComp({ field, image }) {
  return (
    <div
      className="border rounded-md w-72 h-64 bg-stone-100 overflow-hidden 
    grid grid-rows-5 mr-5 my-5 p-2 shadow-md hover:shadow-lg cursor-pointer"
    >
      <div className="row-span-4 relative rounded-md overflow-hidden ">
        <Image src={image || RandomeImage} alt="/" fill />
      </div>
      <div className=" flex flex-col justify-center row-span-1 text-blue-600 text-sm pl-2">
        <Link href={`/course/${field || service - client}`}>
          Accéder aux prompts de {field}
        </Link>
      </div>
    </div>
  );
}

export default FieldComp;
