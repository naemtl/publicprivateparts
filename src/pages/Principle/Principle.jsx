import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import gerardProfileImg from "../../assets/images/gerard-profile.png";
import gerardOneImg from "../../assets/images/gerard-1.png";
import gerardTwoImg from "../../assets/images/gerard-2.png";
import gerardThreeImg from "../../assets/images/gerard-3.png";
import gerardFourImg from "../../assets/images/gerard-4.png";
import gerardFiveImg from "../../assets/images/gerard-5.png";

import "./Principle.scss";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

const Principle = () => {
  const { t } = useTranslation("principle");

  return (
    <div className="principle">
      <div className="principle__header">
        <img
          className="principle__image--profile"
          alt="Gerard"
          src={gerardProfileImg}
        />
        <h1 className="principle__heading">
          {t("heading-title")}
          <span> Gerard X Reyes</span>
        </h1>
      </div>
      <div className="principle__content">
        <div className="principle__row--intro">
          <Trans t={t} i18nKey={"paragraph-intro"} />
        </div>
        <div className="principle__row--chouinard">
          <div className="principle__row--text">
            <Trans t={t} i18nKey={"paragraph-chouinard"} />
          </div>
          <div className="principle__image-overlap">
            <img
              className="principle__image--one"
              alt="Gerard"
              src={gerardOneImg}
            />
            <img
              className="principle__image--two"
              alt="Gerard"
              src={gerardTwoImg}
            />
          </div>
        </div>
        <div className="principle__row--pop-1">
          <img
            className="principle__image--three"
            alt="Gerard"
            src={gerardThreeImg}
          />
          <div className="principle__row--text">
            <Trans t={t} i18nKey={"paragraph-pop"} />
          </div>
        </div>
        <div className="principle__row--ballroom">
          <p>
            <Trans t={t} i18nKey={"paragraph-ballroom"} />
          </p>
          <p>{t("paragraph-bodywork")}</p>
        </div>
        <div className="principle__image-row">
          <img
            className="principle__image--four"
            alt="Gerard"
            src={gerardFourImg}
          />
          <img
            className="principle__image--five"
            alt="Gerard"
            src={gerardFiveImg}
          />
        </div>
        <div className="principle__row--pop-discovery">
          <div className="principle__row--pop-2">
            <div className="principle__row--text">
              <div>
                <strong>
                  <em>{t("text-pop-1")}</em>
                </strong>
              </div>
              <div>
                {" "}
                – <em>{t("text-pop-2")}</em>
              </div>
            </div>
          </div>
          <div className="principle__row--discovery">
            <div className="principle__row--text">
              <p>{t("text-discovery-1")}</p>
            </div>
            <div className="principle__row--text">
              <p>{t("text-discovery-2")}</p>
            </div>
          </div>
        </div>
        <div className="principle__row--trailers">
          <div className="principle__video-column">
            <YoutubeVimeoEmbed embedId="156622742" isVimeo={true} />
          </div>
          <div className="principle__video-column">
            <YoutubeVimeoEmbed embedId="2O4fdZZQV8Q" />
          </div>
        </div>
      </div>
      <div className="principle__banner--bodywork">
        <span>{t("text-somatic")} Gerard</span>
        <Link to="/bodywork" className="principle__button">
          {t("anchor-read-more")}
        </Link>
      </div>
    </div>
  );
};

export default Principle;
