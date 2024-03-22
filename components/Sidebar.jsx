"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import localDB from "../app/lib/bulkData"; // Adjust the import path as necessary

function Sidebar() {
  const [dataKeys, setDataKeys] = useState([]);

  useEffect(() => {
    // Directly process localDB data to extract keys and emojis
    const keysWithEmojis = Object.entries(localDB).map(([key, value]) => ({
      key: key,
      emoji: value.emoji || "🔑", // Use a default emoji if none is specified
    }));

    // Optional: Implement any sorting logic here
    setDataKeys(keysWithEmojis);
  }, []);

  return (
    <div className="hidden md:flex flex-col h-screen bg-amber-100 overflow-y-auto p-6">
      <div>
        {dataKeys.map(({ key, emoji }) => (
          <Link
            key={key}
            href={`/course/${key.toLowerCase().replace(/_/g, "-")}`}
          >
            <div className="py-4 px-4 rounded-md bg-amber-200 hover:bg-gray-100 my-4 transition-all duration-150 ease-in-out cursor-pointer">
              {emoji}{" "}
              {key
                .replace(/_/g, " ")
                // Capitalize each word for better readability
                .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

// FIRESTORE LOGIC TO FETCH KEYS FROM COLLECTION

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { db } from "../app/lib/firebase"; // Adjust the import path as necessary
// import localDB from "../app/lib/bulkData";

// function Sidebar() {
//   const [dataKeys, setDataKeys] = useState([]);

//   useEffect(() => {
//     const fetchDataKeys = async () => {
//       const docRef = doc(db, "marketing_prompts_kit_fr", "FR");
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         let keysWithEmojis = Object.keys(data).map((key) => {
//           // Assume each key in your document is an object with at least a 'emoji' field
//           const item = data[key];
//           return {
//             key: key,
//             emoji: item.emoji || "🔑", // Use a default emoji if none is specified
//           };
//         });

//         // Optional: Your sorting logic here

//         setDataKeys(keysWithEmojis);
//       }
//     };

//     fetchDataKeys();
//   }, []);

//   return (
//     <div className="hidden md:flex flex-col h-screen bg-amber-100 overflow-y-auto p-6">
//       <div>
//         {dataKeys.map(({ key, emoji }) => (
//           <div
//             key={key}
//             className="py-2 px-4 rounded-md bg-amber-200 hover:bg-fuchsia-400 my-2 transition-all duration-150 ease-in-out cursor-pointer"
//           >
//             <Link href={`/course/${key.toLowerCase().replace(/_/g, "-")}`}>
//               {emoji}{" "}
//               {key
//                 .replace(/_/g, " ")
//                 // Capitalize each word for better readability
//                 .replace(/(^|\s)\S/g, (l) => l.toUpperCase())}{" "}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
