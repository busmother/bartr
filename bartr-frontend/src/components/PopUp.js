import React, { Component } from 'react'
import './popup-stylesheet.css'
import LoginComponent from './Login'

export default class PopUp extends Component {

    render() {
        return (
                <div className="popup">
                <div className="modal_content">
                    <LoginComponent />
                </div>
            </div> 
        )
    }

}
