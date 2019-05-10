import React from "react";
import Appointment from "./Appointment";
import Enquiry from "./Enquiry";

const Display = props => {
  let content;

  if (props.value === "enquiry-btn") {
    content = <Enquiry />;
  } else {
    content = <Appointment />;
  }

  return <div>{content}</div>;
};

export default Display;
