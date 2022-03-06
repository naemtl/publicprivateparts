import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

import "./MailchimpForm.scss"

const MailchimpForm = ({ status, message, onValidated }) => {
    const { t } = useTranslation("homepage");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [languagePreference, setLanguagePreference] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const handleSubmit = e => {
        e.preventDefault()
        email &&
            firstName &&
            lastName &&
            languagePreference &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                LANG: languagePreference
            })
    }

    const displaySubmitMessage = () => (
        <div className="mailchimp-form__status-message">
            {status === "sending" && (
                <FaSpinner />
            )}
            {status === "error" && (
                <span>Error! Verify that you're using a valid email, and that you're not already signed up.</span>
            )}
            {status === "success" && (
                <span>Success! We'll be in touch.</span>
            )}
        </div>
    )

    const clearFields = () => {
        setEmail("")
        setFirstName("")
        setLastName("")
        setLanguagePreference("")
    }

    return (
        <div className="mailchimp-form">
            <form className="mailchimp-form__form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="mailchimp-form__input"
                    type="text"
                    name="FNAME"
                    placeholder={t("subscribe.input-first-name")}
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className="mailchimp-form__input"
                    type="text"
                    name="LNAME"
                    placeholder={t("subscribe.input-last-name")}
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <select
                    className="mailchimp-form__input"
                    name="LANG"
                    required
                    defaultValue=""
                    value={languagePreference}
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
                    className="mailchimp-form__input"
                    type="email"
                    name="EMAIL"
                    placeholder={t("subscribe.input-email")}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="mailchimp-form__input--submit button"
                    type="submit"
                    name="subscribe"
                    value={t("subscribe.button")}
                />
            </form>
            {displaySubmitMessage()}
        </div>
    );
};

export default MailchimpForm;
