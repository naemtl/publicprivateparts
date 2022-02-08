import { Trans } from "react-i18next";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailchimpForm from "../../../components/MailchimpForm/MailchimpForm";

import './SubscribeHomepage.scss'

const SubscribeHomepage = ({ t }) => {
    const postUrl = "https://vimeo.us14.list-manage.com/subscribe/post?u=1ceba19e26d5a0f14904f257e&amp;id=0d6becde98"

    return (
        <div className="subscribe-homepage">
            <div className="subscribe-homepage__title">
                {t('subscribe.title')}
            </div>
            <div className="subscribe-homepage__text">
                <Trans t={t} i18nKey={'subscribe.desc'} />
            </div>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <MailchimpForm
                    />
                )}
            />
        </div>
    );
};

export default SubscribeHomepage;
