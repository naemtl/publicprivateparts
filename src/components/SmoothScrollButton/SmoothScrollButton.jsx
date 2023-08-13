import React from "react";

import "./SmoothScrollButton.scss";

const SmoothScrollButton = ({ targetRef, label }) => {
  const handleClickToScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      onClick={() => handleClickToScroll(targetRef)}
      className="smooth-scroll-button"
      role="button"
    >
      {label}
    </div>
  );
};

export default SmoothScrollButton;
