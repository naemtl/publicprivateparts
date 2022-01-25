import OriginePersonnel from "./OriginePersonnel/OriginePersonnel";
import Footer from '../../components/Footer/Footer';

import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";
import goetheLogo from "../../assets/svg/goethe-logo.svg";
import odmLogo from "../../assets/svg/odm-logo.svg";
import sacdLogo from "../../assets/images/sacd-logo.png";
import purpleBodyVid from "../../assets/videos/purple-body.mp4";

import './OrigineDuMonde.scss'

const OrigineDuMonde = () => {
    return (
        <div className="origine">
            <div className="origine__header">
                <img className="origine__logo--header" src={odmLogo} alt='Origine du Monde' />
                <div className="origine__video-overlay--header"></div>
                <video className="origine__video-player--header"
                    src={purpleBodyVid}
                    autoPlay
                    muted
                    loop
                    controlsList="nofullscreen"
                    playsInline>
                </video>
            </div>
            <div className="origine__content">
                <div className="origine__text"> <em>The Origin of the World</em> may be the starting point for a global
                    history of
                    moral censorship in modern times. In Paris 1866, Gustave Courbet’s painting was hidden from public view
                    right after it had been completed. The work – which displays a woman’s abdomen, genitals, and legs – was
                    seen more as a pornographic object than as a work of art. It was sold and resold many times but remained
                    hidden until its first public exhibition in New York in 1988, when it became world famous. Then in 2011,
                    Facebook censored the work again, this time online, under its “Community Guidelines”. What would happen if
                    our human society could learn to accept the sensual body? What if we acknowledged the body as a precious
                    resource for cultivating sensation, connection, and empathy with each other, with the world and with
                    ourselves? </div>
                <div className="origine__text"> <em>Public / Private Parts ou L’Origine du monde</em> is a dance performance
                    and
                    video installation which looks beyond the limiting binaries of public/private and art/pornography. A
                    community of nine embodiment experts from various professional and cultural backgrounds create mindful body
                    practices to awaken the senses. Through live performances and documentary videos, the group of contemporary
                    dancers, sex workers, and sex educators, explore alone and expand together using the essential bodily
                    functions of touch, breath, sound, movement, and imagination. Intimate and innovative, their discoveries
                    reveal new, hopeful interconnections that could benefit us all. </div>
                <div className="origine__text">
                    Premiered June 10th, 2021 at the in Montréal, Canada.
                </div>
                <div className="origine__controls">
                    <a className="button" href="https://vimeo.com/542702988">
                        Trailer 1
                    </a>
                    <a className="button" href="https://vimeo.com/542702988">
                        Trailer 2
                    </a>
                    <a className="button" href="https://vimeo.com/542702988">
                        Trailer 3
                    </a>
                </div>
            </div>
            <div className="origine__embed"></div>
            <div className="origine__quote">
                <div className="origine__quote-container">
                    <div className="origine__quote-text"> “Having a naked body there apparently is no longer radical but at the same
                        time
                        there’s still a fight against it.” </div>
                    <div className="origine__quote-author">—Bishop Black, p*rn artist and video performer in “Public / Private Parts
                        ou
                        L’Origine du monde”</div>
                </div>
            </div>
            <OriginePersonnel />
            <div className="origine__logos-container">
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        Support
                    </div>
                    <img src={calqLogo}
                        alt="Conseil des arts et des lettres du Québec" />
                    <img src={ccaLogo} className="cca-logo" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="sacd-logo" alt="SACD Canada" />
                </div>
                <div className="origine__logos-row">
                    <div className="origine__personnel-heading">
                        Partners
                    </div>
                    <img src={goetheLogo} className="goethe-logo" alt="Goethe-Institut" />
                </div>
            </div>
            <div className="origine__personnel-row">
                Gerard X Reyes would like to thank all of the interviewees and dancers in Montréal, Berlin and Zürich who
                participated
                in the research for this work. Special thanks to Guy Cools, Julie Favreau and Andréane Leclerc for their
                guidance.
            </div>
            <Footer />
        </div>
    );
};

export default OrigineDuMonde;
