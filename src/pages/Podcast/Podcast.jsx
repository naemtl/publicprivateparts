import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/soundcloud";

import FilmsPodcastEntry from "../../components/FilmsPodcastEntry/FilmsPodcastEntry";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";
import PublicPrivateSupport from "../../components/PublicPrivateSupport/PublicPrivateSupport";

import podcastBanner from "../../assets/images/podcast-banner.png";
import podcastIcon from "../../assets/images/podcast-icon.png";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import appleMusicLogo from "../../assets/images/apple-logo.png";

import "./Podcast.scss";

const Podcast = () => {
  const { t } = useTranslation("podcast");

  return (
    <div className="podcast">
      <PageBanner background={`url(${podcastBanner})`}>
        <img className="podcast__banner--inner" src={podcastIcon} alt="" />
        <div className="podcast__host">
          <div>
            <strong>{t("hosted")}</strong>
          </div>
          <div>Gerard X Reyes</div>
        </div>
        <div className="podcast__platforms">
          <img src={spotifyLogo} alt="" />
          <img src={appleMusicLogo} alt="" />
        </div>
      </PageBanner>
      <div className="podcast__content">
        <div className="podcast__intro-container">
          <h1 className="podcast__intro-heading">{t("heading")}</h1>
          <div className="podcast__intro-text">{t("intro")}</div>
        </div>
        <FilmsPodcastEntry
          entryHeading={t("episode-1.heading")}
          entryDesc={t("episode-1.text")}
        >
          <ReactPlayer url="https://soundcloud.com/gerardxreyes/episode-1-lets-talk-about-porn" />
        </FilmsPodcastEntry>
        <FilmsPodcastEntry
          entryHeading={t("episode-2.heading")}
          entryDesc={t("episode-2.text")}
        >
          <ReactPlayer url="https://soundcloud.com/gerardxreyes/episode-2-somatic-sexology" />
        </FilmsPodcastEntry>
        <FilmsPodcastEntry
          entryHeading={`${t("episode-3.heading")} (17/9/23)`}
          entryDesc={t("episode-3.text")}
        >
          {/* <ReactPlayer url="https://soundcloud.com/gerardxreyes/episode-3-curiosity-trauma-and-healing" /> */}
        </FilmsPodcastEntry>
        <div className="podcast__credits-container">
          <h5>{t("credits-heading")}</h5>
          <div className="podcast__credits">
            <div>{t("credits-1")}</div>
            <div>{t("credits-2")}</div>
          </div>
        </div>
      </div>
      <PublicPrivateSupport />
      <Footer />
    </div>
  );
};

export default Podcast;
