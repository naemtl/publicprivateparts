
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
                <video
                    className="interviews__video-header"
                    src={hollowBodyVid}
                    autoPlay={true}
                    loop={true}
                    controls={false}
                    muted
                    controlsList="nofullscreen"
                    playsInline
                >
                </video>
                <div className="interviews__video-header-overlay"></div>
            </div>
            <div className="interviews__intro">
                <p><Trans t={t} i18nKey={"main.paragraph-intro-1"} /></p>
                <p>{t("main.paragraph-intro-2")}</p>
            </div>
            <div className="interviews__videos">
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>Caritia:</span>
                            <span>{t("main.heading-caritia")}</span>
                        </h2>
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
                        <h2 className="interviews__heading">
                            <span>Valentin:</span>
                            <span>{t("main.heading-valentin")}</span>
                        </h2>
                        <p>{t("main.paragraph-valentin")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="1PhKa24YoQY" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>KAy:</span>
                            <span>{t("main.heading-kay-1")}</span>
                        </h2>
                        <p>{t("main.paragraph-kay-1")}</p>
                    </div>
                    <div className="interviews__video-container--wide">
                        <YoutubeVimeoEmbed embedId="ddnhgNwgJNE" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>KAy:</span>
                            <span>{t("main.heading-kay-2")}</span>
                        </h2>
                        <p>{t("main.paragraph-kay-2")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="NqhzBKG94W8" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>Bishop:</span>
                            <span>{t("main.heading-bishop")}</span>
                        </h2>
                        <p>{t("main.paragraph-bishop")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="IIBsRHuYAq4" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>Jasko:</span>
                            <span>{t("main.heading-jasko")}</span>
                        </h2>
                        <p>{t("main.paragraph-jasko")}</p>
                    </div>
                    <div className="interviews__video-container--wide">
                        <YoutubeVimeoEmbed embedId="OQHlxfWdW9Q" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>Pina:</span>
                            <span>{t("main.heading-pina")}</span>
                        </h2>
                        <p>{t("main.paragraph-pina")}</p>
                    </div>
                    <div className="interviews__video-container">
                        <YoutubeVimeoEmbed embedId="CZGj7oKBnXo" />
                    </div>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2 className="interviews__heading">
                            <span>Mareen:</span>
                            <span>{t("main.heading-mareen")}</span>
                        </h2>
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
