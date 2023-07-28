import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./Navmenu.scss";

const Navmenu = ({ menuOpen, toggleMenu }) => {
  const { t } = useTranslation("header");

  return (
    <nav className={`navmenu ${menuOpen ? "navmenu--open" : ""}`}>
      <div className="navmenu__top">
        {
          // do not delete this div
        }
      </div>
      <ol className="navmenu__list">
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/">
            <span className="navmenu__list-item--numeral">01</span>
            {t("anchors.home")}
          </Link>
        </li>
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/calendar">
            <span className="navmenu__list-item--numeral">02</span>
            {t("anchors.calendar")}
          </Link>
        </li>
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/publicprivateparts">
            <span className="navmenu__list-item--numeral">03</span>
            {t("anchors.publicprivate")}
          </Link>
        </li>
        <ul className="navmenu__list-item navmenu__inner-list">
          <li className="navmenu__list-item">
            <Link onClick={toggleMenu} to="/interviews">
              <span className="navmenu__list-item--numeral">04</span>
              {t("anchors.interviews")}
            </Link>
          </li>
          <li className="navmenu__list-item">
            <Link onClick={toggleMenu} to="/films">
              <span className="navmenu__list-item--numeral">05</span>
              {t("anchors.films")}
            </Link>
          </li>
          <li className="navmenu__list-item">
            <Link onClick={toggleMenu} to="/podcast">
              <span className="navmenu__list-item--numeral">06</span>
              {t("anchors.podcast")}
            </Link>
          </li>
          <li className="navmenu__list-item">
            <Link onClick={toggleMenu} to="/odm">
              <span className="navmenu__list-item--numeral">07</span>
              {t("anchors.odm")}
            </Link>
          </li>
        </ul>
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/principleofpleasure">
            <span className="navmenu__list-item--numeral">08</span>
            {t("anchors.pop")}
          </Link>
        </li>
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/bodywork">
            <span className="navmenu__list-item--numeral">09</span>
            {t("anchors.bodywork")}
          </Link>
        </li>
        <li className="navmenu__list-item">
          <Link onClick={toggleMenu} to="/about">
            <span className="navmenu__list-item--numeral">10</span>
            {t("anchors.about")}
          </Link>
        </li>
      </ol>
      <div className="navmenu__contact">
        <span>{t("anchors.contact")}</span>
        <FaLongArrowAltRight />
        <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
      </div>
    </nav>
  );
};

export default Navmenu;
