"use client";
import React, { useState } from "react";
import { LiaCopySolid } from "react-icons/lia";

function Prompt({ text }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      {text ? (
        <div
          className="rounded-md bg-amber-100 max-w-3xl my-5 shadow-md 
        flex flex-col overflow-hidden "
        >
          <div className="p-4 ">
            <p className="text-sm">{text}</p>
          </div>
          <div className="text-gray-900 bg-gray-900 justify-self-end ">
            <button onClick={copyText} className=" p-2 text-amber-200">
              {copied ? (
                <p className="text-xs">Copied!</p>
              ) : (
                <LiaCopySolid onClick={copyText} />
              )}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Prompt;
