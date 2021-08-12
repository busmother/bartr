// import React, { useState, useEffect } from 'react';


const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const ButtonFunctional = (props) => {
    return (
        <button
            className="button"
            style = {buttonStyle}
            onClick={props.handleClick}>{props.label}
            </button>
    )
}

export default ButtonFunctional
