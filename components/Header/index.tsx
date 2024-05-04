import Navigation from "../Navigation";
import Home from "../Home";
import ContactsPanel from "../ContactsPanel";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative font-mono bg-cover bg-center bg-no-repeat bg-black text-white h-screen w-full">
        <img
          src="../../assets/moto-main.jpg"
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div
          id="nav"
          className="h-10 md:h-[120px] w-full md:p-4 mx-auto z-10 fixed nav"
        >
          <div className="h-10 md:h-[100px] w-full z-10 px-4 py-2 rounded-xl  bg-slate-700">
            <ContactsPanel />
            <Navigation isMenuOpen={isMenuOpen} onClose={toggleMenu} />
          </div>
        </div>
        {!isMenuOpen && (
          <div
            className="fixed z-10 menu-toggle md:hidden flex items-center md:absolute top-0 right-0 mr-4 mt-2"
            onClick={toggleMenu}
          >
            <button id="menuBtn" className="focus:outline-none">
              <FiMenu className="h-6 w-6 ml-2 text-white" />{" "}
            </button>
            {/* Add the Menu icon */}
          </div>
        )}
        <Home />
      </header>
    </>
  );
};

export default Header;
