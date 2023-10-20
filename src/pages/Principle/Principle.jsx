import { useRef } from "react";
import { useTranslation } from "react-i18next";

import LightboxGallery from "../../components/LightboxGallery/LightboxGallery";
import PageBanner from "../../components/PageBanner/PageBanner";
import PublicPrivateSupport from "../../components/PublicPrivateSupport/PublicPrivateSupport";
import SmoothScrollButton from "../../components/SmoothScrollButton/SmoothScrollButton";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

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
          <div className="principle__discover">{t("text-discovery")}</div>
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
        <LightboxGallery
          imgSpacing={14}
          parentName="principle"
          photos={[
            { src: popOneImg, width: 950, height: 650 },
            { src: popTwoImg, width: 950, height: 650 },
            { src: popThreeImg, width: 950, height: 650 },
            { src: popFourImg, width: 950, height: 650 },
            { src: popFiveImg, width: 950, height: 650 },
            { src: popSixImg, width: 950, height: 650 },
            { src: popSevenImg, width: 985, height: 660 },
          ]}
        />
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
        <div className="principle__press">
          <div className="principle__press-entry">
            <div>{`"${t("press.emma-simon")}"`}</div>
            <div className="principle__press-source">
              <span>Emma Simon</span>
              <span>Dfdanse.com, 04-06-2017</span>
            </div>
          </div>
          <div className="principle__press-entry">
            <div>{`"${t("press.marine-durand")}"`}</div>
            <div className="principle__press-source">
              <span>Marine Durand</span>
              <span>Montheatre.qc.ca, 03-06-2017</span>
            </div>
          </div>
        </div>
        <PublicPrivateSupport />
      </div>
    </div>
  );
};

export default Principle;
