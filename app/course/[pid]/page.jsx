"use client";

import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Prompt from "../../../components/Prompt";
import LocalDB from "../../lib/bulkData";
import DetailComp from "../../../components/DetailComp";

const DynamicRoute = ({ params }) => {
  const [data, setData] = useState(null);
  const [key, setKey] = useState("");

  useEffect(() => {
    const categoryTransformed = decodeURIComponent(params.pid)
      .replace(/-/g, "_")
      .toLowerCase();

    const matchedKey = Object.keys(LocalDB).find(
      (key) => key.toLowerCase() === categoryTransformed
    );

    if (matchedKey) {
      const newData = LocalDB[matchedKey];
      setData(newData);
      setKey(
        matchedKey
          .replace(/_/g, " ")
          .replace(/(^|\s)\S/g, (l) => l.toUpperCase())
      );
    } else {
      setData(null);
    }
  }, [params.pid]);

  return (
    <div className="w-full relative">
      {data ? (
        <>
          <DetailComp emoji={data.emoji} title={key} image={data.image} />
          <TransitionGroup className="flex flex-col items-center px-10 my-16">
            {data.promptdata.map((promptItem) => (
              <CSSTransition
                key={promptItem.pid}
                timeout={500}
                classNames="item"
              >
                <div>
                  <h2 className="text-2xl font-semibold ">
                    {promptItem.subTitle}
                  </h2>
                  {promptItem.subData.map((subItem) => (
                    <Prompt
                      key={subItem.id}
                      text={subItem.prompt}
                      type={subItem.type}
                    />
                  ))}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      ) : (
        <CSSTransition timeout={500} classNames="item">
          <p>No content found for this category.</p>
        </CSSTransition>
      )}
    </div>
  );
};

export default DynamicRoute;

// ........FIRESTORE LOGIC TO RETRIEVE DATA
// import React, { useEffect, useState } from "react";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import Prompt from "../../../components/Prompt";
// import LocalDB from "../../lib/bulkData";

// const DynamicRoute = ({ params }) => {
//   const [content, setContent] = useState([]);
//   const [emoji, setEmoji] = useState(""); // State to store the emoji

//   useEffect(() => {
//     const fetchData = async () => {
//       const docRef = doc(db, "marketing_prompts_kit_fr", "FR");

//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         // Decode the URL parameter to its original form
//         const category = decodeURIComponent(params.pid).replace(/-/g, "_");

//         console.log("category :", category, params.pid);
//         console.log("data:", data);
//         const matchedKey = Object.keys(data).find(
//           (key) => key.toLowerCase() === category.toLowerCase()
//         );
//         console.log("matchedKey:", matchedKey);
//         if (matchedKey) {
//           const { promptdata, emoji } = data[matchedKey];
//           setContent(promptdata); // Set the 'promptdata' array to state for rendering
//           console.log("promptdata:", promptdata);
//           setEmoji(emoji); // Store the emoji in state
//         } else {
//           setContent([]);
//           setEmoji(""); // Reset emoji state if no match is found
//         }
//       } else {
//         setContent([]);
//         setEmoji(""); // Reset emoji state if document does not exist
//       }
//     };

//     fetchData();
//   }, [params.pid]); // Re-fetch when `params.pid` changes

//   return (
//     <div>
//       {emoji && <div>Category Emoji: {emoji}</div>}{" "}
//       {/* Optionally display the emoji */}
//       {content.length > 0 ? (
//         content.map((item) => <Prompt key={item.id} text={item.prompt} />)
//       ) : (
//         <p>No content found for this category.</p>
//       )}
//     </div>
//   );
// };

// export default DynamicRoute;
