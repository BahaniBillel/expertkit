import React from "react";
import Link from "next/link";
function Sidear() {
  return (
    <div className="hidden md:flex flex-col h-screen bg-amber-100 overflow-y-auto  p-6">
      <div>return back</div>
      <div>
        <Link href="course/copywriting">copywriting</Link>
        <div>button 2</div>
        <div>button 3</div>
        <div>button 4</div>
        <div>button 5</div>
      </div>
    </div>
  );
}

export default Sidear;
