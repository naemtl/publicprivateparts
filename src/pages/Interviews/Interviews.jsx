
import { Trans, useTranslation } from "react-i18next";

import Footer from '../../components/Footer/Footer';
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

import hollowBodyVid from "../../assets/videos/hollow-body.mp4";

import './Interviews.scss'
import InterviewPersonnel from "./InterviewPersonnel/InterviewPersonnel";
import SupportBanner from "../../components/SupportBanner/SupportBanner";

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
                <p><Trans t={t} i18nKey={"main.paragraph-intro-1"} /></p>
                <p>{t("main.paragraph-intro-2")}</p>
            </div>
            <div className="interviews__videos">
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-caritia")}</h2>
                        <p>
                            {t("main.paragraph-caritia")}
                        </p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="vu4VlfqlECE" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-valentin")}</h2>
                        <p>{t("main.paragraph-valentin")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="1PhKa24YoQY" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-kay-1")}</h2>
                        <p>{t("main.paragraph-kay-1")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="ddnhgNwgJNE" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-kay-2")}</h2>
                        <p>{t("main.paragraph-kay-2")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="NqhzBKG94W8" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-bishop")}</h2>
                        <p>{t("main.paragraph-bishop")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="IIBsRHuYAq4" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-jasko")}</h2>
                        <p>{t("main.paragraph-jasko")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-pina")}</h2>
                        <p>{t("main.paragraph-pina")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="CZGj7oKBnXo" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>{t("main.heading-mareen")}</h2>
                        <p>{t("main.paragraph-mareen")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="9rH27gpU_40" />
                    </div>
                </div>
            </div>
            <InterviewPersonnel t={t} />
            <SupportBanner />
            <Footer />
        </div>
    );
};

export default Interviews;
