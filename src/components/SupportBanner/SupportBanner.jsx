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
            <div className="support-banner__logos-row">
                <div className="support-banner__personnel-heading">
                    {t("heading-1")}
                </div>
                <img src={calqLogo} className="support-banner__logo--calq" alt="Conseil des arts et des lettres du Québec" />
                <img src={ccaLogo} className="support-banner__logo--cca" alt="Canada Council for the Arts" />
                <img src={sacdLogo} className="support-banner__logo--sacd" alt="SACD Canada" />
            </div>
            <div className="support-banner__logos-row">
                <div className="support-banner__personnel-heading">
                    {t("heading-2")}
                </div>
                <img src={goetheLogo} className="support-banner__logo--goethe" alt="Goethe-Institut" />
            </div>
        </div>
    )
}

export default SupportBanner