import { useRef } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import LightboxGallery from "../../components/LightboxGallery/LightboxGallery";
import OriginePersonnel from "./OriginePersonnel/OriginePersonnel";
import Footer from "../../components/Footer/Footer";

import ftaLogo from "../../assets/images/fta-logo.png";
import odmImg1 from "../../assets/images/odm-1.jpg";
import odmImg2 from "../../assets/images/odm-2.jpg";
import odmImg3 from "../../assets/images/odm-3.jpg";
import odmImg4 from "../../assets/images/odm-4.jpg";
import odmImg5 from "../../assets/images/odm-5.jpg";
import odmImg6 from "../../assets/images/odm-6.jpg";
import odmImg7 from "../../assets/images/odm-7.jpg";
import odmImg8 from "../../assets/images/odm-8.jpg";
import odmImg9 from "../../assets/images/odm-9.jpg";
import odmLogo from "../../assets/svg/odm-logo.svg";
import purpleBodyVid from "../../assets/videos/purple-body.mp4";

import "./OrigineDuMonde.scss";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";
import SupportBanner from "../../components/SupportBanner/SupportBanner";
import SmoothScrollButton from "../../components/SmoothScrollButton/SmoothScrollButton";

const OrigineDuMonde = () => {
  const { t } = useTranslation("origine");

  const imagesRef = useRef(null);
  const videosRef = useRef(null);
  const pressRef = useRef(null);

  return (
    <div className="origine">
      <div className="origine__header">
        <img
          className="origine__logo--header"
          src={odmLogo}
          alt="Origine du Monde"
        />
        <div className="origine__video-overlay--header"></div>
        <video
          className="origine__video-player--header"
          src={purpleBodyVid}
          autoPlay={true}
          loop={true}
          controls={false}
          muted
          controlsList="nofullscreen"
          playsInline
        ></video>
      </div>
      <div className="origine__content">
        <div className="origine__media-row origine__media-row--one">
          <div className="origine__video-column">
            <YoutubeVimeoEmbed embedId="ZzOYIfBtAtg" />
          </div>
        </div>
        <div className="origine__text">
          <Trans t={t} i18nKey={"main.paragraph-main-1"} />
        </div>
        <div className="origine__media-row origine__media-row--two">
          <img src={odmImg1} alt="Origine Du Monde promo" />
          <img src={odmImg2} alt="Origine Du Monde promo" />
        </div>
        <div className="origine__text">
          <Trans t={t} i18nKey={"main.paragraph-main-2"} />
        </div>
        <Link to="/calendar" className="origine__calendar-button">
          {t("main.button-calendar")}
        </Link>
        <div className="origine__link-container">
          <SmoothScrollButton targetRef={imagesRef} label={t("common.images")} />
          <SmoothScrollButton targetRef={videosRef} label={t("common.videos")} />
          <SmoothScrollButton targetRef={pressRef} label={t("common.press")} />
        </div>
        <h3 className="origine__scroll-heading" ref={imagesRef}>
          {t("common.images")}
        </h3>
        <LightboxGallery
          imgSpacing={14}
          parentName="origine"
          photos={[
            { src: odmImg3, width: 688, height: 458 },
            { src: odmImg4, width: 688, height: 458 },
            { src: odmImg5, width: 688, height: 458 },
            { src: odmImg6, width: 688, height: 458 },
            { src: odmImg7, width: 688, height: 458 },
            { src: odmImg8, width: 688, height: 458 },
            { src: odmImg9, width: 688, height: 458 },
          ]}
        />
      </div>
      <div className="origine__quote">
        <div className="origine__quote-container">
          <div className="origine__quote-text">{t("main.text-quote")}</div>
          <div className="origine__quote-source">
            <Trans t={t} i18nKey={"main.text-quote-source"} />
          </div>
        </div>
      </div>
      <h3 className="origine__scroll-heading" ref={videosRef}>
        {t("common.video")}
      </h3>
      <div className="origine__media-row origine__media-row--five">
        <div className="origine__video-column">
          <YoutubeVimeoEmbed embedId="1173262977" isVimeo />
        </div>
      </div>
      <h3 className="origine__scroll-heading" ref={pressRef}>
        {t("common.press")}
      </h3>
      <div className="origine__press">
        <div className="origine__text">
          {`"${t("press.spirale-magazine")}"`}
          <div className="origine__press-source">
            <span>Spirale Magazine</span>
            <span>Etienne Bergeron, Spiralemagazine.com</span>
          </div>
        </div>
        <div className="origine__text">
          {`"${t("press.jeu-revue")}"`}
          <div className="origine__press-source">
            <span>JEU Revue de Théâtre</span>
          </div>
        </div>
      </div>
      <h3 className="origine__heading">{t("common.credits")}</h3>
      <OriginePersonnel t={t} />
      <SupportBanner>
        <img src={ftaLogo} className="support-banner__logo--fta" alt="FTA" />
      </SupportBanner>
      <Footer />
    </div>
  );
};

export default OrigineDuMonde;
