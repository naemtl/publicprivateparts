import React from 'react';

import './InterviewsPreview.scss'

const InterviewsPreview = () => {
    return (
        <div className='interviews-preview'>
            <div className="interviews-preview__videos">
                <div className="interviews-preview__videos-wrapper">
                    <div className="interviews-preview__videos-title">Documentary Interviews</div>
                    <div className="interviews-preview__videos-text">
                        This series of interviews follows Gerard X Reyes as they meet with Berlin-based sex workers, sex
                        educators and artists
                        to ask for their perspectives on the sensual/sexual body. These interviews took place in Montreal,
                        Berlin and Zürich
                        between 2017 and 2019. Gerard was curious to better understand their experiences of working with
                        intimacy and to search
                        for links between these seemingly disparate professions. Meet 7 intriguing interviewees and be inspired
                        by their
                        refreshing views on relationships, sex and society.
                    </div>
                    <div className="interviews-preview__videos">
                        <div className="interviews-preview__videos-col">
                            <iframe src="https://www.youtube-nocookie.com/embed/9rH27gpU_40" title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="interviews-preview__video-player">
                            </iframe>
                            <div className="interviews-preview__videos-text"> Mareen </div>
                        </div>
                        <div className="interviews-preview__videos-col">
                            <iframe src="https://www.youtube-nocookie.com/embed/IIBsRHuYAq4" title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="interviews-preview__video-player">
                            </iframe>
                            <div className="interviews-preview__videos-text"> Bishop </div>
                        </div>
                    </div>
                    <a href="en-interviews.html" className="text-decoration-none">
                        <button className="button homepage__button--gerard">Watch videos</button>
                    </a>
                </div>
            </div>
        </div>);
};

export default InterviewsPreview;
