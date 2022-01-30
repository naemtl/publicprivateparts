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
                    <Trans i18nkey="origine.main.paragraph-main-1">
                        <em>The Origin of the World</em> may be the starting point for a global history of moral censorship in modern times. In Paris 1866, Gustave Courbet’s painting was hidden from public view right after it had been completed. The work – which displays a woman’s abdomen, genitals, and legs – was seen more as a pornographic object than as a work of art. It was sold and resold many times but remained
                        hidden until its first public exhibition in New York in 1988, when it became world famous. Then in 2011, Facebook censored the work again, this time online, under its “Community Guidelines”. What would happen if our human society could learn to accept the sensual body? What if we acknowledged the body as a precious resource for cultivating sensation, connection, and empathy with each other, with the world and with ourselves?

                    </Trans>
                </div>
                <div className="origine__text">
                    <span>
                        <em>Public / Private Parts ou L’Origine du monde </em>
                        {t("main.paragraph-main-2")}
                    </span>
                </div>
                <div className="origine__text">
                    {t("main.premiere-text")}
                </div>
                <div className="origine__controls">
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
                        {t("main.quote-text")}
                    </div>
                    <div className="origine__quote-author">
                        <span>—Bishop Black, </span>
                        {t("main.quote-source")}
                    </div>
                </div>
            </div>
            <OriginePersonnel />
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
