import React from "react"
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";

import './Films.scss'

const Films = () => {
  const { t } = useTranslation("films")

  return (
    <div className="films">
      <div className="films__content">
        <div className="films__banner">
          <img src="https://placehold.co/1440x830" alt="Placeholder" />
        </div>
        <div className="films__intro-container">
          <h1 className="films__intro-heading">
            {t("heading")}
          </h1>
        </div>
        <div className="films__film-container">
          <div className="films__film-player">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <h3 className="films__film-heading">
            {t("film-1.heading")}
          </h3>
          <div className="films__film-text">
            {t("film-1.text")}
          </div>
        </div>
        <div className="films__film-container">
          <div className="films__film-player">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <h3 className="films__film-heading">
            {t("film-2.heading")}
          </h3>
          <div className="films__film-text">
            {t("film-2.text")}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Films