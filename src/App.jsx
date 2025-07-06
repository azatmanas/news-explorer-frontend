import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

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
