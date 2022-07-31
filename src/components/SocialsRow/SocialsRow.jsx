import { FaYoutube, FaVimeoV, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import "./SocialsRow.scss"

const SocialsRow = () => {
    return (
        <div className="socials-row">
            <a href="https://instagram.com/gerardxreyes" rel="noreferrer" target="_blank">
                <FaInstagram />
            </a>
            <a href="https://www.facebook.com/GerardReyesArtist/" rel="noreferrer" target="_blank">
                <FaFacebookF />
            </a>
            <a href="https://vimeo.com/gerardxreyes" rel="noreferrer" target="_blank">
                <FaVimeoV />
            </a>
            <a href="https://www.youtube.com/channel/UCuOTqqnX4obf7HefTmQZyng" rel="noreferrer" target="_blank">
                <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/gerard-x-reyes-77952a120" rel="noreferrer" target="_blank">
                <FaLinkedinIn />
            </a>
        </div>
    )
}

export default SocialsRow