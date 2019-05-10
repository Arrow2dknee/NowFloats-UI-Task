import React from "react";

const Enquiry = () => {
  return (
    <div className="enquiry-section">
      <form className="enquiry-section__form">
        <label>
          First Name
          <input
            className="enquiry-section__input"
            type="text"
            placeholder="First name"
            required
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            className="enquiry-section__input"
            type="text"
            placeholder="Last name"
            required
          />
        </label>
        <br />
        <label>
          Email Address
          <input
            className="enquiry-section__input"
            type="email"
            placeholder="Email address"
          />
        </label>
        <br />
        <label>
          Contact Number
          <input
            className="enquiry-section__input"
            type="text"
            placeholder="Mobile number"
          />
        </label>
        <br />
        <button className="enquiry-section__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Enquiry;
