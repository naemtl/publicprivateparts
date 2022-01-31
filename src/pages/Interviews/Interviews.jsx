
import { useTranslation } from "react-i18next";

import Footer from '../../components/Footer/Footer';

import hollowBodyVid from "../../assets/videos/hollow-body.mp4";
import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";
import goetheLogo from "../../assets/svg/goethe-logo.svg";
import sacdLogo from "../../assets/images/sacd-logo.png";

import './Interviews.scss'

const Interviews = () => {
    const { t } = useTranslation('interviews')

    return (
        <div className='interviews'>
            <div className="interviews__header">
                <div className="interviews__header-text">
                    {t("main.heading-banner")}
                </div>
                <video className="interviews__video-header" src={hollowBodyVid} autoPlay muted loop controlsList="nofullscreen" playsInline></video>
                <div className="interviews__video-header-overlay"></div>
            </div>
            <div className="interviews__intro">
                <p>{t("main.paragraph-intro-1")}</p>
                <p>{t("main.paragraph-intro-1")}</p>
            </div>
            <div className="interviews__videos">
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-caritia")}</h2>
                        <p>
                            {t("main.paragraph-caritia")}
                        </p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/vu4VlfqlECE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-valentin")}</h2>
                        <p>{t("main.paragraph-valentin")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/1PhKa24YoQY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-kay-1")}</h2>
                        <p>{t("main.paragraph-kay-1")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/ddnhgNwgJNE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-kay-2")}</h2>
                        <p>{t("main.paragraph-kay-2")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/NqhzBKG94W8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"

                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-bishop")}</h2>
                        <p>{t("main.paragraph-bishop")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/IIBsRHuYAq4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player">
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-jasko")}</h2>
                        <p>{t("main.paragraph-jasko")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/OQHlxfWdW9Q"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-pina")}</h2>
                        <p>{t("main.paragraph-pina")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/CZGj7oKBnXo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-mareen")}</h2>
                        <p>{t("main.paragraph-mareen")}</p>
                    </div>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/9rH27gpU_40"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"
                    >
                    </iframe>
                </div>
            </div>
            <div className="interviewsThanks">
                <h2>{t("main.heading-production")}</h2>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.prod-director")}</span>
                    <span></span>
                    <span>Gerard X Reyes</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.camera-op")}</span>
                    <span></span>
                    <span>David J. Romero, Julie Favreau</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.editor-drama")}</span>
                    <span></span>
                    <span>Julie Favreau</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.colour")}</span>
                    <span></span>
                    <span>Max Hilsamer</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.sound")}</span>
                    <span></span>
                    <span>Devon Bate</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.subtitles")}</span>
                    <span></span>
                    <span>T &amp; S Coop (Emma Roufs, Ellen Warkentin, Carolina Alfaro Carvalho)</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.transcription-en")}</span>
                    <span></span>
                    <span>Gerard X Reyes</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.translation-fr")}</span>
                    <span></span>
                    <span>Ingrid Vallus</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>{t("prod-roles.translation-es")}</span>
                    <span></span>
                    <span>Julia Sahagún</span>
                </div>

                <div className="interviewsThanks--special">
                    {t("main.text-thanks")}
                </div>
            </div>
            <div className="interviewsLogos">
                <h2><em>{t("main.heading-support")}</em></h2>
                <div className="interviewsLogos-row">
                    <img src={calqLogo} className="calq-logo" alt="Conseil des arts et des lettres du Québec" />
                    <img src={goetheLogo} className="goethe-logo" alt="Goethe-Institut" />
                </div>
                <div className="interviewsLogos-row">
                    <img src={ccaLogo} className="cca-logo" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="sacd-logo" alt="SACD Canada" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Interviews;
