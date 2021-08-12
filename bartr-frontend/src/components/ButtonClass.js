import React, { Component } from 'react'
import './button-stylesheet.css'

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class ButtonClass extends Component {

    render() {
        return (
            <button
                className="button"
                style = {buttonStyle}
                onClick={this.props.handleClick}>{this.props.label}
            </button>
        )
    }
}

export default ButtonClass