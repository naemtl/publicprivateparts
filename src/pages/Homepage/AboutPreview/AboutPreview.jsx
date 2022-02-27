import React from 'react'
import { Link } from 'react-router-dom';

import './AboutPreview.scss'

const AboutPreview = ({ t }) => {
    return (
        <div className="about-preview">
            <div className="about-preview__content">
                <div className="about-preview__column">
                    <div className="about-preview__title">
                        {t('about.title')}
                    </div>
                    <div className="about-preview__text">
                        {t('about.desc')}
                    </div>
                    <Link to="/about" className="about-preview__button">
                        {t('about.button-1')}
                    </Link>
                    <Link to="/bodywork" className="about-preview__button">
                        {t('about.button-2')}
                    </Link>
                </div>
            </div>
            <div className="about-preview__image"></div>
        </div>
    );
};

export default AboutPreview;
