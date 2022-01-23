import React from 'react';
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./Navmenu.scss";

const Navmenu = ({ menuOpen, toggleMenu }) => {
    return (
        <nav className={`navmenu ${menuOpen ? 'navmenu--open' : ''}`}>
            <div className="navmenu__top">
                {
                    // do not delete this div
                }
            </div>
            <ol className="navmenu__list">
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/">
                        <span className="navmenu__list-item--numeral">01</span>
                        Home
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/odm">
                        <span className="navmenu__list-item--numeral">02</span>
                        Public / Private Parts ou L’Origine du monde
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/bodywork">
                        <span className="navmenu__list-item--numeral">03</span>
                        Somatic Sex Education and Bodywork Sessions
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/interviews">
                        <span className="navmenu__list-item--numeral">04</span>
                        Documentary Interviews
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/about">
                        <span className="navmenu__list-item--numeral">05</span>
                        About
                    </Link>
                </li>
            </ol>
            <div className="navmenu__contact">
                <span>Say hi</span>
                <FaLongArrowAltRight />
                <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
            </div>
        </nav>
    );
};

export default Navmenu;
