import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, addUser } from '.././actions/user'

class Login extends Component {

    state = {
        username: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state.username)
        this.props.login(this.state.username)
        this.props.history.push('/')
    };

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

const mapStateToProps = state => {
    return{
        username: state.user.username
    }
}

export default connect(mapStateToProps, {login, addUser})(Login);