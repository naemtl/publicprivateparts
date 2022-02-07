import { useTranslation } from "react-i18next";

import "./SubscribeForm.scss"

const SubscribeForm = () => {
    const { t } = useTranslation("homepage")
    return (
        <form
            className="subscribe-form"
            method="post" target="_blank">
            <input type="text" name="FNAME" placeholder={t("subscribe.input-first-name")} />
            <input type="text" name="LNAME" placeholder={t("subscribe.input-last-name")} />
            <select name="LANG" required>
                <option defaultValue={t('subscribe.dropdown-default')} disabled>
                    {t('subscribe.dropdown-default')}
                </option>
                <option defaultValue="English">English</option>
                <option defaultValue="Français">Français</option>
                <option defaultValue="Español">Español</option>
            </select>
            <input type="email" name="EMAIL" placeholder={t("subscribe.input-email")} required />
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_1ceba19e26d5a0f14904f257e_0d6becde98" tabIndex="-1" defaultValue="" />
            </div>
            <input className="button" type="submit" name="subscribe" value={t("subscribe.button")} />
        </form>
    );
};

export default SubscribeForm;
