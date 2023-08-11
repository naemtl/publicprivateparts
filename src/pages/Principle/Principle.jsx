import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import popBanner from "../../assets/images/pop-banner.png";
import popTitle from "../../assets/images/pop-title.png";
import popIntro from "../../assets/images/pop-intro.png";
import popBg from "../../assets/images/pop-bg.png";
import popOneImg from "../../assets/images/pop-1.png";
import popTwoImg from "../../assets/images/pop-2.png";
import popThreeImg from "../../assets/images/pop-3.png";
import popFourImg from "../../assets/images/pop-4.png";
import popFiveImg from "../../assets/images/pop-5.png";
import popSixImg from "../../assets/images/pop-6.png";
import popSevenImg from "../../assets/images/pop-7.png";

import "./Principle.scss";
import YoutubeVimeoEmbed from "../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed";

const Principle = () => {
  const { t } = useTranslation("principle");

  return (
    <div className="principle">
      <div className="principle__header">
        <img
          className="principle__image--banner"
          alt="Page banner - Gerard posing"
          src={popBanner}
        />
        <img
          className="principle__image--title"
          alt="Page title"
          src={popTitle}
        />
      </div>
      <div className="principle__intro">
        <img
          className="principle__image--one"
          src={popIntro}
          alt="Gerard mirrored"
        />
      </div>
      <div>
        <img
          className="principle__image--banner"
          alt="Page background banner - Gerard performing"
          src={popBg}
        />
      </div>
      <div className="principle__text-section">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="principle__image-row">
        <img className="principle__image--four" alt="Gerard" src={popFourImg} />
        <img className="principle__image--five" alt="Gerard" src={popFiveImg} />
      </div>
      <div className="principle__row--trailers">
        <div className="principle__video-column">
          <YoutubeVimeoEmbed embedId="156622742" isVimeo={true} />
        </div>
        <div className="principle__video-column">
          <YoutubeVimeoEmbed embedId="2O4fdZZQV8Q" />
        </div>
      </div>
    </div>
  );
};

export default Principle;
