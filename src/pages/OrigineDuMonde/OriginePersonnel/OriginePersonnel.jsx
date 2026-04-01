import { Trans } from "react-i18next";

import "./OriginePersonnel.scss";

const OriginePersonnel = ({ t }) => {
  return (
    <div className="origine-personnel">
      <h3 className="origine-personnel__heading personnel__heading--main">
        <p>
          <em>{t("personnel.main-heading-1")}</em>
        </p>
        <p>
          <em>{t("personnel.main-heading-2")}</em>
        </p>
        <p><em>Gerard X Reyes</em></p>
      </h3>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.coprod-heading-1")}</em>
      </h3>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.live-performers-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        <div>Pina Brutal</div>
        <div>Nica Rosés</div>
        <div>Gerard X Reyes</div>
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.video-performers-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        <div>Bishop Black</div>
        <div>Jasko Fide</div>
        <div>Jorgetheobscene</div>
        <div>Mara Morgen</div>
        <div>Rebecca Frances</div>
        <div>Gerard X Reyes</div>
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.live-performance-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.live-performance-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.video-installation-heading")}</em>
      </h3>
      <div className="origine-personnel__text">{t("personnel.video-installation-text")}</div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.comms-promotion-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.comms-promotion-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.world-premier-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        Usine C, Montréal
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.research-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        Festival Transamériques, Montréal
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.support-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.support-text")}
      </div>
      <h3 className="origine-personnel__heading">
        <em>{t("personnel.residencies-heading")}</em>
      </h3>
      <div className="origine-personnel__text">
        {t("personnel.residencies-text")}
      </div>
      {/* <h3 className="origine-personnel__heading">
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
      </div> */}
    </div>
  );
};

export default OriginePersonnel;
