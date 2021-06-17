import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeOrder, newOrder } from '../actions/order'

class Checkout extends Component {

    state = {
        recipient: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.closeOrder(this.state, this.props.user_id, this.props.order_id)
        this.props.newOrder(this.props.user_id)
        // this.setState({
        //     recipient: '',
        //     streetAddress: '',
        //     city: '',
        //     state: '',
        //     zipCode: ''
        // })
    }


    render(props){
        console.log("this.props from Checkout", this.props)
        return(
            <div>
                <br></br><br></br>
                Confirm shipping information for your current order of ${this?.props?.order_total}:
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>Recipient:</label>
                    <input type='text' placeholder='Recipient' value = {this.state.recipient} name='recipient' onChange={this.handleChange}/><br></br><br></br>
                    <label>Street address:</label>
                    <input type='text' placeholder='Street Address' value = {this.state.streetAddress} name='streetAddress' onChange={this.handleChange}/><br></br><br></br>
                    <label>City:</label>
                    <input type='text' placeholder='City' value = {this.state.city} name='city' onChange={this.handleChange}/>
                    <label>   State:</label>
                    <input type='text' placeholder='State' value = {this.state.state} name='state' onChange={this.handleChange}/>
                    <label>   Area Code:</label>
                    <input type='text' placeholder='Area Code' value = {this.state.zipCode} name='zipCode' onChange={this.handleChange}/><br></br><br></br><br></br>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    const last_order_index = state?.orderReducer?.orders?.length - 1
    return{
        order_total: state?.orderReducer?.orders?.[last_order_index]?.attributes?.order_total,
        user_id: state?.user?.user?.data?.id,
        order_id: state?.orderReducer?.orders?.[last_order_index]?.id
    }
}

export default connect(mapStateToProps, { closeOrder, newOrder })(Checkout)