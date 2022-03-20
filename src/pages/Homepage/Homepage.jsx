import { Trans, useTranslation } from "react-i18next";

import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

import AboutPreview from "./AboutPreview/AboutPreview";
import InterviewsPreview from "./InterviewsPreview/InterviewsPreview";
import OriginePreview from "./OriginePreview/OriginePreview";
import SubscribeHomepage from "./SubscribeHomepage/SubscribeHomepage";

import Footer from "../../components/Footer/Footer";

import landingBannerCropped from "../../assets/videos/landing-banner-cropped.mp4";
import landingBannerMobile from "../../assets/videos/landing-banner-mobile.mp4";
import breathingVid from "../../assets/videos/breathing.mp4";

import './Homepage.scss'

const Homepage = () => {
    const { t } = useTranslation('homepage')

    const isMobile = useCheckMobileScreen()

    return (
        <div className='homepage'>
            <div className="homepage__header">
                <h1 className="homepage__title">
                    <span>Public</span>
                    <svg viewBox="0 0 205 214" height="214" xmlns="http://www.w3.org/2000/svg" className="homepage__spacer--header">
                        <path d="M1 214 204 8" stroke="#9D8B02" strokeWidth={`${isMobile ? '1' : '0.3'}`} fill="none" fillRule="evenodd"></path>
                    </svg>
                    <span>Private</span>
                    <span className="homepage__spacer--header"></span>
                    <span>Parts</span>
                </h1>
            </div>
            <video
                className="homepage__video--banner"
                src={`${isMobile === "mobile" ? landingBannerMobile : landingBannerCropped}`}
                autoPlay={true}
                muted
                loop={true}
                controlsList="nofullscreen"
                controls={false}
                playsInline
            >
            </video>
            <div className="homepage__content">
                <div className="homepage__text">
                    <p>
                        {t('intro.paragraph-1')}
                    </p>
                    <p>
                        <Trans t={t} i18nKey={'intro.paragraph-2'} />
                    </p>
                </div>
                <video
                    className="homepage__video--about"
                    src={breathingVid}
                    autoPlay={true}
                    muted
                    loop={true}
                    controlsList="nofullscreen"
                    controls={false}
                    playsInline
                >
                </video>
            </div>
            <OriginePreview t={t} />
            <InterviewsPreview t={t} />
            <AboutPreview t={t} />
            <SubscribeHomepage t={t} />
            <Footer backgroundColor={"footer--blue"} />
        </div>
    );
};

export default Homepage;
