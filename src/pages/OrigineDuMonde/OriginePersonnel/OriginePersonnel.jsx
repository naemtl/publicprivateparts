import { Trans } from "react-i18next";

import "./OriginePersonnel.scss";

const OriginePersonnel = ({ t }) => {
  return (
    <div className="origine-personnel">
      <h3 className="origine-personnel__heading personnel__heading--main">
        <em>{t("personnel.main-heading")}</em>
      </h3>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.coprod-heading-1")}</em>{" "}
        <span>{t("personnel.coprod-heading-2")}</span>
      </h3>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.live-performance-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.live-performance-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.video-heading")}</em>
      </h3>
      <div className="origine-personnel__text">{t("personnel.video-text")}</div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.comms-promotion-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.comms-promotion-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.residencies-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.residencies-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.support-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.support-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.partners-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.partners-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.international-distro-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.international-distro-text")}
      </div>
      <div>
        <Trans t={t} i18nKey={"personnel.text-contact-plan-b"}>
          PLEASE CONTACT{" "}
          <a
            className="origine-personnel__link"
            href="http://planbhamburg.com/#artists"
          >
            PLAN B
          </a>{" "}
          (HAMBURG, GERMANY) - <em>CREATIVE AGENCY FOR PERFORMING ARTS</em>
        </Trans>
      </div>
    </div>
  );
};

export default OriginePersonnel;
