import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/PageBanner/PageBanner";

import bodyworkBg from "../../assets/images/hands-on-head.jpg";

import "./Bodywork.scss";

const Bodywork = () => {
  const { t } = useTranslation("bodywork");

  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="bodywork">
      <PageBanner background={`url(${bodyworkBg})`}>
        {t("page-title")}
        <div>{t("page-title-gerard")}</div>
      </PageBanner>
      <div className="bodywork__content">
        <h2 className="bodywork__heading bodywork__heading--society">
          {t("heading-society")}
        </h2>
        <p className="bodywork__text">{t("paragraph-society-1")}</p>
        <p className="bodywork__text">
          <Trans t={t} i18nKey={"paragraph-society-2"} />
        </p>
        <h2 className="bodywork__heading">{t("heading-somatic")}</h2>
        <p className="bodywork__text">
          <Trans t={t} i18nKey={"paragraph-somatic-1"} />
        </p>
        <p className="bodywork__text">
          <Trans t={t} i18nKey={"paragraph-somatic-2"} />
        </p>
        <h2 className="bodywork__heading">{t("heading-reasons")}</h2>
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
        <h2 className="bodywork__heading">{t("heading-session")}</h2>
        <ol>
          <li>
            <span>{t("list-session.check-in.label")}</span> –{" "}
            {t("list-session.check-in.desc")}
          </li>
          <li>
            <span>{t("list-session.body-scan.label")}</span> –{" "}
            {t("list-session.body-scan.desc")}
          </li>
          <li>
            <span>{t("list-session.options.label")}</span> –{" "}
            {t("list-session.options.desc")}
          </li>
          <li>
            <span>{t("list-session.agreement.label")}</span> –{" "}
            {t("list-session.agreement.desc")}
          </li>
          <li>
            <span>{t("list-session.integration.label")}</span> –{" "}
            {t("list-session.integration.desc")}
          </li>
        </ol>
        <div className="bodywork__message">
          <h2 className="bodywork__heading">
            <em>{t("heading-message")}</em>
          </h2>
          <p className="bodywork__text">
            <Trans t={t} i18nKey={"paragraph-message-1"} />
          </p>
          <p className="bodywork__text">
            <Trans t={t} i18nKey={"paragraph-message-2"} />
          </p>
          <p className="bodywork__text">{t("paragraph-message-3")}</p>
        </div>
        <p className="bodywork__text--accommodate">
          <em>{t("paragraph-pricing-2")}</em>
        </p>
        <div className="bodywork__copy-clipboard">
          <CopyToClipboard text={"gerardxreyes@gmail.com"} onCopy={onCopyText}>
            <span className="bodywork__text--contact">
              {t("anchor-contact")}
            </span>
          </CopyToClipboard>
          <div
            className={`${
              isCopied
                ? "bodywork__text-copied--show"
                : "bodywork__text-copied--hide"
            }`}
          >
            {t("text-copied")}!
          </div>
        </div>
        <div className="bodywork__button--consult">
          <a
            href="https://calendly.com/gerardxreyes/10-min-consultation-call-appel"
            rel="noreferrer"
            target="_blank"
          >
            {t("anchor-book")}
          </a>
        </div>
        <p className="bodywork__text">{t("paragraph-covid")}</p>
        <p className="bodywork__text">
          <Trans t={t} i18nKey={"paragraph-thanks"} />
        </p>
        <p className="bodywork__text">
          <em>&copy; 2014 ACSB. {t("paragraph-copyright")}</em>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Bodywork;
