import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeOrder, newOrder } from '../actions/order'
import { classnames } from 'classnames'
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
                <form onSubmit={e => this.handleSubmit(e)}>
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
                        this.handleBlur(validateFields.validateRecipient, e)}
                    />
                    <br></br><br></br>
                    <label>Street address:</label>
                    <input 
                        type='text' 
                        name='streetAddress' 
                        value = {streetAddress.value}  
                        placeholder='Street Address' 
                        className={classnames(
                            'form-control',
                            { 'is-valid': streetAddress.error === false },
                            { 'is-invalid': streetAddress.error}
                        )}
                        onChange={e => 
                            this.handleChange(validateFields.validateStreetAddress, e)
                        }
                        onBlur={e =>
                        this.handleBlur(validateFields.validateStreetAddress, e)}
                    />
                    <br></br><br></br>
                    <label>City:</label>
                    <input 
                        type='text' 
                        name='city' 
                        value = {city.value}  
                        placeholder='City' 
                        className={classnames(
                            'form-control',
                            { 'is-valid': city.error === false },
                            { 'is-invalid': city.error}
                        )}
                        onChange={e => 
                            this.handleChange(validateFields.validateCity, e)
                        }
                        onBlur={e =>
                        this.handleBlur(validateFields.validateCity, e)}
                    />
                    <label>State:</label>
                    <input 
                        type='text' 
                        name='state' 
                        value = {state.value}  
                        placeholder='state' 
                        className={classnames(
                            'form-control',
                            { 'is-valid': state.error === false },
                            { 'is-invalid': state.error}
                        )}
                        onChange={e => 
                            this.handleChange(validateFields.validateState, e)
                        }
                        onBlur={e =>
                        this.handleBlur(validateFields.validateState, e)}
                    />
                    <label>Zip Code:</label>
                    <input 
                        type='text' 
                        name='zipCode' 
                        value = {zipCode.value}  
                        placeholder='Zip Code' 
                        className={classnames(
                            'form-control',
                            { 'is-valid': zipCode.error === false },
                            { 'is-invalid': zipCode.error}
                        )}
                        onChange={e => 
                            this.handleChange(validateFields.validateZipCode, e)
                        }
                        onBlur={e =>
                        this.handleBlur(validateFields.validateZipCode, e)}
                    />
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