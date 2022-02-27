import React from 'react'
import { useTranslation } from "react-i18next";

import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";
import goetheLogo from "../../assets/svg/goethe-logo.svg";
import sacdLogo from "../../assets/images/sacd-logo.png";

import "./SupportBanner.scss";

const SupportBanner = () => {
    const { t } = useTranslation('support-banner')

    return (
        <div className="support-banner">
            <div className="support-banner__row">
                <div className="support-banner__heading">
                    {t("heading-1")}
                </div>
                <div className="support-banner__logo-container">
                    <img src={calqLogo} className="support-banner__logo" alt="Conseil des arts et des lettres du Québec" />
                    <img src={ccaLogo} className="support-banner__logo" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="support-banner__logo" alt="SACD Canada" />
                </div>
            </div>
            <div className="support-banner__row">
                <div className="support-banner__heading">
                    {t("heading-2")}
                </div>
                <div className="support-banner__logo-container">
                    <img src={goetheLogo} className="support-banner__logo" alt="Goethe-Institut" />
                </div>
            </div>
        </div>
    )
}

export default SupportBanner