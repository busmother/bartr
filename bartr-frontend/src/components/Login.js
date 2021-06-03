import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '.././actions/user'

class Login extends Component {

    state = {
        username: "Brad"
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username)
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
        username: state.userReducer.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        login
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);