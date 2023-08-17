import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./LightboxGallery.scss";

const LightboxGallery = ({ albumContainer, lightboxSlides }) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        renderContainer={albumContainer}
        photos={lightboxSlides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={lightboxSlides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default LightboxGallery;
