import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./MailchimpForm.scss"

const MailchimpForm = ({ status, message, onValidated }) => {
    const { t } = useTranslation("homepage");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [languagePreference, setLanguagePreference] = useState("");

    return (
        <form className="mailchimp-form">
            <input
                type="text"
                name="FNAME"
                placeholder={t("subscribe.input-first-name")}
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                name="LNAME"
                placeholder={t("subscribe.input-last-name")}
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <select
                name="LANG"
                required
                defaultValue=""
                onChange={(e) => setLanguagePreference(e.target.value)}
            >
                <option hidden value="" disabled>
                    {t('subscribe.dropdown-default')}
                </option>
                <option value="English">English</option>
                <option value="Français">Français</option>
                <option value="Español">Español</option>
            </select>
            <input
                type="email"
                name="EMAIL"
                placeholder={t("subscribe.input-email")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="button"
                type="submit"
                name="subscribe"
                value={t("subscribe.button")}
            />
        </form>
    );
};

export default MailchimpForm;
