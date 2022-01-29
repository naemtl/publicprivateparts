import React from 'react';
import { Link } from 'react-router-dom';

import origineBanner from "../../../assets/videos/odm-banner.mp4";

import './OriginePreview.scss'

const OriginePreview = ({ t }) => {
    return (
        <div className='origine-preview'>
            <div className="origine-preview__logo">
                <div className="origine-preview__logo--upper">
                    <span>Public</span>
                    <span>Private </span>
                    <span>Parts</span>
                </div>
                <div className="origine-preview__logo--lower">
                    <span className="origine-preview__logo--ou">
                        <em>ou</em>
                    </span>
                    <span className="origine-preview__logo--odm">L’Origine du monde</span>
                </div>
            </div>
            <div className="origine-preview__section">
                <div className="origine-preview__content">
                    <div className="origine-preview__text">
                        {t('origine.desc')}
                    </div>
                    <div className="origine-preview__spacer"></div>
                    <Link className='origine-preview__button' to="/odm" >
                        {t('origine.anchor-1')}
                    </Link>
                </div>
                <video className="origine-preview__video" src={origineBanner} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
        </div>
    );
};

export default OriginePreview;
