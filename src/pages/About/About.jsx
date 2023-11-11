import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ContactBanner from "./ContactBanner/ContactBanner";

import gerardProfileImg from "../../assets/images/gerard-profile.png";
import gerardOneImg from "../../assets/images/gerard-1.png";
import gerardTwoImg from "../../assets/images/gerard-2.png";
import gerardThreeImg from "../../assets/images/gerard-3.png";
import gerardFourImg from "../../assets/images/gerard-4.png";
import gerardFiveImg from "../../assets/images/gerard-5.png";
import gerardSixImg from "../../assets/images/gerard-6.png";

import "./About.scss";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="about">
      <div className="about__header">
        <img
          className="about__image--profile"
          alt="Gerard"
          src={gerardProfileImg}
        />
        <h1 className="about__heading">
          {`${t("heading-title")} Gerard X Reyes`}
        </h1>
      </div>
      <div className="about__content">
        <div className="about__row--intro">
          <Trans t={t} i18nKey={"paragraph-intro"} />
        </div>
        <div className="about__row--chouinard">
          <div className="about__row--text">
            <Trans t={t} i18nKey={"paragraph-chouinard"} />
          </div>
          <div className="about__image-overlap">
            <img
              className="about__image--one"
              alt="Gerard"
              src={gerardOneImg}
            />
            <img
              className="about__image--two"
              alt="Gerard"
              src={gerardTwoImg}
            />
          </div>
        </div>
        <div className="about__row--pop-1">
          <img
            className="about__image--three"
            alt="Gerard"
            src={gerardThreeImg}
          />
          <div className="about__row--text">
            <Trans t={t} i18nKey={"paragraph-pop"} />
          </div>
        </div>
        <img className="about__image--six" alt="Gerard" src={gerardSixImg} />
        <div className="about__row--ballroom">
          <p>
            <Trans t={t} i18nKey={"paragraph-ballroom"} />
          </p>
          <p>{t("paragraph-bodywork")}</p>
        </div>
        <div className="about__image-row">
          <img
            className="about__image--four"
            alt="Gerard"
            src={gerardFourImg}
          />
          <img
            className="about__image--five"
            alt="Gerard"
            src={gerardFiveImg}
          />
        </div>
        <div className="about__row--trailers">
          <div className="about__video-column">
            <YoutubeVimeoEmbed embedId="156622742" isVimeo={true} />
          </div>
          <div className="about__video-column">
            <YoutubeVimeoEmbed embedId="2O4fdZZQV8Q" />
          </div>
        </div>
      </div>
      <div className="about__banner--bodywork">
        <span>{t("text-somatic")} Gerard</span>
        <Link to="/bodywork" className="about__button">
          {t("anchor-read-more")}
        </Link>
      </div>
      <ContactBanner t={t} />
    </div>
  );
};

export default About;
