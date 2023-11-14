import { useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";

import gxrBackground from "../../assets/images/gxr-background.jpg";
import gxrLeft1 from "../../assets/images/gxr-left-1.png";
import ecstaticScreen from "../../assets/images/films-ecstatic.png";
import gxrLogo from "../../assets/images/gxr-logo.png";
import gxrPop from "../../assets/images/gxr-pop.png";
import gxrPpp from "../../assets/images/gxr-ppp.png";
import gxrRight1 from "../../assets/images/gxr-right-1.png";
import homepageLoop from "../../assets/videos/homepage-loop.mp4";

import "./Homepage.scss";

const Homepage = () => {
  const [showRightOverlay, setShowRightOverlay] = useState(false);
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);

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
                <div
                  className="homepage__overlay-container"
                  onMouseEnter={() => setShowRightOverlay(true)}
                  onMouseLeave={() => setShowRightOverlay(false)}
                >
                  {showRightOverlay && <div className="homepage__overlay" />}
                  <img className="homepage__img-1" src={gxrLeft1} alt="" />
                </div>
                <div
                  className="homepage__overlay-container"
                  onMouseEnter={() => setShowRightOverlay(true)}
                  onMouseLeave={() => setShowRightOverlay(false)}
                >
                  {showRightOverlay && (
                    <>
                      <div className="homepage__overlay" />
                      <img
                        className="homepage__logo--ppp"
                        src={gxrPpp}
                        alt=""
                      />
                    </>
                  )}
                  <img
                    className="homepage__img-2"
                    src={ecstaticScreen}
                    alt=""
                  />
                </div>
                <div
                  className="homepage__overlay-container"
                  onMouseEnter={() => setShowRightOverlay(true)}
                  onMouseLeave={() => setShowRightOverlay(false)}
                >
                  {showRightOverlay && <div className="homepage__overlay" />}
                  {/* <img className="homepage__img-3" src={gxrLeft3} alt="" /> */}
                  <video
                    className="homepage__video"
                    src={homepageLoop}
                    autoPlay={true}
                    muted
                    loop={true}
                    controlsList="nofullscreen"
                    controls={false}
                    playsInline
                  ></video>
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
                onMouseEnter={() => setShowLeftOverlay(true)}
                onMouseLeave={() => setShowLeftOverlay(false)}
              >
                {showLeftOverlay && (
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
