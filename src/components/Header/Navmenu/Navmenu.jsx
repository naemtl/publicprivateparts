import React from 'react';

import "./Navmenu.scss";

const Navmenu = ({ menuOpen }) => {
    return (
        <nav className={`navmenu ${menuOpen ? 'navmenu--open' : ''}`}>
            <div className="navmenu__top">
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
    );
};

export default Navmenu;
