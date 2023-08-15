import { useRef } from "react";
import { useTranslation } from "react-i18next";

import PageBanner from "../../components/PageBanner/PageBanner";

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
import SmoothScrollButton from "../../components/SmoothScrollButton/SmoothScrollButton";

const Principle = () => {
  const { t } = useTranslation("principle");

  const imagesRef = useRef(null);
  const videosRef = useRef(null);
  const pressRef = useRef(null);

  return (
    <div className="principle">
      <PageBanner background={`url(${popBanner})`}>
        <img
          className="principle__image--title"
          alt="Page title"
          src={popTitle}
        />
      </PageBanner>
      <div className="principle__intro">
        <img
          className="principle__image--one"
          src={popIntro}
          alt="Gerard mirrored"
        />
      </div>
      <div>
        <img
          className="principle__image--banner"
          alt="Page background banner - Gerard performing"
          src={popBg}
        />
      </div>
      <div className="principle__text-container">
        <div className="principle__text">
          <div>{t("text-discovery")}</div>
          <div className="principle__link-container">
            <SmoothScrollButton targetRef={imagesRef} label="Images" />
            <SmoothScrollButton targetRef={videosRef} label="Videos" />
            <SmoothScrollButton targetRef={pressRef} label="Press" />
          </div>
          <div className="principle__credits">
            <h2>{t("credits-heading")}</h2>
            <div>{t("credits-body-1")}</div>
            <div>{t("credits-body-2")}</div>
            <div>{t("credits-body-3")}</div>
          </div>
        </div>
      </div>
      <div className="principle__media">
        <h3 className="principle__link-target" ref={imagesRef}>
          Images
        </h3>
        <div className="principle__images">
          <img className="principle__image" alt="Gerard" src={popOneImg} />
          <img className="principle__image" alt="Gerard" src={popTwoImg} />
          <img className="principle__image" alt="Gerard" src={popThreeImg} />
          <img className="principle__image" alt="Gerard" src={popFourImg} />
          <img className="principle__image" alt="Gerard" src={popFiveImg} />
          <img className="principle__image" alt="Gerard" src={popSixImg} />
          <img
            className="principle__image principle__image--seven"
            alt="Gerard"
            src={popSevenImg}
          />
        </div>
        <h3 className="principle__link-target" ref={videosRef}>
          Videos
        </h3>
        <div className="principle__trailers">
          <div className="principle__video-column">
            <YoutubeVimeoEmbed embedId="156622742" isVimeo={true} />
          </div>
          <div className="principle__video-column">
            <YoutubeVimeoEmbed embedId="SbQXWGYp9EA" />
          </div>
        </div>
        <h3 className="principle__link-target" ref={pressRef}>
          Press
        </h3>
      </div>
    </div>
  );
};

export default Principle;
