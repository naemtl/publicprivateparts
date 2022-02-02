import React from 'react';
import { Link } from 'react-router-dom';

import YoutubeVimeoEmbed from "../../../components/YoutubeVimeoEmbed/YoutubeVimeoEmbed"

import './InterviewsPreview.scss'

const InterviewsPreview = ({ t }) => {
    return (
        <div className='interviews-preview'>

            <div className="interviews-preview__title">
                {t('interviews.title')}
            </div>
            <div className="interviews-preview__text">
                {t('interviews.desc')}
            </div>
            <div className="interviews-preview__videos">
                <div className="interviews-preview__videos-column">
                    <YoutubeVimeoEmbed embedId="9rH27gpU_40" />
                    <div className="interviews-preview__video-name">
                        Mareen
                    </div>
                </div>
                <div className="interviews-preview__videos-column">
                    <YoutubeVimeoEmbed embedId="IIBsRHuYAq4" />
                    <div className="interviews-preview__video-name">
                        Bishop
                    </div>
                </div>
            </div>
            <Link className='interviews-preview__button' to="/interviews" >
                {t('interviews.anchor-1')}
            </Link>
        </div>);
};

export default InterviewsPreview;
