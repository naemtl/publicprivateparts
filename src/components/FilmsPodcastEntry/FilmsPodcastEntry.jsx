import React from "react";

import "./FilmsPodcastEntry.scss";

const FilmsPodcastEntry = ({
  imgSrc,
  imgAlt,
  entryHeading,
  entryDesc,
  creditsHeading,
  creditsBody,
}) => {
  return (
    <div className="films-podcast-entry">
      <div className="films-podcast-entry__player">
        <img className="films-podcast-entry__image" alt={imgAlt} src={imgSrc} />
      </div>
      <h3 className="films-podcast-entry__heading">{entryHeading}</h3>
      <div className="films-podcast-entry__text">
        <div>{entryDesc}</div>
        <div className="films-podcast-entry__credits-container">
          <h5>{creditsHeading}</h5>
          <div className="films-podcast-entry__credits">{creditsBody}</div>
        </div>
      </div>
    </div>
  );
};

export default FilmsPodcastEntry;
