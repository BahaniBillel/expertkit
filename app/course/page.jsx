"use client";
import React from "react";
import FieldComp from "../../components/FieldComp";
import LocalDB from "../lib/bulkData";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Course() {
  console.log("LocalDB :", LocalDB);
  return (
    <div className="container mx-auto max-w-7xl min-h-screen py-10 ">
      <TransitionGroup className="flex flex-row items-center flex-wrap  content-center justify-center">
        {Object.entries(LocalDB).map(([key, value], index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            {/* Assuming FieldComp accepts props named 'image' and 'field', adjust as necessary */}
            <FieldComp image={value.image} field={key} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Course;
