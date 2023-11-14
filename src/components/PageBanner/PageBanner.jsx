import React from "react";

import "./PageBanner.scss";

const PageBanner = ({ background, children, extraClassName = "" }) => {
  return (
    <div
      style={{ backgroundImage: background }}
      className={`${extraClassName} page-banner`}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default PageBanner;
