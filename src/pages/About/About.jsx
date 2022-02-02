import { Trans, useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import ContactBanner from './ContactBanner/ContactBanner';

import gerardProfileImg from "../../assets/images/gerard-profile.jpg";
import gerardOverlapImg from "../../assets/images/gerard-overlap.jpg";
import gerardOneImg from "../../assets/images/gerard-1.jpg";
import gerardTwoImg from "../../assets/images/gerard-2.jpg";
import gerardThreeImg from "../../assets/images/gerard-3.jpg";
import gerardFourImg from "../../assets/images/gerard-4.jpg";
import gerardFiveImg from "../../assets/images/gerard-5.jpg";
import gerardSixImg from "../../assets/images/gerard-6.jpg";
import gerardSevenImg from "../../assets/images/gerard-7.jpg";
import gerardEightImg from "../../assets/images/gerard-8.jpg";

import './About.scss'

const About = () => {
    const { t } = useTranslation("about")

    return (
        <div className="about">
            <div className="about__content">
                <h1 className="about__heading--desktop">
                    {t("heading-title")}
                    <span className="desktop-only"> Gerard X Reyes</span>
                </h1>
                <div className="about__row about__row--one">
                    <img alt='Gerard' src={gerardProfileImg} />
                    <div className="about__heading--mobile">
                        Gerard X Reyes
                    </div>
                    <p>
                        {t("paragraph-intro")}
                    </p>
                </div>
                <div className="about__row about__row--two">
                    <div className="imgContainer mobile-only">
                        <img alt='Gerard' src={gerardOverlapImg} />
                    </div>
                    <p>
                        {t("paragraph-chouinard")}
                    </p>
                    <div className="desktop-only">
                        <img alt="Gerard" className="imgOverlay1" src={gerardOneImg} width="224" height="223" />
                        <img alt='Gerard' src={gerardTwoImg} width="193" height="212" />
                    </div>
                </div>
                <div className="about__row about__row--three">
                    <img alt="Gerard" className="img3" src={gerardThreeImg} width="359" />
                    <div>
                        <p>
                            <Trans t={t} i18nKey={"paragraph-pop"} />
                        </p>
                        <img alt="Gerard" className="imgOverlay2" src={gerardFourImg} width="290" />
                    </div>
                </div>
                <div className="about__row about__row--four"> <img alt="Gerard" className="img4" src={gerardFiveImg} width="314" />
                    <div>

                        <p><Trans t={t} i18nKey={"paragraph-ballroom"} /></p>
                        <p>{t("paragraph-bodywork")}</p>
                    </div>
                    <div>
                        <img alt="Gerard" className="img5" src={gerardSixImg} width="235" />
                        <img alt="Gerard" className="img6" src={gerardSevenImg} width="164" />
                    </div>
                </div>
                <div className="about__row about__row--five">
                    <div>
                        <div>
                            <strong><em>{t("text-pop-1")}</em></strong>
                        </div>
                        <div>– <em>{t("text-pop-2")}</em></div>
                    </div>
                    <div className="about__row-content">
                        <div className="leftSide">
                            {t("text-discovery-1")}
                        </div>
                        <img alt="Gerard" className="mobile-only" src={gerardEightImg} width="199" style={{ maxWidth: "199px", marginLeft: "auto", marginRight: "auto" }} />
                        <div>
                            {t("text-discovery-2")}
                            <a href="https://vimeo.com/156622742" className="about__button" rel="noreferrer" target="_blank">
                                {t("anchor-trailer")} 1
                            </a>
                            <a href="https://www.youtube.com/watch?v=2O4fdZZQV8Q" className="about__button"
                                rel="noreferrer" target="_blank">
                                {t("anchor-trailer")} 2
                            </a>
                        </div>
                    </div>
                    <img alt="Gerard" className="desktop-only" src={gerardEightImg} width="199" />
                </div>
            </div>
            <div className="about__banner--bodywork">
                <span>{t("text-somatic")}</span>
                <Link to="/bodywork" className="about__button">
                    {t("anchor-read-more")}
                </Link>
            </div>
            <ContactBanner t={t} />
        </div>
    );
};

export default About;
