import Prompt from "../../components/Prompt";
import Sidear from "../../components/Sidear";
import React from "react";

const promptsDB = [
  {
    id: 1,
    type: "Copywriting",
    prompt: `Write 5x 200 word Facebook ads that will leverage the social proof and credibility of 
    my [brand/company] to persuade [my ideal customer persona] to try my [service/product] 
    and share their positive experience with their followers. Have a strong call to action at the end to visit my website.`,
  },
  {
    id: 2,
    type: "Copywriting",
    prompt: `Write 2x 200 word Facebook ads that will leverage the social proof and credibility of 
    my [brand/company] to persuade [my ideal customer persona] to try my [service/product] 
    and share their positive experience with their followers. Have a strong call to action at the end to visit my website.`,
  },
];

function Course() {
  return (
    <div className=" ">
      <div className="">
        <div>
          {promptsDB.map((el) => {
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

export default Course;
