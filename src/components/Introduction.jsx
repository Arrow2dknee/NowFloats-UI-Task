import React from "react";
import "../App.css";

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-section__title">
        <p>WELCOME TO</p>
      </div>
      <div className="intro-section__heading">
        <h1>Dixit Healing Chamber</h1>
      </div>
      <div className="intro-section__description">
        <p>
          Homeopathic clinic of Dr. Shravan Dixit is located in Jubilee Hills,
          Hyderabad. The clinic was established in 2006 and is one of the most
          reputed clinic in the vicinity. Guided by a clear vision...
          <a>SEE MORE</a>
        </p>
      </div>
      <div className="intro-section__button">
        <button>Meet the doctor</button>
      </div>
    </section>
  );
};

export default Introduction;
