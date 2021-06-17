import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeOrder, newOrder } from '../actions/order'
import { validateFields } from './Validator'


class Checkout extends Component {

    state = {
        recipient: {
            value: '',
            validateOnChange: false,
            error: ''
        },
        streetAddress: {
            value: '',
            validateOnChange: false,
            error: ''
        },
        city: {
            value: '',
            validateOnChange: false,
            error: ''
        },
        state: {
            value: '',
            validateOnChange: false,
            error: ''
        },
        zipCode: {
            value: '',
            validateOnChange: false,
            error: ''
        },
        submitCalled: false,
        allFieldsValidated: false
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.closeOrder(this.state, this.props.user_id, this.props.order_id)
    }

    render(props){
        console.log("this.props from Checkout", this.props)
        const { recipient, streetAddress, city, state, zipCode, allFieldsValidated } = this.state;
        return(
            <div>
                <br></br><br></br>
                Confirm shipping information for your current order of ${this?.props?.order_total}:
                <br></br><br></br><br></br><br></br>
                <div className = "card-body">
                    {allFieldsValidated && (
                        <p className="text-success text-center">
                            Success, All fields are validated
                        </p>
                    )}
                <form onSubmit={this.handleSubmit}> {/* {evt => this.handleSubmit(evt)} */}
                    <label>Recipient:</label>
                    <input 
                        type='text' 
                        name='recipient' 
                        value = {recipient.value}  
                        placeholder='Recipient' 
                        className={classnames(
                            'form-control',
                            { 'is-valid': recipient.error === false },
                            { 'is-invalid': recipient.error}
                        )}
                        onChange={e => 
                            this.handleChange(validateFields.validateRecipient, e)
                        }
                        onBlur={e =>
                        this.handleBlur(validateFields.validateEmail, e)}
                    />
                    <br></br><br></br>
                    <label>Street address:</label>
                    <input type='text' placeholder='Street Address' value = {this.state.streetAddress} name='streetAddress' onChange={this.handleChange}/
                    ><br></br><br></br>
                    <label>City:</label>
                    <input type='text' placeholder='City' value = {this.state.city} name='city' onChange={this.handleChange}/>
                    <label>   State:</label>
                    <input type='text' placeholder='State' value = {this.state.state} name='state' onChange={this.handleChange}/>
                    <label>   Area Code:</label>
                    <input type='text' placeholder='Area Code' value = {this.state.zipCode} name='zipCode' onChange={this.handleChange}/>
                    <br></br><br></br><br></br>
                    <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                        onMouseDown={() => this.setState({ submitCalled: true })}
                    >
                        Submit Order
                    </button>
                </form>
                </div>
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