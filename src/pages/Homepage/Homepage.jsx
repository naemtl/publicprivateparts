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
    // <div className="homepage">
    //   <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
    //     <MouseParallaxChild factorX={0.3} factorY={0.5}>
    //       <img src={gxrLeft1} alt="" />
    //     </MouseParallaxChild>
    //     <MouseParallaxChild factorX={0.3} factorY={0.5}>
    //       <img src={gxrLeft1} alt="" />
    //     </MouseParallaxChild>
    //     <MouseParallaxChild factorX={0.3} factorY={0.5}>
    //       <img src={gxrLeft1} alt="" />
    //     </MouseParallaxChild>
    //     {/* <img
    //       className="homepage__background"
    //       src={gxrLeft2}
    //       alt="GXR homepage background"
    //     /> */}
    //     <MouseParallaxChild factorX={0.7} factorY={0.8}>
    //       <img src={gxrRight1} alt="" />
    //     </MouseParallaxChild>
    //   </MouseParallaxContainer>
    // </div>
    <div className="homepage">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            zIndex: 2,
          }}
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
              height: "100%",
            }}
          >
            <img height="50%" src={gxrLeft1} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.7}
            factorY={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
              height: "100%",
            }}
          >
            <img height="50%" src={gxrLeft2} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.9}
            factorY={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
              height: "100%",
            }}
          >
            <img height="50%" src={gxrLeft3} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.7}
            factorY={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
              height: "100%",
            }}
          >
            <img height="50%" src={gxrRight1} alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <img
          className="homepage__background"
          src={gxrDummy}
          alt="GXR homepage background"
        />
      </div>
    </div>
  );
};

export default Homepage;
