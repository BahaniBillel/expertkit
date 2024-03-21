"use client";
import React from "react";
import { db } from "../app/lib/firebase";
import { writeBatch, doc } from "firebase/firestore"; // Removed collection since it's not needed for this approach
import bulkData from "../app/lib/bulkData";

function DataUploader() {
  const uploadData = async () => {
    // Creating a reference directly to the "FR" document in the "test-upload" collection
    const frDocRef = doc(db, "marketing_prompts_kit_fr", "FR");

    const batch = writeBatch(db);

    // Since you're updating the "FR" document, there's no need to loop over each entry
    // for a separate document. You're setting/updating the "FR" document with bulkData.
    batch.set(frDocRef, bulkData, { merge: true }); // Using { merge: true } to not overwrite other data in the document accidentally

    try {
      await batch.commit();
      alert("Data successfully uploaded!");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data. Check the console for more information.");
    }
  };

  return (
    <div>
      <button onClick={uploadData}>Upload Data</button>
    </div>
  );
}

export default DataUploader;
