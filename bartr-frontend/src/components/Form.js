import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: '',
        streetAddress: '',
        city: '',
        state: '',
        areaCode: ''
    }

    handleChange = (e) => {}

    render(){
        return(
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' placeholder='Name' value = {this.state.name} onChange={this.handleChange}></input>
                    <label>Street address</label>
                    <input type='text' placeholder='Street Address' value = {this.state.streetAddress} onChange={this.handleChange}></input>
                    <label>City</label>
                    <input type='text' placeholder='City' value = {this.state.city} onChange={this.handleChange}></input>
                    <label>State</label>
                    <input type='text' placeholder='State' value = {this.state.state} onChange={this.handleChange}></input>
                    <label>Area Code</label>
                    <input type='text' placeholder='Area Code' value = {this.state.areaCode} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

}

export default Form