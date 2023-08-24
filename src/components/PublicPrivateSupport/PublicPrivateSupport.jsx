import React from "react";

import calqLogo from "../../assets/svg/calq-logo.svg";
import ccaLogo from "../../assets/svg/cca-logo.svg";

import "./PublicPrivateSupport.scss";

const PublicPrivateSupport = () => {
  return (
    <div className="public-private-support">
      <img
        src={calqLogo}
        className="public-private-support__logo"
        alt="Conseil des arts et des lettres du Québec"
      />
      <img
        src={ccaLogo}
        className="public-private-support__logo"
        alt="Canada Council for the Arts"
      />
    </div>
  );
};

export default PublicPrivateSupport;
