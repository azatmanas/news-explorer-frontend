import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import { AppContext } from "../../utils/AppContext";
import "./Header.css";
function Header() {
  const { isLoggedIn, openLoginModal, openRegisterModal } =
    useContext(AppContext);
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">NewsExplore</h1>
        <Navigation
          isLoggedIn={isLoggedIn}
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />
      </div>
    </header>
  );
}

export default Header;
