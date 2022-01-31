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
                    {t("paragraph-somatic-1")}
                </p>
                <p>
                    {t("paragraph-somatic-2")}
                </p>
                <h2>
                    {t("heading-reasons")}
                </h2>
                <ol>
                    <li>Accepting and loving one’s body, gender and/or sexuality</li>
                    <li>Reconnecting to the sensual/sexual self</li>
                    <li>Learning how to ask for and receive pleasure</li>
                    <li>Becoming aware of habits and patterns, and learning to expand pleasure throughout the body</li>
                    <li>Learning about boundaries and consensual touch</li>
                    <li>Difficulties with orgasm</li>
                    <li>Developing a healthy use of porn</li>
                    <li>Ejaculation choice</li>
                    <li>Post-trauma support</li>
                    <li>Relief from pelvic pain or numbness</li>
                    <li>Support during gender transition</li>
                    <li>Erectile dysfunction</li>
                    <li>Couples/Triads/Quads wanting to enhance their sex life</li>
                    <li>Understanding anal pleasure</li>
                    <li>Referred by a Therapist, Doctor, Sexologist, Massage Therapist</li>
                </ol>
                <h2>
                    {t("heading-session")}
                </h2>
                <ol>
                    <li>
                        <span>Check-in</span> – You and Gerard discuss your intentions, interests, challenges and
                        sensual/sexual history.
                    </li>
                    <li>
                        <span>Body Scan</span> – Gerard leads you in a somatic body scan to bring awareness to
                        sensations in your body. This practice helps with learning to make choices
                        from an embodied place.
                    </li>
                    <li>
                        <span>Options</span> – Based on the check-in and body scan Gerard will offer you 2 options for
                        bodywork or somatic practices that could be useful based on your specific
                        interests or challenges.
                    </li>
                    <li>
                        <span>Agreement</span> - You choose 1 somatic practice or type of bodywork. You and Gerard
                        agree on the boundaries.
                    </li>
                    <li>
                        <span>Integration</span> – The session ends with a few minutes of integration to ‘save’ the learning
                        experience in your nervous system (mind and body), thus forming new
                        healthy habits and expanding your potential for pleasure.
                    </li>
                </ol>
                <div>
                    <h2>
                        {t("heading-message")}
                    </h2>
                    <p>
                        {t("paragraph-message-1")}
                    </p>
                    <p>
                        <Trans t={t} i18nKey={"paragraph-message-2"}>
                            In 2019, I became a Certified Sexological Bodyworker by completing a six-month course at the Australian <a href="https://instituteofsomaticsexology.com/">Institute of
                                Somatic Sexology</a>, which was facilitated by master educators Deej Juventin and Uma Ayelet. In 2020, I continued my studies via a mentorship with Ron Stuart and Pono Stuart – two Certified Sexological Bodyworkers who are
                            associated with the Institute for the Study of Somatic Sex Education in Victoria, Canada.
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
                    <em>{t("paragraph-thanks")}</em>
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
