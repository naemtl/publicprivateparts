import { useState } from "react";

import SocialsRow from '../../../components/SocialsRow/SocialsRow';
import { CopyToClipboard } from "react-copy-to-clipboard";

import './ContactBanner.scss'

const ContactBanner = ({ t }) => {
    const [isCopied, setIsCopied] = useState(false)

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
        }, 1000);
    }

    return (
        <div className="contact-banner">
            <div className="contact-banner__copy-clipboard">
                <CopyToClipboard
                    text={"gerardxreyes@gmail.com"}
                    onCopy={onCopyText}
                >
                    <span className="contact-banner__title">
                        {t("text-contact")}
                    </span>
                </CopyToClipboard>
                <div className={`contact-banner__text-copied ${isCopied ? "contact-banner__text-copied--show" : "contact-banner__text-copied--hide"}`}>
                {t("text-copied")}!
                </div>
            </div>
            <SocialsRow />
        </div>
    );
};

export default ContactBanner;
