import React from "react";
import { getDocs, getDoc, doc } from "firebase/firestore";
import Prompt from "../../../components/Prompt";
import { db } from "../../lib/firebase";

async function Copywriting() {
  const docRef = doc(db, "marketing_prompts_kit_fr", "FR");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  const { copywriting } = docSnap.data();
  return (
    <div>
      <div className="">
        <div>
          {copywriting.map((el) => {
            return (
              <div key={el.id}>
                <Prompt text={el.prompt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Copywriting;
