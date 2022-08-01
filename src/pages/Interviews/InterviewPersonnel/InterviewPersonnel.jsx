import "../../../assets/styles/personnel.scss"

const InterviewPersonnel = ({ t }) => {
    return (
        <div className="personnel">
            <h2 className="personnel__heading"><em>{t("main.heading-production")}</em></h2>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.prod-director")}</span>
                <span></span>
                <span>Gerard X Reyes</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.camera-op")}</span>
                <span></span>
                <span>David J. Romero, Julie Favreau</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.editor-drama")}</span>
                <span></span>
                <span>Julie Favreau</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.colour")}</span>
                <span></span>
                <span>Max Hilsamer</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.sound")}</span>
                <span></span>
                <span>Devon Bate</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.subtitles")}</span>
                <span></span>
                <span>T &amp; S Coop (Emma Roufs, Ellen Warkentin, Carolina Alfaro Carvalho)</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.transcription-en")}</span>
                <span></span>
                <span>Gerard X Reyes</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.translation-fr")}</span>
                <span></span>
                <span>Ingrid Vallus</span>
            </div>
            <div className="personnel__row">
                <span className="personnel__role--interview">{t("prod-roles.translation-es")}</span>
                <span></span>
                <span>Julia Sahagún</span>
            </div>

            <div className="personnel__row--special">
                {t("main.text-thanks")}
            </div>
        </div>
    );
};

export default InterviewPersonnel;
