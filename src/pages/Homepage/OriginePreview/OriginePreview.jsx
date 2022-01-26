import React from 'react';
import { Link } from 'react-router-dom';

import origineBanner from "../../../assets/videos/odm-banner.mp4";

import './OriginePreview.scss'

const OriginePreview = () => {
    return (
        <div className='origine-preview'>
            <div className="origine-preview__logo">
                <div className="origine-preview__text-upper">
                    <span>Public</span>
                    <span>Private </span>
                    <span>Parts</span>
                </div>
                <div className="origine-preview__text-lower">
                    <span className="origine-preview__text--ou">
                        <em>ou</em>
                    </span>
                    <span className="origine-preview__text--odm">L’Origine du monde</span>
                </div>
            </div>
            <div className="origine-preview__section">
                <div className="origine-preview__content">
                    <div className="origine-preview__text"> The first work in the Public / Private Parts series is an immersive
                        dance
                        performance and video installation which looks
                        beyond the limiting binaries of public/private and art/pornography. A community of nine embodiment
                        experts from various
                        professional and cultural backgrounds create mindful bodily practices to awaken the senses. Through live
                        performances
                        and documentary videos, the group of contemporary dancers, sex workers and sex educators explore alone
                        and expand
                        together using the essential functions of touch, breath, sound, movement, and imagination. Intimate and
                        innovative,
                        their discoveries reveal new, hopeful interconnections that could benefit us all.</div>
                    <div className="origine-preview__spacer"></div>
                    <Link className='origine-preview__button' to="/odm" >
                        Trailer and info
                    </Link>
                </div>
                <video className="origine-preview__video" src={origineBanner} autoPlay muted loop
                    controlsList="nofullscreen" playsInline=""></video>
            </div>
        </div>
    );
};

export default OriginePreview;
