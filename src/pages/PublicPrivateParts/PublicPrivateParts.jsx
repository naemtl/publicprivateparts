import { Trans, useTranslation } from "react-i18next";

import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

import InterviewsPreview from "./InterviewsPreview/InterviewsPreview";
import OriginePreview from "./OriginePreview/OriginePreview";

import Footer from "../../components/Footer/Footer";

import breathingVid from "../../assets/videos/breathing.mp4";
import landingBannerCropped from "../../assets/videos/landing-banner-cropped.mp4";
import landingBannerMobile from "../../assets/videos/landing-banner-mobile.mp4";
import landingBannerTransition from "../../assets/images/landing-banner-transition.jpeg";
import landingSlash from "../../assets/svg/landing-slash.svg";

import './PublicPrivateParts.scss'

const PublicPrivateParts = () => {
    const { t } = useTranslation('publicprivate')

    const isMobile = useCheckMobileScreen()

    return (
        <div className='publicprivate'>
            <div className="publicprivate__header">
                <h1 className="publicprivate__title">
                    <span>Public</span>
                    <div className="publicprivate__spacer--header">
                        <img src={landingSlash} alt="Logo spacer" />
                    </div>
                    <span>Private</span>
                    <span className="publicprivate__spacer--header"></span>
                    <span>Parts</span>
                </h1>
            </div>
            <video
                className="publicprivate__video--banner"
                src={`${isMobile === "mobile" ? landingBannerMobile : landingBannerCropped}`}
                autoPlay={true}
                muted
                loop={true}
                controlsList="nofullscreen"
                controls={false}
                playsInline
            >
            </video>
            <img src={landingBannerTransition} alt="Landing banner transition" />
            <div className="publicprivate__content">
                <div className="publicprivate__text">
                    <p>
                        {t('intro.paragraph-1')}
                    </p>
                    <p>
                        <Trans t={t} i18nKey={'intro.paragraph-2'} />
                    </p>
                </div>
                <video
                    className="publicprivate__video--about"
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
            <Footer />
        </div>
    );
};

export default PublicPrivateParts;
