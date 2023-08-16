import React from "react";
import { useTranslation } from "react-i18next";

import FilmsPodcastEntry from "../../components/FilmsPodcastEntry/FilmsPodcastEntry";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";

import podcastBanner from "../../assets/images/podcast-banner.png";
import podcastIcon from "../../assets/images/podcast-icon.png";

import "./Podcast.scss";

const Podcast = () => {
  const { t } = useTranslation("podcast");

  return (
    <div className="podcast">
      <PageBanner background={`url(${podcastBanner})`}>
        <img className="podcast__banner--inner" src={podcastIcon} alt="" />
      </PageBanner>
      <div className="podcast__content">
        <div className="podcast__intro-container">
          <h1 className="podcast__intro-heading">{t("heading")}</h1>
          <div className="podcast__intro-text">{t("intro")}</div>
        </div>
        <FilmsPodcastEntry
          imgSrc="https://placehold.co/800x200"
          imgAlt="FIXME"
          entryHeading={t("episode-1.heading")}
          entryDesc={t("episode-1.text")}
        />
        <FilmsPodcastEntry
          imgSrc="https://placehold.co/800x200"
          imgAlt="FIXME"
          entryHeading={t("episode-2.heading")}
          entryDesc={t("episode-2.text")}
        />
        <FilmsPodcastEntry
          imgSrc="https://placehold.co/800x200"
          imgAlt="FIXME"
          entryHeading={t("episode-3.heading")}
          entryDesc={t("episode-3.text")}
        />
      </div>
      <div className="podcast__credits-container">
        <h5>{t("credits-heading")}</h5>
        <div className="podcast__credits">{t("credits")}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Podcast;
