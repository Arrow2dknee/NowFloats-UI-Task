import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--style">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">More Info</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header__div1">
        <div className="header__icon--style header__phoneIcon">
          <ion-icon name="call" />
          <p>+91 81234567899</p>
        </div>
      </div>
      <div className="header__div2">
        <div className="header__icon--style header__searchIcon">
          <ion-icon name="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
