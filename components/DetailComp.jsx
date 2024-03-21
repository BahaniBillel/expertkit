import React from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "next/navigation";

function DetailComp({ emoji, title }) {
  const { pid } = useParams();

  const paths = [
    { name: "The Marketing Expert Kit Prompts", path: "/course" },
    { name: ` ${pid}`, path: `/course/${pid}` },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center min-h-max 
    py-4 px-8 bg-gray-200 min-w-full space-y-5  "
    >
      <div className="flex flex-row whitespace-pre text-5xl">
        {emoji}
        <h1 className="font-semibold text-gray-900">{title}</h1>
      </div>
      <Breadcrumb paths={paths} />
    </div>
  );
}

export default DetailComp;
