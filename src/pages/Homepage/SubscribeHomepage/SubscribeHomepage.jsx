import { Trans } from "react-i18next";

import './SubscribeHomepage.scss'

const SubscribeHomepage = ({ t }) => {
    return (
        <div className="subscribe-homepage">
            <div className="subscribe-homepage__title">
                {t('subscribe.title')}
            </div>
            <div className="subscribe-homepage__text">
                <Trans t={t} i18nKey={'subscribe.desc'} />
            </div>
            <form className="subscribe-homepage__form"
                action="https://vimeo.us14.list-manage.com/subscribe/post?u=1ceba19e26d5a0f14904f257e&amp;id=0d6becde98"
                method="post" target="_blank">
                <input type="text" name="FNAME" placeholder={"subscribe.input-first-name"} />
                <input type="text" name="LNAME" placeholder={"subscribe.input-last-name"} />
                <select name="LANG" required>
                    <option defaultValue={t('subscribe.dropdown-default')} disabled>
                        {t('subscribe.dropdown-default')}
                    </option>
                    <option defaultValue="English">English</option>
                    <option defaultValue="Français">Français</option>
                    <option defaultValue="Español">Español</option>
                </select>
                <input type="email" name="EMAIL" placeholder={"subscribe.input-email"} required />
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <input type="text" name="b_1ceba19e26d5a0f14904f257e_0d6becde98" tabIndex="-1" defaultValue="" />
                </div>
                <input className="button" type="submit" name="subscribe" defaultValue={t("subscribe.button")} />
            </form>
        </div>
    );
};

export default SubscribeHomepage;
