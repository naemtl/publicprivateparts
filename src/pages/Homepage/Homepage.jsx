import { useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";

import gxrBackground from "../../assets/images/gxr-background.jpg";
import gxrLeft1 from "../../assets/images/gxr-left-1.png";
import gxrLeft2 from "../../assets/images/gxr-left-2.png";
import gxrLeft3 from "../../assets/images/gxr-left-3.png";
import gxrLogo from "../../assets/images/gxr-logo.png";
import gxrPop from "../../assets/images/gxr-pop.png";
import gxrPpp from "../../assets/images/gxr-ppp.png";
import gxrRight1 from "../../assets/images/gxr-right-1.png";

import "./Homepage.scss";

const Homepage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="homepage">
      <div className="homepage__container">
        <MouseParallaxContainer
          className="homepage__parallax-container"
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <MouseParallaxChild
            className="homepage__parallax-child"
            factorX={0.3}
            factorY={0.3}
          >
            <Link to="/publicprivateparts">
              <div className="homepage__left-group">
                <div className="homepage__overlay-container">
                  {showOverlay && <div className="homepage__overlay" />}
                  <img className="homepage__img-1" src={gxrLeft1} alt="" />
                </div>
                <div
                  className="homepage__overlay-container"
                  onMouseEnter={() => setShowOverlay(true)}
                  onMouseLeave={() => setShowOverlay(false)}
                >
                  {showOverlay && (
                    <>
                      <div className="homepage__overlay" />
                      <img
                        className="homepage__logo--ppp"
                        src={gxrPpp}
                        alt=""
                      />
                    </>
                  )}
                  <img className="homepage__img-2" src={gxrLeft2} alt="" />
                </div>
                <div className="homepage__overlay-container">
                  {showOverlay && <div className="homepage__overlay" />}
                  <img className="homepage__img-3" src={gxrLeft3} alt="" />
                </div>
              </div>
            </Link>
          </MouseParallaxChild>
          <MouseParallaxChild
            className="homepage__parallax-child"
            factorX={0.3}
            factorY={0.3}
          >
            <Link to="/principleofpleasure">
              <div
                className="homepage__overlay-container"
                onMouseEnter={() => setShowOverlay(true)}
                onMouseLeave={() => setShowOverlay(false)}
              >
                {showOverlay && (
                  <>
                    <div className="homepage__overlay" />
                    <img className="homepage__logo--pop" src={gxrPop} alt="" />
                  </>
                )}
                <img className="homepage__img-4" src={gxrRight1} alt="" />
              </div>
            </Link>
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className="homepage__mobile-links">
          <Link to="/publicprivateparts">
            <img className="homepage__logo--mobile" src={gxrPpp} alt="" />
          </Link>
          <Link to="/principleofpleasure">
            <img className="homepage__logo--mobile" src={gxrPop} alt="" />
          </Link>
        </div>

        <div className="homepage__background-container">
          <img
            className="homepage__background"
            src={gxrBackground}
            alt="GXR homepage background"
          />
          <img className="homepage__logo" src={gxrLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
