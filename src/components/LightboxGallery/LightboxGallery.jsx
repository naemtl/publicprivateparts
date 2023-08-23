import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./LightboxGallery.scss";

const LightboxGallery = ({ parentName, photos }) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="lightbox-gallery">
      <div
        className={`lightbox-gallery__album lightbox-gallery__album--${parentName}`}
      >
        <PhotoAlbum
          layout="rows"
          photos={photos}
          padding={0}
          spacing={14}
          targetRowHeight={300}
          onClick={({ index: current }) => setIndex(current)}
        />
      </div>

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default LightboxGallery;
