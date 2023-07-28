import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import popBanner from "../../assets/images/pop-banner.png";
import popTitle from "../../assets/images/pop-title.png";
import popIntro from "../../assets/images/pop-intro.png";
import popBg from "../../assets/images/pop-bg.png";
import popOneImg from "../../assets/images/pop-1.png";
import popTwoImg from "../../assets/images/pop-2.png";
import popThreeImg from "../../assets/images/pop-3.png";
import popFourImg from "../../assets/images/pop-4.png";
import popFiveImg from "../../assets/images/pop-5.png";
import popSixImg from "../../assets/images/pop-6.png";
import popSevenImg from "../../assets/images/pop-7.png";

import "./Principle.scss";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

const Principle = () => {
  const { t } = useTranslation("principle");

  return (
    <div className="principle">
      <div className="principle__header">
        <img
          className="principle__image--banner"
          alt="Page banner"
          src={popBanner}
        />
        <img
          className="principle__image--title"
          alt="Page title"
          src={popTitle}
        />
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
              src={popOneImg}
            />
            <img
              className="principle__image--two"
              alt="Gerard"
              src={popTwoImg}
            />
          </div>
        </div>
        <div className="principle__row--pop-1">
          <img
            className="principle__image--three"
            alt="Gerard"
            src={popThreeImg}
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
            src={popFourImg}
          />
          <img
            className="principle__image--five"
            alt="Gerard"
            src={popFiveImg}
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
    </div>
  );
};

export default Principle;
