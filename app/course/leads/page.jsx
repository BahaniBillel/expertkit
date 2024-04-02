"use client";

import React, { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LiaCopySolid } from "react-icons/lia";
import { PiCaretCircleRightLight } from "react-icons/pi";
import DetailComp from "../../../components/DetailComp";

const GenerationLeads = () => {
  const [copied, setCopied] = useState(false);
  // Separate refs for each div due to their unique layouts
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  // Continue for other divs as needed

  // Assuming you set refs for each text you want to copy
  const textRef = useRef(null);

  // In your component render method, assign the ref to the span
  <span ref={textRef}>Text to copy</span>;

  // Adjust the copyText function to use the ref
  const copyText = async (e) => {
    e.stopPropagation();
    try {
      const textToCopy = textRef.current.textContent;
      await navigator.clipboard.writeText(textToCopy);
      // rest of your logic
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const scrollToDiv = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full relative mx-auto">
      <DetailComp title="leads" />

      {/* Navigation links for each div */}
      <div
        className="my-10 mx-auto w-full grid grid-flow-row  max-w-xl md:max-w-3xl lg:max-w-4xl
      overflow-hidden border border-gray-200 rounded-md "
      >
        <div className="row-span-1 bg-gray-300  p-2">
          <h1 className="text-stone-900 text-2xl font-semibold px-3">
            Liens Rapides..
          </h1>
        </div>
        <div className=" row-span-8  flex flex-row flex-wrap max-h-min gap-4 p-4 bg-amber-50">
          <button
            onClick={() => scrollToDiv(div1Ref)}
            className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded text-xl font-light"
          >
            <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
            Prompts Best Seller 1
          </button>
          <button
            onClick={() => scrollToDiv(div2Ref)}
            className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded text-xl font-light"
          >
            <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
            Prompts Best Seller 2
          </button>
          <button
            onClick={() => scrollToDiv(div3Ref)}
            className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded text-xl font-light"
          >
            <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
            Prompts Best Seller 3
          </button>
          <button
            onClick={() => scrollToDiv(div3Ref)}
            className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded text-xl font-light"
          >
            <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
            Prompts Best Seller 3
          </button>

          {/* Repeat for other divs */}
        </div>
      </div>

      <TransitionGroup className="px-10 grid grid-flow-row justify-center">
        {/* Each div has a unique layout, so we manually assign them */}
        <CSSTransition timeout={500} classNames="fade">
          <div
            ref={div1Ref}
            id="div1"
            className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
          >
            <div
              className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
            >
              <h1 className="text-xl font-semibold text-white ">
                Prompt for Copywriting #1
              </h1>
              <div
                className="flex flex-row flex-nowrap items-center  "
                onClick={copyText}
              >
                <LiaCopySolid
                  className="cursor-pointer text-xl font-semibold text-white"
                  title="Copy"
                />
                <p className="text-sm font-light text-white pl-1">copier</p>
              </div>
            </div>
            <span ref={textRef} className="p-4">
              Help me create a Facebook ad that addresses a common [pain point]
              in my industry and provides a solution that my [service/product]
              can offer to [target audience]. billel
            </span>
          </div>
        </CSSTransition>

        {/* More divs with their unique layouts */}
      </TransitionGroup>
    </div>
  );
};

export default GenerationLeads;
