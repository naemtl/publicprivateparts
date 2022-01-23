import React from 'react';

import pppLogo from "../../assets/01_landing/ppp-logo.png";

import "./Loader.scss";

const Loader = () => {
    return (
        <div className='loader'>
            <img src={pppLogo} alt="Public Private Parts logo" />
        </div>
    );
};

export default Loader;