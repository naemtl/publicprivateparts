import React from "react"
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";

import './Podcast.scss'

const Podcast = () => {
  const { t } = useTranslation("podcast")

  return (
    <div className="podcast">
      <div className="podcast__banner"></div>
      <div className="podcast__intro-container">
        <div className="podcast__intro-heading">
          {t("heading")}
        </div>
        <div className="podcast__intro-text">
          {t("intro")}
        </div>
      </div>
      <div className="podcast__content">
        <div className="podcast__episode-container">
          <div className="podcast__episode-player"></div>
          <div className="podcast__episode-heading">
            {t("episode-1.heading")}
          </div>
          <div className="podcast__episode-text">
            {t("episode-1.text")}
          </div>
        </div>
        <div className="podcast__episode-container">
          <div className="podcast__episode-player"></div>
          <div className="podcast__episode-heading">
            {t("episode-2.heading")}
          </div>
          <div className="podcast__episode-text">
            {t("episode-2.text")}
          </div>
        </div>
        <div className="podcast__episode-container">
          <div className="podcast__episode-player"></div>
          <div className="podcast__episode-heading">
            {t("episode-3.heading")}
          </div>
          <div className="podcast__episode-text">
            {t("episode-3.text")}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Podcast