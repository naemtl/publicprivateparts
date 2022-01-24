import { Link } from 'react-router-dom';

import ContactBanner from './ContactBanner/ContactBanner';

import gerardProfileImg from "../../assets/images/gerard-profile.jpg";
import gerardOverlapImg from "../../assets/images/gerard-overlap.jpg";
import gerardOneImg from "../../assets/images/gerard-1.jpg";
import gerardTwoImg from "../../assets/images/gerard-2.jpg";
import gerardThreeImg from "../../assets/images/gerard-3.jpg";
import gerardFourImg from "../../assets/images/gerard-4.jpg";
import gerardFiveImg from "../../assets/images/gerard-5.jpg";
import gerardSixImg from "../../assets/images/gerard-6.jpg";
import gerardSevenImg from "../../assets/images/gerard-7.jpg";
import gerardEightImg from "../../assets/images/gerard-8.jpg";

import './About.scss'

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <h1 className="about__heading--desktop">About <span className="desktop-only">Gerard X Reyes</span></h1>
                <div className="about__row about__row--one">
                    <img alt='Gerard' src={gerardProfileImg} />
                    <div className="about__heading--mobile">Gerard X Reyes</div>
                    <span>
                        For the past twenty years, Reyes’ artistic
                        practice has addressed the sensual and sexual body. Reyes is a non-binary (he/they), queer
                        Uruguayan-Canadian dancer, choreographer, Certified Sexological Bodyworker, Intimacy Coordinator and
                        Pioneer of the
                        Montreal Ballroom community.
                    </span>
                </div>
                <div className="about__row about__row--two">
                    <div className="imgContainer mobile-only">
                        <img alt='Gerard' src={gerardOverlapImg} />
                    </div>
                    <span>
                        As a dancer,
                        Reyes spent seven years as a member of the Compagnie Marie Chouinard (2006-07; 2009-13), for which they
                        performed eight works of the repertory, have performed on international tours, and received a Gemini
                        Award from the Academy of Canadian Cinema and Television for Best Performance in Chouinard’s film,
                        “bODY_rEMIX”. Reyes has performed extensively for many other choreographers including Jérôme Bel, Benoît
                        Lachambre, Bill T. Jones, Luther Brown and Amazon Leiomy Maldonado.
                    </span>
                    <div className="desktop-only">
                        <img alt="Gerard" className="imgOverlay1" src={gerardOneImg} width="224" height="223" />
                        <img alt='Gerard' src={gerardTwoImg} width="193" height="212" />
                    </div>
                </div>
                <div className="about__row about__row--three">
                    <img alt="Gerard" className="img3" src={gerardThreeImg} width="359" />
                    <div>
                        <span>
                            Their first solo work, <em>The Principle of Pleasure</em>, explores the themes of desire,
                            seduction
                            and control by melding together voguing, stripping, eccentricity and glamour. Set to original
                            remixes of songs by pop icon Janet Jackson, the solo premiered in 2015 at La Chapelle (Montreal) and
                            has since toured across Canada and Europe including Festival TransAmériques (Montréal), SummerWorks
                            (Toronto), P*rny Days (Zurich) and Tanzfabrik (Berlin).
                        </span>
                        <img alt="Gerard" className="imgOverlay2" src={gerardFourImg} width="290" />
                    </div>
                </div>
                <div className="about__row about__row--four"> <img alt="Gerard" className="img4" src={gerardFiveImg} width="314" />
                    <span>
                        In
                        2017 Reyes
                        pioneered Montreal's Kiki Ballroom Scene by leading weekly practices for local LGBTQ+ youth as well
                        as producing and hosting regular Kiki Balls including balls for Canada Pride (2017) and Fierté Montréal
                        (2018).<br /><br /> In 2019, Reyes completed a certification in Sexological Bodywork via the Institute of
                        Somatic Sexology (Australia). This certificate allows them to teach somatic sex education privately, and
                        assist in projects as an Intimacy Coordinator for stage and film. Through this practice, Reyes guides
                        people towards deeper embodiment and connection with their sensual self.
                    </span>
                    <div> <img alt="Gerard" className="img5" src={gerardSixImg} width="235" />
                        <img alt="Gerard" className="img6" src={gerardSevenImg} width="164" /> </div>
                </div>
                <div className="about__row about__row--five">
                    <div>
                        <strong><em>MORE ON The Principle of Pleasure</em></strong><br />– an immersive dance solo<br /><br />
                    </div>
                    <div className="about__row-content">
                        <div className="leftSide">
                            Reyes found pleasure in many places: Manhattan vogue balls, Portland strip clubs,
                            a Montreal trans bar and Berlin play
                            parties. Each place offered him an escape from social norms but each one also came with its own
                            restrictive house rules.
                            In “The Principle of Pleasure”, Reyes uses the theatre as a place capable of transcending limits to
                            share his first true
                            pleasure – dancing to the seductive songs of Janet Jackson.
                        </div>
                        <img alt="Gerard" className="mobile-only" src={gerardEightImg} width="199" style={{ maxWidth: "199px", marginLeft: "auto", marginRight: "auto" }} />
                        <div>
                            Voguing, stripping, glorifying eccentricity and embodying glamour open up the floor to exploring
                            the controversial power
                            of pleasure. Together performer and audience erase the borders that divide them to find ecstasy
                            within and between their
                            bodies.
                            <a href="https://vimeo.com/156622742" className="about__button" rel="noreferrer" target="_blank">
                                Trailer 1
                            </a>
                            <a href="https://www.youtube.com/watch?v=2O4fdZZQV8Q" className="about__button"
                                rel="noreferrer" target="_blank">
                                Trailer 2
                            </a>
                        </div>
                    </div>
                    <img alt="Gerard" className="desktop-only" src={gerardEightImg} width="199" />
                </div>
            </div>
            <div className="about__banner--bodywork">
                <span> Somatic Sex Education and Bodywork Sessions </span>
                <Link to="/bodywork" className="about__button">
                    Read more
                </Link>
            </div>
            <ContactBanner />
        </div>
    );
};

export default About;
