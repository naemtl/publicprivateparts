import Footer from "../../components/Footer/Footer";

import gxrBackground from "../../assets/images/gxr-background.jpg";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <img
        className="homepage__background"
        src={gxrBackground}
        alt="GXR homepage background"
      />
    </div>
  );
};

export default Homepage;
