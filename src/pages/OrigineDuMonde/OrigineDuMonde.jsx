import { Trans, useTranslation } from "react-i18next";

import OriginePersonnel from "./OriginePersonnel/OriginePersonnel";
import Footer from '../../components/Footer/Footer';

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
                <div className="origine__text">
                    <Trans t={t} i18nKey={"main.paragraph-main-1"} />
                </div>
                <div className="origine__text">
                    <Trans t={t} i18nKey={"main.paragraph-main-2"} />
                </div>
                <div className="origine__text">
                    {t("main.text-premiere")}
                </div>
                <div className="origine__controls">
                    <YoutubeVimeoEmbed isVimeo={true} embedId="542702988" />
                    <a className="button" href="https://vimeo.com/542702988">
                        {t("main.button-trailer")}
                        <span> 1</span>
                    </a>
                    <a className="button" href="https://vimeo.com/542702988">
                        {t("main.button-trailer")}
                        <span> 2</span>
                    </a>
                    <a className="button" href="https://vimeo.com/542702988">
                        {t("main.button-trailer")}
                        <span> 3</span>
                    </a>
                </div>
            </div>
            <div className="origine__embed"></div>
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
            <OriginePersonnel t={t} />
            <div className="origine__logos-container">
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        {t("main.heading-1")}
                    </div>
                    <img src={calqLogo}
                        alt="Conseil des arts et des lettres du Québec" />
                    <img src={ccaLogo} className="cca-logo" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="sacd-logo" alt="SACD Canada" />
                </div>
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        {t("main.heading-2")}
                    </div>
                    <img src={goetheLogo} className="goethe-logo" alt="Goethe-Institut" />
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
