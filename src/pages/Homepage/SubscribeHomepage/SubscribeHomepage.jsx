import React from 'react';

import './SubscribeHomepage.scss'

const SubscribeHomepage = () => {
    return (
        <div className="subscribe-homepage">
            <div className="subscribe-homepage__title">Join the Movement</div>
            <div className="subscribe-homepage__text">
                We are creating more works in the Public / Private Parts series which will be available soon. Be the first
                to know about
                upcoming release dates and tours of the live performance Public / Private Parts ou L’Origine du monde. Sign
                up today!
            </div>
            <form className="subscribe-homepage__form"
                action="https://vimeo.us14.list-manage.com/subscribe/post?u=1ceba19e26d5a0f14904f257e&amp;id=0d6becde98"
                method="post" target="_blank">
                <input type="text" name="FNAME" placeholder="First name" />
                <input type="text" name="LNAME" placeholder="Last name" />
                <select name="LANG" required>
                    <option defaultValue="Language Preference" disabled>Language Preference</option>
                    <option defaultValue="English">English</option>
                    <option defaultValue="Français">Français</option>
                    <option defaultValue="Español">Español</option>
                </select>
                <input type="email" name="EMAIL" placeholder="Email*" required />
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <input type="text" name="b_1ceba19e26d5a0f14904f257e_0d6becde98" tabIndex="-1" defaultValue="" />
                </div>
                <input className="button" type="submit" name="subscribe" defaultValue="Keep me updated" />
            </form>
        </div>
    );
};

export default SubscribeHomepage;
