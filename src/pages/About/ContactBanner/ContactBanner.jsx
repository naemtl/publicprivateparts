import SocialsRow from '../../../components/SocialsRow/SocialsRow';

import './ContactBanner.scss'

const ContactBanner = ({ t }) => {
    return (
        <div className="contact-banner">
            <div className="contact-banner__title">{t("text-contact")}</div>
            <div className="contact-banner__email">
                gerardxreyes@gmail.com
            </div>
            <SocialsRow />
        </div>
    );
};

export default ContactBanner;
