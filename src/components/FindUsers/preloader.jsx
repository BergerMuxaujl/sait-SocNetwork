import React from "react";
import preloaderImg from "../../accets/jelly-fluid-loader.gif";

const Preloader = (prop) => {
    return (
        <div>
            <img src={preloaderImg} alt="preloader" style={prop.preloaderStyle}></img>
        </div>
    );
};

export default Preloader;
