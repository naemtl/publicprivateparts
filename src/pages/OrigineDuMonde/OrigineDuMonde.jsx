import { Trans, useTranslation } from "react-i18next";

import OriginePersonnel from "./OriginePersonnel/OriginePersonnel";
import Footer from '../../components/Footer/Footer';

import odmImg1 from "../../assets/images/odm-1.png";
import odmImg2 from "../../assets/images/odm-2.png";
import odmImg3 from "../../assets/images/odm-3.jpg";
import odmImg4 from "../../assets/images/odm-4.png";
import odmImg5 from "../../assets/images/odm-5.png";
import odmImg6 from "../../assets/images/odm-6.png";
import odmImg7 from "../../assets/images/odm-7.png";
import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";
import goetheLogo from "../../assets/svg/goethe-logo.svg";
import odmLogo from "../../assets/svg/odm-logo.svg";
import sacdLogo from "../../assets/images/sacd-logo.png";
import purpleBodyVid from "../../assets/videos/purple-body.mp4";

import './OrigineDuMonde.scss'
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

const OrigineDuMonde = () => {
    const { t } = useTranslation('origine')

    return (
        <div className="origine">
            <div className="origine__header">
                <img className="origine__logo--header" src={odmLogo} alt='Origine du Monde' />
                <div className="origine__video-overlay--header"></div>
                <video className="origine__video-player--header"
                    src={purpleBodyVid}
                    autoPlay
                    muted
                    loop
                    controlsList="nofullscreen"
                    playsInline>
                </video>
            </div>
            <div className="origine__content">
                <div className="origine__media-row origine__media-row--single">
                    <div className="origine__video-column">
                        <YoutubeVimeoEmbed isVimeo={true} embedId="542702988" />
                    </div>
                </div>
                <div className="origine__text">
                    <Trans t={t} i18nKey={"main.paragraph-main-1"} />
                </div>
                <div className="origine__media-row">
                    <img src={odmImg1} alt="Origine Du Monde promo" />
                    <img src={odmImg2} alt="Origine Du Monde promo" />
                </div>
                <div className="origine__text">
                    <Trans t={t} i18nKey={"main.paragraph-main-2"} />
                </div>
                <div className="origine__text">
                    {t("main.text-premiere")}
                </div>
                <img className="origine__image--full" src={odmImg3} alt="Origine Du Monde promo" />

                <div className="origine__media-row">
                    <img src={odmImg4} alt="Origine Du Monde promo" />
                    <img src={odmImg5} alt="Origine Du Monde promo" />
                </div>
                <div className="origine__media-row">
                    <img src={odmImg6} alt="Origine Du Monde promo" />
                    <img src={odmImg7} alt="Origine Du Monde promo" />
                </div>
            </div>
            <div className="origine__quote">
                <div className="origine__quote-container">
                    <div className="origine__quote-text">
                        {t("main.text-quote")}
                    </div>
                    <div className="origine__quote-author">
                        <Trans t={t} i18nKey={"main.text-quote-source"} />
                    </div>
                </div>
            </div>
            <div className="origine__media-row">
                <div className="origine__video-column">
                    <YoutubeVimeoEmbed isVimeo={true} embedId="542702988" />
                </div>
                <div className="origine__video-column">
                    <YoutubeVimeoEmbed isVimeo={true} embedId="542702988" />
                </div>
            </div>
            <OriginePersonnel t={t} />
            <div className="origine__logos-container">
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        {t("main.heading-1")}
                    </div>
                    <img src={calqLogo} className="origine__logo--calq" alt="Conseil des arts et des lettres du Québec" />
                    <img src={ccaLogo} className="origine__logo--cca" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="origine__logo--sacd" alt="SACD Canada" />
                </div>
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        {t("main.heading-2")}
                    </div>
                    <img src={goetheLogo} className="origine__logo--goethe" alt="Goethe-Institut" />
                </div>
            </div>
            <div className="origine__personnel-row">
                {t("main.paragraph-thanks")}
            </div>
            <Footer />
        </div>
    );
};

export default OrigineDuMonde;
