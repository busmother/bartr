import React, { Component } from 'react'

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick.bind(this)
    }

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

export default Button