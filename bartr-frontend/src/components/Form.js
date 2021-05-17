import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOrder } from './actions/addOrder'

class Form extends Component {

    state = {
        name: '',
        streetAddress: '',
        city: '',
        state: '',
        areaCode: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addOrder(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' placeholder='Name' value = {this.state.name} name='name' onChange={this.handleChange}/><br>
                    <label>Street address:</label>
                    <input type='text' placeholder='Street Address' value = {this.state.streetAddress} name='streetAddress' onChange={this.handleChange}/><br>
                    <label>City:</label>
                    <input type='text' placeholder='City' value = {this.state.city} name='city' onChange={this.handleChange}/>
                    <label>State:</label>
                    <input type='text' placeholder='State' value = {this.state.state} name='state' onChange={this.handleChange}/>
                    <label>Area Code:</label>
                    <input type='text' placeholder='Area Code' value = {this.state.areaCode} name='areaCode' onChange={this.handleChange}/>
                    <input type='submit'
                </form>
            </div>
        )
    }

}

export default connect(null, {addOrder})(Form)