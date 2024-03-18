import React from "react";
import Link from "next/link";
function Sidear() {
  return (
    <div className="hidden md:flex flex-col h-screen bg-amber-100 overflow-y-auto  p-6">
      <div>return back</div>
      <div>
        <div>
          <Link href="course/copywriting">copywriting</Link>
        </div>
        <div>
          <Link href="course/paid_ads">Paid Ads</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidear;
