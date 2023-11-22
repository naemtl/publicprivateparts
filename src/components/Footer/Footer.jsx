import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

import SocialsRow from "../SocialsRow/SocialsRow";

import "./Footer.scss";

const Footer = ({ backgroundColor }) => {
  const { t } = useTranslation("footer");

  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className={`footer ${backgroundColor ? backgroundColor : ""}`}>
      <div className="footer__column">
        <div>
          <div className="footer__label">{t("text-contact")} Gerard</div>
          <CopyToClipboard text={"gerardxreyes@gmail.com"} onCopy={onCopyText}>
            <span className="footer__email-span">gerardxreyes@gmail.com</span>
          </CopyToClipboard>
          <div
            className={`footer__text-copied ${
              isCopied
                ? "footer__text-copied--show"
                : "footer__text-copied--hide"
            }`}
          >
            {t("text-copied")}!
          </div>
        </div>
      </div>
      <div className="footer__column">
        <div className="footer__twitter-container">
          <div className="footer__label">{t("text-follow")} Gerard</div>
          <a
            className="footer__anchor--text"
            href="https://www.instagram.com/gerardxreyes/"
          >
            @gerardxreyes
          </a>
        </div>
        <SocialsRow />
      </div>
      <div className="footer__column">
        <div>
          <div className="footer__label">
            {t("text-follow")} Public / Private Parts
          </div>
          <a
            className="footer__anchor--text"
            href="https://www.instagram.com/public_private_parts/"
          >
            @public_private_parts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
