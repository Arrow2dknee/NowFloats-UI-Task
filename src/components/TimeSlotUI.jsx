import React, { useState } from "react";
import Display from "./Display";
import "../App.css";

const TimeSlotUI = () => {
  const [displayValue, setDisplayValue] = useState("");

  const displayHandler = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    setDisplayValue(evt.target.className);
  };

  return (
    <div className="time-slot">
      <div className="time-slot__button">
        <a href="#" className="appointment-btn" onClick={displayHandler}>
          Book appointment
        </a>
        <a href="#" className="enquiry-btn" onClick={displayHandler}>
          Have an enquiry?
        </a>
      </div>
      <div className="time-slot__display">
        <Display value={displayValue} />
      </div>
    </div>
  );
};

export default TimeSlotUI;
