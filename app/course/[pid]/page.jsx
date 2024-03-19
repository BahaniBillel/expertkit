"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Prompt from "../../../components/Prompt";

const DynamicRoute = ({ params }) => {
  const [content, setContent] = useState([]);
  const [emoji, setEmoji] = useState(""); // State to store the emoji

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "marketing_prompts_kit_fr", "FR");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Decode the URL parameter to its original form
        const category = decodeURIComponent(params.pid).replace(/-/g, " ");

        const matchedKey = Object.keys(data).find(
          (key) => key.toLowerCase() === category.toLowerCase()
        );

        if (matchedKey) {
          const { promptdata, emoji } = data[matchedKey];
          setContent(promptdata); // Set the 'promptdata' array to state for rendering
          setEmoji(emoji); // Store the emoji in state
        } else {
          setContent([]);
          setEmoji(""); // Reset emoji state if no match is found
        }
      } else {
        setContent([]);
        setEmoji(""); // Reset emoji state if document does not exist
      }
    };

    fetchData();
  }, [params.pid]); // Re-fetch when `params.pid` changes

  return (
    <div>
      {emoji && <div>Category Emoji: {emoji}</div>}{" "}
      {/* Optionally display the emoji */}
      {content.length > 0 ? (
        content.map((item) => <Prompt key={item.id} text={item.prompt} />)
      ) : (
        <p>No content found for this category.</p>
      )}
    </div>
  );
};

export default DynamicRoute;
