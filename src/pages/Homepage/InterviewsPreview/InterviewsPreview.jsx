import React from 'react';
import { Link } from 'react-router-dom';

import './InterviewsPreview.scss'

const InterviewsPreview = ({ t }) => {
    return (
        <div className='interviews-preview'>
            <div className="interviews-preview__videos">
                <div className="interviews-preview__videos-wrapper">
                    <div className="interviews-preview__title">
                        {t('interviews.title')}
                    </div>
                    <div className="interviews-preview__text">
                        {t('interviews.desc')}
                    </div>
                    <div className="interviews-preview__videos">
                        <div className="interviews-preview__videos-col">
                            <iframe src="https://www.youtube-nocookie.com/embed/9rH27gpU_40" title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="interviews-preview__video-player">
                            </iframe>
                            <div className="interviews-preview__text">Mareen</div>
                        </div>
                        <div className="interviews-preview__videos-col">
                            <iframe src="https://www.youtube-nocookie.com/embed/IIBsRHuYAq4" title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="interviews-preview__video-player">
                            </iframe>
                            <div className="interviews-preview__text">Bishop</div>
                        </div>
                    </div>
                    <Link className='interviews-preview__button' to="/interviews" >
                        {t('interviews.anchor-1')}
                    </Link>
                </div>
            </div>
        </div>);
};

export default InterviewsPreview;
