import React from "react";

import "./FilmsPodcastEntry.scss";

const FilmsPodcastEntry = ({
  imgSrc,
  imgAlt,
  imgStyleClass = "",
  entryHeading,
  entryDesc,
  children,
  creditsHeading,
  creditsBody1,
  creditsBody2,
  spotifyLink = "",
  applePodLink = "",
}) => {
  return (
    <div className="films-podcast-entry">
      <div className="films-podcast-entry__player">
        {imgSrc && (
          <img
            className={`films-podcast-entry__image ${imgStyleClass}`}
            alt={imgAlt}
            src={imgSrc}
          />
        )}
        {children}
      </div>
      <h3 className="films-podcast-entry__heading">{entryHeading}</h3>
      <div className="films-podcast-entry__text">
        <div>{entryDesc}</div>
        {creditsBody1 && (
          <div className="films-podcast-entry__credits-container">
            <h5>{creditsHeading}</h5>
            <div className="films-podcast-entry__credits">
              <div>{creditsBody1}</div>
              <div>{creditsBody2}</div>
            </div>
          </div>
        )}
        {spotifyLink && applePodLink && (
          <div className="films-podcast-entry__links-container">
            <a href={spotifyLink}>Spotify</a>
            <a href={applePodLink}>Apple Podcasts</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmsPodcastEntry;
