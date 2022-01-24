import React from 'react';

import pppLogo from "../../assets/images/ppp-logo.png";

import "./Loader.scss";

const Loader = () => {
    return (
        <div className='loader'>
            <img src={pppLogo} alt="Public Private Parts logo" />
        </div>
    );
};

export default Loader;
