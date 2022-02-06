import './ContactBanner.scss'

import { FaYoutube, FaVimeoV, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactBanner = ({ t }) => {
    return (
        <div className="contact-banner">
            <div className="contact-banner__title">{t("text-contact")}</div>
            <div className="contact-banner__email">
                <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
            </div>
            <div className="contact-banner__links">
                <a href="https://vimeo.com/gerardxreyes">
                    <FaVimeoV />
                </a>
                <a href="https://www.youtube.com/channel/UCuOTqqnX4obf7HefTmQZyng">
                    <FaYoutube />
                </a>

                <a href="https://www.facebook.com/GerardReyesArtist/">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com/gerardxreyes">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/gerard-x-reyes-77952a120">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
};

export default ContactBanner;
