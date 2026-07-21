import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";

import bodyworkBg from "../../assets/images/hands-on-head.jpg";

import "./Bodywork.scss";

const IntroCallButton = ({ t }) => (
    <div className="bodywork__button--consult">
      <a
        href="https://calendly.com/gerardxreyes/20-minute-check-in"
        rel="noreferrer"
        target="_blank"
      >
        {t("anchor-book")}
      </a>
    </div>
  );

const Bodywork = () => {
  const { t } = useTranslation("bodywork");

  const faqList = useMemo(() => [
    { id: 1, header: t("section-faq.touch-required.question"), content: t("section-faq.touch-required.answer") },
    { id: 2, header: t("section-faq.nudity.question"), content: t("section-faq.nudity.answer") },
    { id: 3, header: t("section-faq.goals.question"), content: t("section-faq.goals.answer") },
    { id: 4, header: t("section-faq.arousal.question"), content: t("section-faq.arousal.answer") },
    { id: 5, header: t("section-faq.therapy.question"), content: t("section-faq.therapy.answer") },
    { id: 6, header: t("section-faq.partners.question"), content: t("section-faq.partners.answer") },
  ], [t]);

  return (
    <div className="bodywork">
      <PageBanner background={`url(${bodyworkBg})`}>
        {t("page-title")}
        <div>{t("page-title-gerard")}</div>
      </PageBanner>
      <div className="bodywork__content">
        <h2 className="bodywork__heading bodywork__heading--home-body">
          {t("heading-home-body")}
        </h2>
        <p className="bodywork__text">{t("paragraph-home-body-1")}</p>
        <p className="bodywork__text">{t("paragraph-home-body-2")}</p>
        <p className="bodywork__text">{t("paragraph-home-body-3")}</p>

        <IntroCallButton t={t} />

        <h2 className="bodywork__heading">{t("heading-coaching")}</h2>
        <p className="bodywork__text">{t("paragraph-coaching-1")}</p>
        <p className="bodywork__text">{t("paragraph-coaching-2")}</p>
        <p className="bodywork__text">{t("paragraph-coaching-3")}</p>

        <h2 className="bodywork__heading">{t("heading-offerings")}</h2>
        <h3 className="bodywork__subheading">
          {t("section-offerings.words.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.words.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.presence.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.presence.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.boundaries.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.boundaries.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.anatomy-pleasure.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.anatomy-pleasure.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.self-pleasure.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.self-pleasure.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.sensory-exploration.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.sensory-exploration.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.reconnection.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.reconnection.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.receiving.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.receiving.text")}</p>
        <h3 className="bodywork__heading">
          {t("section-offerings.role-expansion.heading")}
        </h3>
        <p className="bodywork__text">{t("section-offerings.role-expansion.text")}</p>
        
        <h2 className="bodywork__heading">{t("heading-boundaries")}</h2>
        <p className="bodywork__text">{t("paragraph-boundaries-1")}</p>
        <p className="bodywork__text">
          <Trans t={t} i18nKey={"paragraph-boundaries-2"} />
        </p>
        <h3 className="bodywork__text">{t("heading-touch")}:</h3>
        <ul className="bodywork__text">
          <li>
            {t("list-touch.agree-boundaries")}
          </li>
          <li>
            {t("list-touch.one-way")}
          </li>
          <li>
            {t("list-touch.clothed")}
          </li>
          <li>
            {t("list-touch.consent-withdraw")}
          </li>
          <li>
            {t("list-touch.genital-anal")}
          </li>
          <li>
            {t("list-touch.hygiene")}
          </li>
        </ul>
        <p className="bodywork__text">{t("paragraph-boundaries-3")}</p>

        <h2 className="bodywork__heading">{t("heading-session-length")}</h2>
        <p className="bodywork__text">{t("paragraph-session-length")}</p>

        <h2 className="bodywork__heading">{t("heading-about")}</h2>
        <p className="bodywork__text">{t("paragraph-about-1")}</p>
        <p className="bodywork__text">{t("paragraph-about-2")}</p>
        <p className="bodywork__text">{t("paragraph-about-3")}</p>

        <h3 className="bodywork__heading">{t("heading-training")}</h3>
        <ul className="bodywork__text">
          <li>
            <Trans t={t} i18nKey={"list-training.certification"} components={
              {
                instituteAnchor: (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content
                  <a className="bodywork__anchor--text" href="https://instituteofsomaticsexology.com/" target="_blank" rel="noopener noreferrer"/>
                )
              }
            } />
          </li>
          <li>
            {t("list-training.mentorship")}
          </li>
          <li>
            {t("list-training.practice")}
          </li>
        </ul>

        <h2 className="bodywork__heading">{t("heading-lets-talk")}</h2>
        <p className="bodywork__text">{t("paragraph-lets-talk")}</p>

        <IntroCallButton t={t} />
        
        <p className="bodywork__text"><em>{t("text-book-note")}</em></p>

        <div className="bodywork__faq">
          <h2 className="bodywork__heading">{t("heading-faq")}</h2>
          <h3 className="bodywork__heading">{t("heading-getting-started")}</h3>
          <h3 className="bodywork__heading">1. {t("list-getting-started.intro-call.heading")}</h3>
          <p className="bodywork__text">
            {t("list-getting-started.intro-call.text")}
          </p>
          <h3 className="bodywork__heading">2. {t("list-getting-started.intake-forms.heading")}</h3>
          <p className="bodywork__text">
            {t("list-getting-started.intake-forms.text")}
          </p>
          <h3 className="bodywork__heading">3. {t("list-getting-started.first-session.heading")}</h3>
          <p className="bodywork__text">
            {t("list-getting-started.first-session.text")}
          </p>
          <Accordion items={faqList} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bodywork;
