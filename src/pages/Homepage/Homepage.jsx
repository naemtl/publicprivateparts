import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import gxrBackground from "../../assets/images/gxr-background.jpg";
import gxrDummy from "../../assets/images/gxr-dummy.png";
import gxrLeft1 from "../../assets/images/gxr-left-1.png";
import gxrLeft2 from "../../assets/images/gxr-left-2.png";
import gxrLeft3 from "../../assets/images/gxr-left-3.png";
import gxrRight1 from "../../assets/images/gxr-right-1.png";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
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
          <div className="homepage__left-group">
            <img className="homepage__img-1" src={gxrLeft1} alt="" />
            <img className="homepage__img-2" src={gxrLeft2} alt="" />
            <img className="homepage__img-3" src={gxrLeft3} alt="" />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          className="homepage__parallax-child"
          factorX={0.3}
          factorY={0.3}
        >
          <img className="homepage__img-4" src={gxrRight1} alt="" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <img
        className="homepage__background"
        src={gxrDummy}
        alt="GXR homepage background"
      />
    </div>
  );
};

export default Homepage;
