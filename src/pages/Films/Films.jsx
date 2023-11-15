import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FilmsPodcastEntry from "../../components/FilmsPodcastEntry/FilmsPodcastEntry";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";
import PublicPrivateSupport from "../../components/PublicPrivateSupport/PublicPrivateSupport";
// import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

import filmsBg2 from "../../assets/images/films-bg-2.png";
import ecstaticScreen from "../../assets/images/films-ecstatic.png";
import keyScreen from "../../assets/images/films-key.png";

import "./Films.scss";

const Films = () => {
  const { t } = useTranslation("films");

  return (
    <div className="films">
      <PageBanner
        extraClassName="films__banner"
        background={`url(${filmsBg2})`}
      >
        {t("heading")}
      </PageBanner>
      <div className="films__intro-container">{t("intro")}</div>
      <Link to="/calendar" className="films__button">
        {t("button")}
      </Link>
      <div className="films__content">
        <FilmsPodcastEntry
          imgSrc={ecstaticScreen}
          imgAlt="Films - Ecstatic Unity"
          entryHeading={t("film-1.heading")}
          entryDesc={t("film-1.text")}
          creditsHeading={t("credits-heading")}
          creditsBody1={t("film-1.credits-1")}
          creditsBody2={t("film-1.credits-2")}
        />
        {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
        <FilmsPodcastEntry
          imgSrc={keyScreen}
          imgAlt="Films - The Key to Dreams"
          imgStyleClass="films__img--key"
          entryHeading={t("film-2.heading")}
          entryDesc={t("film-2.text")}
          creditsHeading={t("credits-heading")}
          creditsBody1={t("film-2.credits-1")}
          creditsBody2={t("film-2.credits-2")}
        />
        {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
      </div>
      <PublicPrivateSupport />
      <Footer />
    </div>
  );
};

export default Films;
