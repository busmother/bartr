import React, { Component } from 'react'
import {connect} from 'react'
import {login} from '../actions/user'

class Login extends Component {

    state = {username: ""};

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render () {
        return(
            <div>
                <h3>Login:</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label for = "username">Username:</label>
                    <input
                        onChange = {this.handleChange}
                        id = "username"
                        name = "username"
                        value = {this.state.username}
                    />
                    <input type = "submit" value = "Sign in" />
                </form>
            </div>
        );
    }
}

export default connect(null, {login})(Login);