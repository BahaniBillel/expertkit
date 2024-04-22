"use client";

import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LiaCopySolid } from "react-icons/lia";
import DetailComp from "../../../components/DetailComp";
import SalesFunnelData from "../../../db/db_sales_funnel";

const SalesFunnel = () => {
  const [copied, setCopied] = useState(false);
  const [groups, setGroups] = useState([]);
  const sectionRefs = useRef({}); // Use an object inside a useRef to hold refs for each section
  const itemRefs = useRef({});
  const navLinksRef = useRef(null); // Ref for the navigation links container

  useEffect(() => {
    const fetchData = async () => {
      const data = await SalesFunnelData();
      setGroups(data);
      // Initialize refs for each group after data is fetched
      data.forEach((group) => {
        sectionRefs.current[group.groupId] = React.createRef();
      });
    };
    fetchData();
  }, []);

  const scrollToSection = (groupId) => {
    const section = sectionRefs.current[groupId].current;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Assuming you set refs for each text you want to copy
  const textRef = useRef(null);

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

  const scrollToNavigationLinks = () => {
    if (navLinksRef.current) {
      navLinksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full relative mx-auto">
      <DetailComp title="Entonnoir de Vente" emoji="✉️" />
      <div className="px-5">
        <div
          ref={navLinksRef}
          className="my-10 mx-auto w-full grid grid-flow-row max-w-xl md:max-w-3xl lg:max-w-5xl overflow-hidden border border-gray-200 rounded-md"
        >
          <div className="row-span-1 bg-amber-300 p-2">
            <h1 className="text-stone-900 md:text-2xl font-semibold px-3">
              Liens Rapides pour prompts de entonnoir de vente ralatif à...
            </h1>
          </div>
          <div className="row-span-8 flex flex-col md:flex-wrap md:max-h-80 gap-4 p-4 bg-white md:text-lg">
            {groups.map((group) => (
              <button
                key={group.groupId}
                onClick={() => scrollToSection(group.groupId)}
                className="px-2 py-4 flex flex-row whitespace-pre items-center h-5 max-h-min hover:underline text-stone-900 rounded font-light"
              >
                {group.groupName}
              </button>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.groupId}>
            <TransitionGroup className="grid grid-flow-row justify-center">
              <h1
                ref={sectionRefs.current[group.groupId]}
                className="md:text-xl font-semibold text-gray-900 mt-5 "
              >
                {group.groupName}
              </h1>
              {group.items.map((item) => (
                <CSSTransition key={item.id} timeout={500} classNames="fade">
                  <div
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl my-5 shadow-md flex flex-col items-center cursor-pointer hover:bg-gray-200 overflow-hidden"
                    onClick={() => scrollToItem(item.id)}
                  >
                    <div className="w-full flex flex-row flex-nowrap items-center justify-between bg-gray-500 p-2 ">
                      <div className="flex flex-grow"></div>
                      <div
                        className="flex flex-row flex-nowrap items-center"
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
                    <div
                      className="p-4"
                      dangerouslySetInnerHTML={{ __html: item.prompt }}
                    />
                  </div>
                </CSSTransition>
              ))}

              <button
                className="mt-4 mb-5 px-4 py-2 max-w-max rounded bg-black text-white font-bold hover:bg-amber-400"
                onClick={scrollToNavigationLinks}
              >
                Back to Top
              </button>
            </TransitionGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFunnel;
