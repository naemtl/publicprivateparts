import Footer from '../../components/Footer/Footer';

import hollowBodyVid from "../../assets/videos/hollow-body.mp4";
import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";
import goetheLogo from "../../assets/svg/goethe-logo.svg";
import sacdLogo from "../../assets/images/sacd-logo.png";

import './Interviews.scss'

const Interviews = () => {
    return (
        <div className='interviews'>
            <div className="interviews__header">
                <div className="interviews__header-text">Documentary Interviews</div>
                <video className="interviews__video-header" src={hollowBodyVid} autoPlay muted loop controlsList="nofullscreen" playsInline></video>
                <div className="interviews__video-header-overlay"></div>
            </div>
            <div className="interviews__intro">
                Between 2017 and 2019 the artist and now somatic sex educator, Gerard X Reyes, began
                research for Public / Private Parts
                by conducting over 40 documentary interviews. These interviews took place in Montreal, Berlin, and Zürich with
                sex
                workers, sex educators and artists. Gerard was curious to better understand their experiences of working with
                intimacy
                and to search for links between these seemingly disparate professions. Meet seven intriguing interviewees and be
                inspired by their refreshing views on relationships, sex and society!
                <br /><br />
                The conversations are in English
                and French. Subtitles are available in English, French and Spanish.
                <br /><br />
            </div>
            <div className="interviews__videos">
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>Caritia : on perversion</h2>
                        Caritia is a queer person of colour, facilitator and performer with over 20 years of experience in the
                        practices of kink
                        and BDSM. Here Caritia dialogues about society’s relationship to kink and ‘perversion’.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/vu4VlfqlECE" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>Valentin : on porn as a cure</h2> Valentin Braun is a dancer and porn artist. In this interview he
                        shares his experience struggling with body dysmorphia
                        while he was a dancer and how performing in erotic films helped him overcome this.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/1PhKa24YoQY" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>KAy : on communication</h2>
                        KAy Garnellen is an escort, artist and porn performer. KAy opens up about the need for communication
                        with sexual
                        partners.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/ddnhgNwgJNE" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>KAy : on sex work as a trans man</h2> In this excerpt, KAy talks about finding his place in the sex
                        work industry as a trans man.
                    </div>
                    <iframe src="https://www.youtube-nocookie.com/embed/NqhzBKG94W8" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>Bishop : on sex and art</h2>
                        Bishop Black is a porn artist, drag and stage performer. Bishop explains the film genre known as “queer
                        feminist porn"
                        and raises the question, ‘Can sex be art?’

                    </div> <iframe src="https://www.youtube-nocookie.com/embed/IIBsRHuYAq4" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--center">
                    <div className="interviews__videos-text">
                        <h2>Jasko : on expanding porn</h2>
                        Jasko Fide is a porn performer. She discusses gender stereotypes and her wish to expand the limits of
                        porn.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/OQHlxfWdW9Q" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--left">
                    <div className="interviews__videos-text">
                        <h2>Pina : on power</h2>
                        Pina Brutal is a dancer, director, suspension artist, and ex-stripper. Pina compares dancing in the
                        strip club with the
                        empowering feeling she gets from suspension art.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/CZGj7oKBnXo" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
                <div className="interviews__videos-row interviews__videos-row--right">
                    <div className="interviews__videos-text">
                        <h2>Mareen : on anal pleasure</h2>
                        Mareen Scholl is a certified somatic sex educator, teacher of Sexological Bodywork and co-founder of the
                        ISB (Institute
                        for Somatic Education, Sexuality and Bodywork in Berlin). Here she talks about desires and consciously
                        exploring anal
                        pleasure.
                    </div> <iframe src="https://www.youtube-nocookie.com/embed/9rH27gpU_40" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="interviews__video-player"></iframe>
                </div>
            </div>
            <div className="interviewsThanks">
                <h2>PRODUCTION TEAM</h2>
                <div className="interviewsThanks--row">
                    <span>PRODUCER, DIRECTOR, INTERVIEWER, CO-EDITOR</span>
                    <span></span>
                    <span>GERARD X REYES</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>CAMERA OPERATORS</span>
                    <span></span>
                    <span>DAVID J. ROMERO, JULIE FAVREAU</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>EDITOR AND DRAMATURGICAL ADVICE</span>
                    <span></span>
                    <span>JULIE FAVREAU</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>COLOUR CORRECTION</span>
                    <span></span>
                    <span>MAX HILSAMER</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>SOUND CORRECTION</span>
                    <span></span>
                    <span>DEVON BATE</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>SUBTITLES</span>
                    <span></span>
                    <span>T & S COOP (EMMA ROUFS, ELLEN WARKENTIN, CAROLINA ALFARO CARVALHO)</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>TRANSCRIPTION (ENGLISH)</span>
                    <span></span>
                    <span>GERARD X REYES</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>TRANSLATION (FRENCH)</span>
                    <span></span>
                    <span>INGRID VALLUS</span>
                </div>
                <div className="interviewsThanks--row">
                    <span>TRANSLATION (SPANISH)</span>
                    <span></span>
                    <span>JULIA SAHAGÚN</span>
                </div>

                <div className="interviewsThanks--special">
                    Gerard would like to thank all the interviewees in Berlin, Zürich and Montréal who participated in the
                    research. Special
                    thanks to Julie Favreau, David J. Romero, Tyrone Harper and Denise Reyes for their guidance in the interview
                    process.
                </div>
            </div>
            <div className="interviewsLogos">
                <h2><em>SUPPORT</em></h2>
                <div className="interviewsLogos-row">
                    <img src={calqLogo} className="calq-logo" alt="Conseil des arts et des lettres du Québec" />
                    <img src={goetheLogo} className="goethe-logo" alt="Goethe-Institut" />
                </div>
                <div className="interviewsLogos-row">
                    <img src={ccaLogo} className="cca-logo" alt="Canada Council for the Arts" />
                    <img src={sacdLogo} className="sacd-logo" alt="SACD Canada" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Interviews;
