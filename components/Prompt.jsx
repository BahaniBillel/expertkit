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
        <div className="p-4 rounded-md bg-amber-200 max-w-3xl my-5 shadow-md">
          <div>
            <p className="text-sm">{text}</p>
          </div>
          <LiaCopySolid onClick={copyText} />
          <button onClick={copyText}>{copied ? "Copied!" : "Copy"}</button>
        </div>
      ) : null}
    </div>
  );
}

export default Prompt;
