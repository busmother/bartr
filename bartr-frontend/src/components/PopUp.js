import React, { Component } from 'react'
import './popup-stylesheet.css'
import Form from './Form'
import LoginComponent from './Login'

class PopUp extends Component {

    handleClick = () => {
        this.state.togglePop();
    };

    render() {
        return (
            <div className="popup">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>&times;
                    </span>
                    <p>Enter your shipping info:</p>
                    <LoginComponent />
                </div>
            </div>
        );
    }

}

export default PopUp;
