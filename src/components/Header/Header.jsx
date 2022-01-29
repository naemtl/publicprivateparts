import { useState } from "react";

import LanguageButton from "../LanguageButton/LanguageButton";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navmenu from "./Navmenu/Navmenu";

import { supportedLanguages } from "../../utils/localization";

import './Header.scss'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const displayLanguageButtons = () => (
        Object.keys(supportedLanguages).map((lang) => (
            <LanguageButton supportedLanguages={supportedLanguages} language={lang} />
        ))
    )

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <header className='header'>
            {displayLanguageButtons()}
            <HamburgerButton menuOpen={menuOpen} clickCallback={toggleMenu} />
            <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </header>
    )
};

export default Header;
