import { useTranslation } from "react-i18next";

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

    return (
        <div className='homepage'>
            <div className="homepage__header">
                <h1 className="homepage__title type-ag-medium-19">
                    <span>Public</span>
                    <svg viewBox="0 0 205 214" height="214" xmlns="http://www.w3.org/2000/svg" className="homepage__spacer--header">
                        <path d="M1 214 204 8" stroke="#9D8B02" strokeWidth={`${useCheckMobileScreen() ? '1' : '0.3'}`} fill="none" fillRule="evenodd"></path>
                    </svg>
                    <span>Private</span>
                    <span className="homepage__spacer--header"></span>
                    <span>Parts</span>
                </h1>
                <video className="homepage__video--banner" src={`${useCheckMobileScreen() === "mobile" ? landingBannerMobile : landingBannerCropped}`} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
            <div className="homepage__content">
                <div className="homepage__text">
                    <p>
                        The sensual body can be a resource for cultivating deeper
                        embodiment, pleasure, and connection with ourselves and others. However we live in a society that shames
                        sexuality and fails to teach us how to honour and celebrate our bodies.
                    </p>
                    <p>
                        Public / Private Parts is a series of works directed by
                        artist
                        and somatic sex educator Gerard X Reyes in conversation and collaboration with sex workers, somatic sex
                        educators, and artists in Berlin and Montreal. Through various mediums (documentary interviews, live
                        performance, video installations, podcasts, etc.) the collaborators share enlightening perspectives on
                        topics such as moral censorship, sensual practices, the nude body, intimacy, pleasure, and much more.
                    </p>
                </div>
                <video className="homepage__video--about" src={breathingVid} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
            <OriginePreview />
            <InterviewsPreview />
            <AboutPreview />
            <SubscribeHomepage />
            <Footer />
        </div>
    );
};

export default Homepage;
