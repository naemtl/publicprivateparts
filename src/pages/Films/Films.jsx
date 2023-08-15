import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";
// import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

import filmsBg from "../../assets/images/films-bg.png";
import ecstaticScreen from "../../assets/images/films-ecstatic.png";
import keyScreen from "../../assets/images/films-key.png";

import "./Films.scss";

const Films = () => {
  const { t } = useTranslation("films");

  return (
    <div className="films">
      <PageBanner background={`url(${filmsBg})`}>{t("heading")}</PageBanner>
      <div className="films__content">
        <div className="films__film-container">
          <div className="films__film-player">
            {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
            <img
              className="films__image"
              alt="Films - Ecstatic Unity"
              src={ecstaticScreen}
            />
          </div>
          <h3 className="films__film-heading">{t("film-1.heading")}</h3>
          <div className="films__film-text">
            <div>{t("film-1.text")}</div>
            <div className="films__credits-container">
              <h5>{t("credits-heading")}</h5>
              <div className="films__credits">{t("film-1.credits")}</div>
            </div>
          </div>
        </div>
        <div className="films__film-container">
          <div className="films__film-player">
            {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
            <img
              className="films__image"
              alt="Films - The Key to Dreams"
              src={keyScreen}
            />
          </div>
          <h3 className="films__film-heading">{t("film-2.heading")}</h3>
          <div className="films__film-text">
            <div>{t("film-2.text")}</div>
            <div className="films__credits-container">
              <h5>{t("credits-heading")}</h5>
              <div className="films__credits">{t("film-2.credits")}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Films;
