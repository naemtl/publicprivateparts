import React from "react";

import "./PageBanner.scss";

const PageBanner = ({ background, children }) => {
  return (
    <div style={{ backgroundImage: background }} className="page-banner">
      <h1>{children}</h1>
    </div>
  );
};

export default PageBanner;
