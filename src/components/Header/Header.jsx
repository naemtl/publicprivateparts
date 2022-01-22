import { useTranslation } from "react-i18next";

import LanguageButton from "../LanguageButton/LanguageButton";

import { supportedLanguages } from "../../utils/localization";

import './Header.scss'

const Header = () => {
    const { t } = useTranslation()

    const displayLanguageButtons = () => (
        Object.keys(supportedLanguages).map((lang) => (
            <LanguageButton supportedLanguages={supportedLanguages} language={lang} />
        ))
    )

    return (
        <header className='header'>
            {displayLanguageButtons()}
            <button className='header__control--open'>Menu</button>
            <nav class="navmenu navmenu--closed">
                <div class="navmenu__top">
                    <div class="navmenu__lang-container">
                        {displayLanguageButtons()}
                    </div>
                    <div class="navmenu__exit">
                        <svg width="35" height="35" viewBox="0 0 35 35"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd" stroke="#9D8B02">
                                <path d="M0 35 35 0M0 0l35 35"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <ol class="navmenu__list">
                    <li class="navmenu__list-item">
                        <a href="en-index.html">
                            <span class="navmenu__list-item--numeral">01</span>
                            Home
                        </a>
                    </li>
                    <li class="navmenu__list-item">
                        <a href="en-odm.html">
                            <span class="navmenu__list-item--numeral">02</span>
                            Public / Private Parts ou L’Origine du monde
                        </a>
                    </li>
                    <li class="navmenu__list-item">
                        <a href="en-bod.html">
                            <span class="navmenu__list-item--numeral">03</span>
                            Somatic Sex Education and Bodywork Sessions
                        </a>
                    </li>
                    <li class="navmenu__list-item">
                        <a href="en-interviews.html">
                            <span class="navmenu__list-item--numeral">04</span>
                            Documentary Interviews
                        </a>
                    </li>
                    <li class="navmenu__list-item">
                        <a href="en-about.html">
                            <span class="navmenu__list-item--numeral">05</span>
                            About
                        </a>
                    </li>
                </ol>
                <div class="navmenu__contact type-ogg-regular-19-italic">
                    Say hi ⟶
                    <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
                </div>
            </nav>
        </header>
    )
};

export default Header;