import React from "react";
import Introduction from "./Introduction";
import TimeSlotUI from "./TimeSlotUI";
import "../App.css";

const Main = () => {
  return (
    <main className="main">
      <Introduction />
      <TimeSlotUI />
    </main>
  );
};

export default Main;
