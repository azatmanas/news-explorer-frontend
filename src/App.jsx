import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { AppContext } from "./utils/AppContext";

import "./App.css";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        openLoginModal: () => setIsLoginModalOpen(true),
        openRegisterModal: () => setIsRegisterModalOpen(true),
        closeModals: () => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(false);
        },
      }}
    >
      <div className="app">
        <Header />
        <Main />
        <Footer />
        {isLoginModalOpen && <LoginModal />}
        {isRegisterModalOpen && <RegisterModal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
