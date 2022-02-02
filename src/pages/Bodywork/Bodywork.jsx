import { Trans, useTranslation } from "react-i18next";

import Footer from '../../components/Footer/Footer';

import './Bodywork.scss'

const Bodywork = () => {
    const { t } = useTranslation('bodywork')

    return (
        <div className="bodywork">
            <h1 className="bodywork__header">
                {t("page-title")}
            </h1>
            <h2 className="bodywork__header">
                {t("page-title-gerard")}
            </h2>
            <div className="bodywork__content">
                <h2>
                    {t("heading-society")}
                </h2>
                <p>
                    {t("paragraph-society-1")}
                </p>
                <p>
                    <Trans t={t} i18nKey={"paragraph-society-2"}>
                        In 2019, I graduated from the esteemed <a href="https://instituteofsomaticsexology.com">Institute of Somatic Sexology</a> in Australia to become a Certified Sexological Bodyworker. I warmly welcome people of all genders, races, cultures, religions, sexual orientations and relationship choices to work with me.
                    </Trans>
                </p>
                <h2>
                    {t("heading-somatic")}
                </h2>
                <p>
                    <Trans t={t} i18nKey={"paragraph-somatic-1"} />
                </p>
                <p>
                    <Trans t={t} i18nKey={"paragraph-somatic-2"} />
                </p>
                <h2>
                    {t("heading-reasons")}
                </h2>
                <ol>
                    <li>{t("list-reasons.accepting")}</li>
                    <li>{t("list-reasons.reconnecting")}</li>
                    <li>{t("list-reasons.pleasure")}</li>
                    <li>{t("list-reasons.habits-patterns")}</li>
                    <li>{t("list-reasons.boundaries")}</li>
                    <li>{t("list-reasons.orgasm-difficulties")}</li>
                    <li>{t("list-reasons.healthy-porn")}</li>
                    <li>{t("list-reasons.ejaculation-choice")}</li>
                    <li>{t("list-reasons.trauma-support")}</li>
                    <li>{t("list-reasons.pain-relief")}</li>
                    <li>{t("list-reasons.transition-support")}</li>
                    <li>{t("list-reasons.dysfunction")}</li>
                    <li>{t("list-reasons.enhance")}</li>
                    <li>{t("list-reasons.understanding-anal")}</li>
                    <li>{t("list-reasons.referred-by")}</li>
                </ol>
                <h2>
                    {t("heading-session")}
                </h2>
                <ol>
                    <li>
                        <span>{t("list-session.check-in.label")}</span> – {t("list-session.check-in.desc")}
                    </li>
                    <li>
                        <span>{t("list-session.body-scan.label")}</span> – {t("list-session.body-scan.desc")}
                    </li>
                    <li>
                        <span>{t("list-session.options.label")}</span> – {t("list-session.options.desc")}
                    </li>
                    <li>
                        <span>{t("list-session.agreement.label")}</span> – {t("list-session.agreement.desc")}
                    </li>
                    <li>
                        <span>{t("list-session.integration.label")}</span> – {t("list-session.integration.desc")}
                    </li>
                </ol>
                <div>
                    <h2>
                        <em>{t("heading-message")}</em>
                    </h2>
                    <p>
                        <Trans t={t} i18nKey={"paragraph-message-1"} />
                    </p>
                    <p>
                        <Trans t={t} i18nKey={"paragraph-message-2"}>
                            In 2019, I became a Certified Sexological Bodyworker by completing a six-month course at the Australian <a href="https://instituteofsomaticsexology.com/">Institute of Somatic Sexology</a>, which was facilitated by master educators Deej Juventin and Uma Ayelet. In 2020, I continued my studies via a mentorship with Ron Stuart and Pono Stuart – two Certified Sexological Bodyworkers who are associated with the Institute for the Study of Somatic Sex Education in Victoria, Canada.
                        </Trans>
                    </p>
                    <p>
                        {t("paragraph-message-3")}
                    </p>
                </div>
                <h2>
                    {t("heading-pricing")}
                </h2>
                <div>
                    <div>
                        <Trans t={t} i18nKey={"text-pricing-1"} />
                    </div>
                    <div>
                        <Trans t={t} i18nKey={"text-pricing-2"} />
                    </div>
                </div>
                <p>
                    {t('paragraph-pricing-1')}
                </p>
                <p>
                    {t('paragraph-pricing-2')}
                </p>
                <div>
                    <div>
                        <a href="mailto:gerardxreyes@gmail.com">
                            {t("anchor-contact")}
                        </a>
                    </div>
                    <div>
                        <a href="https://calendly.com/gerardxreyes/10-min-consultation-call-appel">
                            {t("anchor-book")}
                        </a>
                    </div>
                </div>
                <hr />
                <p>
                    {t("paragraph-covid")}
                </p>
                <p>
                    <Trans t={t} i18nKey={"paragraph-thanks"} />
                </p>
                <p>
                    <em>&copy; 2014 ACSB. {t("paragraph-copyright")}</em>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Bodywork;
