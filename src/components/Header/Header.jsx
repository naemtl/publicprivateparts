import { useEffect, useState } from "react";

import LanguageButton from "../LanguageButton/LanguageButton";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navmenu from "./Navmenu/Navmenu";

import { supportedLanguages } from "../../utils/localization";

import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solidBackground, setSolidBackground] = useState(false);

  const changeBackground = () =>
    window.scrollY >= 1 ? setSolidBackground(true) : setSolidBackground(false);

  const displayLanguageButtons = () =>
    Object.keys(supportedLanguages).map((lang) => (
      <LanguageButton
        key={lang}
        supportedLanguages={supportedLanguages}
        language={lang}
      />
    ));

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`header ${
        solidBackground ? "header--black" : "header--transparent"
      }`}
    >
      <div className="header__branding">Gerard X Reyes</div>
      <div className="header__controls">
        {displayLanguageButtons()}
        <HamburgerButton menuOpen={menuOpen} clickCallback={toggleMenu} />
        <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
