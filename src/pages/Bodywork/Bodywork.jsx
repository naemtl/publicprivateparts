import { Trans, useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";

import bodyworkBg from "../../assets/images/hands-on-head.jpg";

import "./Bodywork.scss";

const Bodywork = () => {
  const { t } = useTranslation("bodywork");

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

        <h2 className="bodywork__heading">{t("heading-coaching")}</h2>
        <p className="bodywork__text">{t("paragraph-coaching-1")}</p>
        <p className="bodywork__text">{t("paragraph-coaching-2")}</p>
        <p className="bodywork__text">{t("paragraph-coaching-3")}</p>

        <h2 className="bodywork__heading">{t("heading-offerings")}</h2>
        <h3 className="bodywork__heading">
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
            {t("list-training.certification")}
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

        <div className="bodywork__button--consult">
          <a
            href="https://calendly.com/gerardxreyes/20-minute-check-in"
            rel="noreferrer"
            target="_blank"
          >
            {t("anchor-book")}
          </a>
        </div>
        <p className="bodywork__text"><em>{t("text-book-note")}</em></p>
      </div>
      <Footer />
    </div>
  );
};

export default Bodywork;
