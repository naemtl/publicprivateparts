import { useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageButton from "../LanguageButton/LanguageButton";

import { supportedLanguages } from "../../utils/localization";

import './Header.scss'

const Header = () => {
    const { t } = useTranslation()

    const [menuOpen, setMenuOpen] = useState(false);

    const displayLanguageButtons = () => (
        Object.keys(supportedLanguages).map((lang) => (
            <LanguageButton supportedLanguages={supportedLanguages} language={lang} />
        ))
    )

    return (
        <header className='header'>
            {displayLanguageButtons()}
            <button className='header__control--open'>Menu</button>
            <nav className="navmenu navmenu--closed">
                <div className="navmenu__top">
                    <div className="navmenu__lang-container">
                        {displayLanguageButtons()}
                    </div>
                    <button className="navmenu__button--exit" aria-label="Menu toggle button">
                        <span className="navmenu__hamburger"></span>
                    </button>
                </div>
                <ol className="navmenu__list">
                    <li className="navmenu__list-item">
                        <a href="en-index.html">
                            <span className="navmenu__list-item--numeral">01</span>
                            Home
                        </a>
                    </li>
                    <li className="navmenu__list-item">
                        <a href="en-odm.html">
                            <span className="navmenu__list-item--numeral">02</span>
                            Public / Private Parts ou L’Origine du monde
                        </a>
                    </li>
                    <li className="navmenu__list-item">
                        <a href="en-bod.html">
                            <span className="navmenu__list-item--numeral">03</span>
                            Somatic Sex Education and Bodywork Sessions
                        </a>
                    </li>
                    <li className="navmenu__list-item">
                        <a href="en-interviews.html">
                            <span className="navmenu__list-item--numeral">04</span>
                            Documentary Interviews
                        </a>
                    </li>
                    <li className="navmenu__list-item">
                        <a href="en-about.html">
                            <span className="navmenu__list-item--numeral">05</span>
                            About
                        </a>
                    </li>
                </ol>
                <div className="navmenu__contact type-ogg-regular-19-italic">
                    Say hi ⟶
                    <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
                </div>
            </nav>
        </header>
    )
};

export default Header;
