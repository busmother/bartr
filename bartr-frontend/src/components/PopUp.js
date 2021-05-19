import React, { Component } from 'react'
import './popup-stylesheet.css'

class PopUp extends Component {

    handleClick = () => {
        this.props.togglePop();
    };

    render() {
        return (
            <div className="popup">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>&times;
                    </span>
                    <p>Hello this is the pop up!</p>
                </div>
            </div>
        );
    }

}

export default PopUp;
