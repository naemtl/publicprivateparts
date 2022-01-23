import React from 'react';

import './AboutPreview.scss'

const AboutPreview = () => {
    return (
        <div className="about-preview">
            <div className="about-preview__content">
                <div className="about-preview__column">
                    <div className="about-preview__title">About Gerard X Reyes</div>
                    <div className="about-preview__text">
                        Learn more about Gerard’s artistic journey as well as their Somatic Sex Education practice.
                    </div>
                    <a href="en-about.html" className="about-preview__button">
                        Read bio

                    </a>
                    <a href="en-about.html" className="about-preview__button">
                        Discover Somatic Sex Education
                    </a>
                </div>
            </div>
            <div className="about-preview__image"></div>
        </div>
    );
};

export default AboutPreview;
