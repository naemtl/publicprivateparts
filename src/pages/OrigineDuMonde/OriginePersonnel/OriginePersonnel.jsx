import { Trans } from "react-i18next";
import "../../../assets/styles/personnel.scss"

const OriginePersonnel = ({ t }) => {
    return (
        <div className="personnel">
            <h3 className="personnel__heading personnel__heading--main">
                <em>{t("personnel.heading-main")}</em>
            </h3>
            <div className="personnel__row">
                <span><em>{t("personnel.roles.co-prod")} Festival Transamériques</em></span>
            </div>
            <h4 className="personnel__heading">{t("personnel.heading-video")}</h4>
            <div className="personnel__row">
                <span>{t("personnel.roles.director")}</span>
                <span></span>
                <span>Gerard X Reyes</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.co-director")}</span>
                <span></span>
                <span>Poppy Sanchez</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.editor-video")}</span>
                <span></span>
                <span>Julie Favreau</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.performers")}</span>
                <span></span>
                <span>Gerard X Reyes, Bishop Black, Jasko Fide, JorgeTheObscene, Mara Morgen, Rebecca Jackson</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.photography")}</span>
                <span></span>
                <span>Kevin Klein</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.second-camera")}</span>
                <span></span>
                <span>Jara Lopez Ballonga</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.sound-recordist")}</span>
                <span></span>
                <span>Antonio Vilchez Monge</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.set-designer")}</span>
                <span></span>
                <span>Jasmine Reimer</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.assistant-set")}</span>
                <span></span>
                <span>Kaitlyn Smeeth</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.video-install")}</span>
                <span></span>
                <span>Stéphane Gladyszewski</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.sound-editor")}</span>
                <span></span>
                <span>Devon Bate</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.colour-correction")}</span>
                <span></span>
                <span>Max Hilsamer</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.subtitles")}</span>
                <span></span>
                <span>T &amp; S Coop</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.subtitles-fr")}</span>
                <span></span>
                <span>Ingrid Vallus</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.camera-interviews")}</span>
                <span></span>
                <span>David J. Romero</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.vid-prod-manager")}</span>
                <span></span>
                <span>Elisa Hengen</span>
            </div>
            <h4 className="personnel__heading">{t("personnel.heading-live-performance")}</h4>
            <div className="personnel__row">
                <span>{t("personnel.roles.choreog")}</span>
                <span></span>
                <span>Gerard X Reyes</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.live-performers")}</span>
                <span></span>
                <span>Gerard X Reyes, Justin Gionet, Emmanuel Proulx</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.movement-research")}</span>
                <span></span>
                <span>Andréane Leclerc</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.drama-advice")}</span>
                <span></span>
                <span>Guy Cools</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.lighting-tech")}</span>
                <span></span>
                <span>Karine Gauthier</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.music")}</span>
                <span></span>
                <span>Bendik Giske</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.composition")}</span>
                <span></span>
                <span>Devon Bate</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.spatialization")}</span>
                <span></span>
                <span>Devon Bate, Dominic Jasmin</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.props-designer")}</span>
                <span></span>
                <span>Jasmine Reimer</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.vocal-coach")}</span>
                <span></span>
                <span>Ann Dyer</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.live-prod-manager")}</span>
                <span></span>
                <span>Alice Renucci, Lucie Juneau</span>
            </div>
            <h4 className="personnel__heading">{t("personnel.heading-comms-promotion")}</h4>
            <div className="personnel__row">
                <span>{t("personnel.roles.branding")}</span>
                <span></span>
                <span>Vina Goh</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.web-dev")}</span>
                <span></span>
                <span>Matthew Stinis</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.community-translation-es")}</span>
                <span></span>
                <span>Julia Sahagún</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.comms-translation-fr")}</span>
                <span></span>
                <span>Tiah Coxon, Alice Renucci</span>
            </div>
            <div className="personnel__row">
                <span style={{textTransform: 'uppercase'}}>{t("personnel.roles.comms-videographer")}</span>
                <span></span>
                <span>Juan David Padilla Vega</span>
            </div>
            <div className="personnel__row">
                <span>{t("personnel.roles.comms-photographer")}</span>
                <span></span>
                <span>Denis Farley</span>
            </div>
            <h4 className="personnel__heading">{t("personnel.heading-residencies")}</h4>
            <div className="personnel__row">
                Fabrik Potsdam, Tanzfabrik Berlin, Tanzhaus Zürich, Grand Studio (Bruxelles), Espace Marie Chouinard, Par B.L.eux/Benoît Lachambre, Compagnie Flak/José Navas, Montréal arts interculturels, Département de danse de l'UQAM, Musée d'art de Joliette
            </div>
            <h4 className="personnel__heading">{t("personnel.heading-international-distro")}</h4>
            <div>
                <Trans t={t} i18nKey={"personnel.text-contact-plan-b"}>
                    PLEASE CONTACT <a className="personnel__link" href="http://planbhamburg.com/#artists">PLAN B</a> (HAMBURG, GERMANY) - <em>CREATIVE AGENCY FOR PERFORMING ARTS</em>
                </Trans>
            </div>
        </div>
    );
};

export default OriginePersonnel;
