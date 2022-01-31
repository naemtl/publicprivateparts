import './ContactBanner.scss'

const ContactBanner = ({ t }) => {
    return (
        <div className="contact-banner">
            <div className="contact-banner__inner">
                <div className="contact-banner__title">{t("text-contact")}</div>
                <div className="contact-banner__email">
                    <a href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
                </div>
                <div className="contact-banner__links">
                    <div style={{ textAlign: "left" }}> <a href="https://vimeo.com/gerardxreyes">Vimeo</a>
                        <br />
                        <a href="https://www.youtube.com/channel/UCuOTqqnX4obf7HefTmQZyng">YouTube</a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/GerardReyesArtist/">Facebook</a>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <a href="https://instagram.com/gerardxreyes">Instagram</a>
                        <br />
                        <a href="https://www.linkedin.com/in/gerard-x-reyes-77952a120">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
