import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import LanguageButton from "../LanguageButton/LanguageButton";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navmenu from "./Navmenu/Navmenu";

import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { supportedLanguages } from "../../utils/localization";

import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solidBackground, setSolidBackground] = useState(false);
  const isMobile = useCheckMobileScreen();

  const branding = useMemo(
    () => (isMobile ? "GXR" : "Gerard X Reyes"),
    [isMobile]
  );

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
      <div className="header__branding">
        <Link to="/">{branding}</Link>
      </div>
      <div className="header__controls">
        {displayLanguageButtons()}
        <HamburgerButton menuOpen={menuOpen} clickCallback={toggleMenu} />
        <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
