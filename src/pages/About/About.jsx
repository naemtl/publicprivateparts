import { Trans, useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import ContactBanner from './ContactBanner/ContactBanner';

import gerardProfileImg from "../../assets/images/gerard-profile.jpg";
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
                <h1 className="about__heading">
                    {t("heading-title")}
                    <span className=""> Gerard X Reyes</span>
                </h1>
                <div className="about__row">
                    <div className="about__row--text">
                        <p>
                            <Trans t={t} i18nKey={"paragraph-intro"} />
                        </p>
                    </div>
                    <div>
                        <img className="about__image" alt='Gerard' src={gerardProfileImg} />
                    </div>
                </div>
                <div className="about__row">
                    <div className="about__row--text">
                        <Trans t={t} i18nKey={"paragraph-chouinard"} />
                    </div>
                    <div className="">
                        <img className="about__image" alt="Gerard" src={gerardOneImg} />
                        <img className="about__image" alt='Gerard' src={gerardTwoImg} />
                    </div>
                </div>
                <div className="about__row">
                    <div className="about__row--text">
                        <Trans t={t} i18nKey={"paragraph-pop"} />
                    </div>
                    <div>
                        <img className="about__image" alt="Gerard" src={gerardThreeImg} />
                        <img className="about__image" alt="Gerard" src={gerardFourImg} />
                    </div>
                </div>
                <div className="about__row">
                    <div className="about__row--text">
                        <p><Trans t={t} i18nKey={"paragraph-ballroom"} /></p>
                        <p>{t("paragraph-bodywork")}</p>
                    </div>
                    <div>
                        <img className="about__image" alt="Gerard" src={gerardFiveImg} />
                        <img className="about__image" alt="Gerard" src={gerardSixImg} />
                    </div>
                </div>
                <div className="about__row">
                    <div className="about__row--text">
                        <div>
                            <strong><em>{t("text-pop-1")}</em></strong>
                        </div>
                        <div> – <em>{t("text-pop-2")}</em></div>
                        <p>
                            {t("text-discovery-1")}
                        </p>
                        <p>
                            {t("text-discovery-2")}
                            <div className="about__link-container">
                                <a href="https://vimeo.com/156622742" className="about__button" rel="noreferrer" target="_blank">
                                    {t("anchor-trailer")} 1
                                </a>
                                <a href="https://www.youtube.com/watch?v=2O4fdZZQV8Q" className="about__button" rel="noreferrer" target="_blank">
                                    {t("anchor-trailer")} 2
                                </a>
                            </div>
                        </p>
                    </div>
                    <div>


                        <img className="about__image" alt="Gerard" src={gerardSevenImg} />
                        <img className="about__image" alt="Gerard" src={gerardEightImg} />
                    </div>
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
