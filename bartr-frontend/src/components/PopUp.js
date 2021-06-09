import React, { Component } from 'react'
import './popup-stylesheet.css'
import LoginComponent from './Login'
import { connect } from 'react-redux'
import { login } from '../actions/user'

class PopUp extends Component {

    render() {
        return (
            <div className="popup">
                <div className="modal_content">
                    <p>Please enter a name to continue:</p>
                    <LoginComponent />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        status: state.user.status
    }
}

export default connect(mapStateToProps, {login})(PopUp)
