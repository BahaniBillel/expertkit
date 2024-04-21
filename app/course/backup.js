"use client";

import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LiaCopySolid } from "react-icons/lia";
import { PiCaretCircleRightLight } from "react-icons/pi";
import DetailComp from "../../../components/DetailComp";
import fetchYourGroupsData from "../../../db/email_marketing";

const EmailMarketing = () => {
  const [copied, setCopied] = useState(false);
  const [groups, setGroups] = useState([]); // Assume this is fetched
  const itemRefs = useRef({});

  useEffect(() => {
    // Fetch and set your groups data
    setGroups(fetchYourGroupsData());
  }, []);

  const scrollToItem = (itemId) => {
    if (itemRefs.current[itemId]) {
      itemRefs.current[itemId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // Separate refs for each div due to their unique layouts
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);
  const divRef6 = useRef(null);
  const divRef7 = useRef(null);
  const divRef8 = useRef(null);
  const divRef9 = useRef(null);
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
      <DetailComp title="Service Clients" emoji="✉️" />
      <div className="px-5">
        {/* Navigation links for each div */}
        <div
          className="my-10 mx-auto w-full grid grid-flow-row   max-w-xl md:max-w-3xl lg:max-w-5xl
      overflow-hidden border border-gray-200 rounded-md  "
        >
          <div className="row-span-1 bg-amber-300  p-2">
            <h1 className="text-stone-900 md:text-2xl font-semibold px-3">
              Liens Rapides des prompts pour..
            </h1>
          </div>
          <div className=" row-span-8  flex flex-col md:flex-wrap md:max-h-80 gap-4 p-4 bg-white md:text-lg">
            <button
              onClick={() => scrollToDiv(divRef1)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              l&apos;appui général Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef2)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              rédiger des e-mails de confirmation de commande.
            </button>
            <button
              onClick={() => scrollToDiv(divRef3)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              Confirmation d&apos;expédition Modèles de courriel.
            </button>
            <button
              onClick={() => scrollToDiv(divRef4)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              L&apos;écriture de retour & échange de courriels
            </button>
            <button
              onClick={() => scrollToDiv(divRef5)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              le remboursement Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef6)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;assistance technique.
            </button>
            <button
              onClick={() => scrollToDiv(divRef7)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              la gestion des comptes Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef8)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;enquête de produit.
            </button>
            <button
              onClick={() => scrollToDiv(divRef9)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;enquête de ventes.
            </button>

            {/* Repeat for other divs */}
          </div>
        </div>

        <div className="w-full relative mx-auto">
          {groups.map((group) => (
            <div key={group.groupId}>
              <TransitionGroup className="grid grid-flow-row justify-center">
                <h1 className="md:text-xl font-semibold text-gray-900 mt-5">
                  {group.groupName}
                </h1>
                {group.items.map((item) => (
                  <CSSTransition key={item.id} timeout={500} classNames="fade">
                    <div
                      ref={(el) => (itemRefs.current[item.id] = el)}
                      className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
                      flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
                      onClick={() => scrollToItem(item.id)}
                    >
                      <div
                        className="w-full  flex flex-row flex-nowrap items-center 
                   justify-between bg-gray-500 p-2 "
                      >
                        <div className="flex flex-grow"></div>
                        <div
                          className="flex flex-row flex-nowrap items-center  "
                          onClick={copyText}
                        >
                          <LiaCopySolid
                            className="cursor-pointer text-xl font-semibold text-white"
                            title="Copy"
                          />
                          <p className="text-sm font-light text-white pl-1">
                            copier
                          </p>
                        </div>
                      </div>
                      <span ref={textRef} className="p-4">
                        {item.prompt}
                      </span>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
