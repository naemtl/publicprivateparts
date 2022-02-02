import PropTypes from "prop-types";

import "./YoutubeVimeoEmbed.scss"

const YoutubeVimeoEmbed = ({ embedId, isVimeo }) => (
    <div className="youtube-embed">
        <iframe
            width="853"
            height="480"
            src={isVimeo ? `https://player.vimeo.com/video/${embedId}` : `https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeVimeoEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

YoutubeVimeoEmbed.defaultProps = {
    isVimeo: false
}

export default YoutubeVimeoEmbed;