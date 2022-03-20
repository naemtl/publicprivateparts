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
import odmLogo from "../../assets/svg/odm-logo.svg";
import purpleBodyVid from "../../assets/videos/purple-body.mp4";

import './OrigineDuMonde.scss'
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";
import SupportBanner from "../../components/SupportBanner/SupportBanner";

const OrigineDuMonde = () => {
    const { t } = useTranslation('origine')

    return (
        <div className="origine">
            <div className="origine__header">
                <img className="origine__logo--header" src={odmLogo} alt='Origine du Monde' />
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
                >
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
            <SupportBanner />
            <Footer />
        </div>
    );
};

export default OrigineDuMonde;
