import React from "react";
import backgroundImage from "./assets/background.svg";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <div className="header__nav">
        <button className="">Home</button>
        <button className="">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
