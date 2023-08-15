import React from "react";
import { useTranslation } from "react-i18next";

import FilmsPodcastEntry from "../../components/FilmsPodcastEntry/FilmsPodcastEntry";
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
        <FilmsPodcastEntry
          imgSrc={ecstaticScreen}
          imgAlt="Films - Ecstatic Unity"
          entryHeading={t("film-1.heading")}
          entryDesc={t("film-1.text")}
          creditsHeading={t("credits-heading")}
          creditsBody={t("film-1.credits")}
        />
        {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
        <FilmsPodcastEntry
          imgSrc={keyScreen}
          imgAlt="Films - The Key to Dreams"
          entryHeading={t("film-2.heading")}
          entryDesc={t("film-2.text")}
          creditsHeading={t("credits-heading")}
          creditsBody={t("film-2.credits")}
        />
        {/* <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Films;
