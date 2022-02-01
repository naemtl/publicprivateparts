import { useTranslation } from "react-i18next";
import { FaYoutube, FaVimeoV, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import './Footer.scss'

const Footer = ({ backgroundColor }) => {
    const { t } = useTranslation("footer")

    return (
        <div className={`footer ${backgroundColor ? backgroundColor : ''}`}>
            <div className="footer__column">
                <div>
                    <div className="footer__label">{t("text-contact")} Gerard</div>
                    <a className="footer__anchor--text" href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
                </div>
            </div>
            <div className="footer__column footer__column--socials">
                <div>
                    <div className="footer__label">{t("text-follow")} Gerard</div>
                    <a className="footer__anchor--text" href="https://twitter.com/gerardxreyes">@gerardxreyes</a>
                </div>
                <div className="footer__socials">
                    <a className="footer__anchor--icon" href="https://www.youtube.com/channel/UCuOTqqnX4obf7HefTmQZyng">
                        <FaYoutube />
                    </a>
                    <a className="footer__anchor--icon" href="https://vimeo.com/gerardxreyes">
                        <FaVimeoV />
                    </a>
                    <a className="footer__anchor--icon" href="https://www.facebook.com/GerardReyesArtist">
                        <FaFacebookF />
                    </a>
                    <a className="footer__anchor--icon" href="https://www.linkedin.com/in/gerard-x-reyes-77952a120">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className="footer__column">
                <div>
                    <div className="footer__label">{t("text-follow")} Public / Private Parts</div>
                    <a className="footer__anchor--text" href="/">@publicprivateparts</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
