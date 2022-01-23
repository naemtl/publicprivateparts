import { useTranslation } from "react-i18next";

import landingBannerCropped from "../../assets/01_landing/landing-banner-cropped.mp4";
import breathingVid from "../../assets/01_landing/breathing.mp4";
import origineBanner from "../../assets/01_landing/odm-banner.mp4";

import './Homepage.scss'
import DocumentaryInterviews from "./DocumentaryInterviews/DocumentaryInterviews";

const Homepage = () => {
    const { t } = useTranslation('homepage')

    return (
        <div className='homepage'>
            <div className="homepage__content--header">
                <h1 className="homepage__title--header type-ag-medium-19">
                    <span>Public</span>
                    <svg viewBox="0 0 205 214" height="214" xmlns="http://www.w3.org/2000/svg" className="homepage__spacer--header">
                        <path d="M1 214 204 0" stroke="#9D8B02" strokeWidth=".3" fill="none" fillRule="evenodd"></path>
                    </svg>
                    <span>Private</span>
                    <span className="homepage__spacer--header"></span>
                    <span>Parts</span>
                </h1>
                <video className="homepage__video--header" src={landingBannerCropped} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
            <div className="homepage__content--about">
                <div className="homepage__text--about type-ag-regular-21"> The sensual body can be a resource for cultivating deeper
                    embodiment, pleasure, and connection with ourselves and others. However we live in a society that shames
                    sexuality and fails to teach us how to honour and celebrate our bodies. </div>
                <div className="homepage__spacer--about"></div>
                <div className="homepage__text--about type-ag-regular-21"> Public / Private Parts is a series of works directed by
                    artist
                    and somatic sex educator Gerard X Reyes in conversation and collaboration with sex workers, somatic sex
                    educators, and artists in Berlin and Montreal. Through various mediums (documentary interviews, live
                    performance, video installations, podcasts, etc.) the collaborators share enlightening perspectives on
                    topics such as moral censorship, sensual practices, the nude body, intimacy, pleasure, and much more. </div>
                <video className="homepage__video--about" src={breathingVid} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
            <div className="homepage__logo--origine">
                <div className="homepage__text-upper--origine type-ag-medium-17"> <span>Public </span> <span>Private </span>
                    <span>Parts</span>
                </div>
                <div className="homepage__text-lower--origine"> <span
                    className="homepage__text-super--origine type-ogg-regular-14-italic">ou</span> <span
                        className="type-ogg-regular-30">L’Origine du monde</span> </div>
            </div>
            <div className="homepage__section--origine type-ag-light-21">
                <div className="homepage__content--origine">
                    <div className="homepage__text--origine"> The first work in the Public / Private Parts series is an immersive
                        dance
                        performance and video installation which looks
                        beyond the limiting binaries of public/private and art/pornography. A community of nine embodiment
                        experts from various
                        professional and cultural backgrounds create mindful bodily practices to awaken the senses. Through live
                        performances
                        and documentary videos, the group of contemporary dancers, sex workers and sex educators explore alone
                        and expand
                        together using the essential functions of touch, breath, sound, movement, and imagination. Intimate and
                        innovative,
                        their discoveries reveal new, hopeful interconnections that could benefit us all.</div>
                    <div className="homepage__spacer--origine"></div>
                    <a href="en-odm.html" className="text-decoration-none">
                        <button className="button">Trailer and info</button>
                    </a>
                </div>
                <video className="homepage__video--origine" src={origineBanner} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
            <DocumentaryInterviews />
            <div className="homepage--gerard">
                <div className="homepage__content--gerard">
                    <div className="homepage__column--gerard">
                        <div className="homepage__title--gerard">About Gerard X Reyes</div>
                        <div className="homepage__text--gerard">
                            Learn more about Gerard’s artistic journey as well as their Somatic Sex Education practice.
                        </div>
                        <a href="en-about.html" className="text-decoration-none button homepage__button--gerard">
                            Read bio

                        </a>
                        <a href="en-about.html" className="text-decoration-none button indexSomaticSex-button">
                            Discover Somatic Sex Education
                        </a>
                    </div>
                </div>
                <div className="homepage__image--gerard"></div>
            </div>
            <div className="subscribe">
                <div className="subscribe__title type-ogg-regular-52">Join the Movement</div>
                <div className="subscribe__text type-ag-light-21">
                    We are creating more works in the Public / Private Parts series which will be available soon. Be the first
                    to know about
                    upcoming release dates and tours of the live performance Public / Private Parts ou L’Origine du monde. Sign
                    up today!
                </div>
                <form className="subscribe__form type-ag-light-21"
                    action="https://vimeo.us14.list-manage.com/subscribe/post?u=1ceba19e26d5a0f14904f257e&amp;id=0d6becde98"
                    method="post" target="_blank">
                    <input type="text" name="FNAME" placeholder="First name" />
                    <input type="text" name="LNAME" placeholder="Last name" />
                    <select name="LANG" required>
                        <option defaultValue="Language Preference" disabled>Language Preference</option>
                        <option defaultValue="English">English</option>
                        <option defaultValue="Français">Français</option>
                        <option defaultValue="Español">Español</option>
                    </select>
                    <input type="email" name="EMAIL" placeholder="Email*" required />
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_1ceba19e26d5a0f14904f257e_0d6becde98" tabIndex="-1" defaultValue="" />
                    </div>
                    <input className="button" type="submit" name="subscribe" defaultValue="Keep me updated" />
                </form>
            </div>
        </div>
    );
};

export default Homepage;
