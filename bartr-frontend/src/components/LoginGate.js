import React from 'react'
import ProductsContainer from './ProductsContainer'
import LoginComponent from './Login'
import { connect } from 'react-redux'
import { login } from '../actions/user'


class LoginGate extends React.Component {

    conditionalRender = () => {

        if (this.props.status === "resolved"){
            return(
            <div>
                <ProductsContainer />
            </div>
            )
        }else if (this.props.status === "idle"){
            return(
            <div>
                <LoginComponent />
            </div>
            )
        }else{
            return(
            <div>
                <LoginComponent />
            </div>
            )
        }
    }

    render() {
        console.log('props from LoginGate', this.props)
        return(
            <div>
                {this.conditionalRender()}
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        status: state.user.status
    }
}

export default connect(mapStateToProps, {login})(LoginGate)