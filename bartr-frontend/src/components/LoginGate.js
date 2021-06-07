import React from 'react'
import ProductsContainer from './ProductsContainer'
import LoginComponent from './Login'
import { connect } from 'react-redux'
import { login } from '../actions/user'



class LoginGate extends React.Component {

    conditionalRender = () => {
        if (this.props.status === "resolved"){
            <div>
                <ProductsContainer />
            </div>
        }else{
            <div>
                <LoginComponent />
            </div>
        }
    }

    render() {
        console.log("this.props.status from LoginGate", this.props)
        return(
            <div>
                {this.conditionalRender()}
            </div>
        )
    }

}


const mapStateToProps = state => {
    console.log("state from LoginGate", state)

    return {
        status: state.user.status,
    }
}

export default connect(mapStateToProps, {login})(LoginGate)

// export default LoginGate