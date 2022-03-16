import React from 'react';
import { Trans } from "react-i18next";
import { Link } from 'react-router-dom';

import originePromo from "../../../assets/videos/odm-promo.mp4";

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
                    <p className="origine-preview__text">
                        <Trans t={t} i18nKey={'origine.desc'} />
                    </p>
                    <Link className='origine-preview__button' to="/odm" >
                        {t('origine.anchor-1')}
                    </Link>
                </div>
                <video className="origine-preview__video" src={originePromo} autoPlay muted loop
                    controlsList="nofullscreen" playsInline></video>
            </div>
        </div>
    );
};

export default OriginePreview;
