import React from 'react';

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
                    <a href="en-about.html" className="about-preview__button">
                        {t('about.button-1')}
                    </a>
                    <a href="en-about.html" className="about-preview__button">
                        {t('about.button-2')}
                    </a>
                </div>
            </div>
            <div className="about-preview__image"></div>
        </div>
    );
};

export default AboutPreview;
