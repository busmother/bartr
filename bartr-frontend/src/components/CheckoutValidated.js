import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeOrder } from '../actions/order'
import { clearItems } from '../actions/item'
import { FormErrors } from './FormErrors'

const initialState = {
    recipient: '',
    recipientValid: false,
    streetAddress: '',
    streetAddressValid: false,
    city: '',
    cityValid: false,
    state: '',
    stateValid: false,
    zipCode: '',
    zipCodeValid: false,
    formErrors: {recipient: '', streetAddress: '', city: '', state: '', zipCode: ''}
};

class CheckoutValidated extends Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let recipientValid = this.state.recipientValid;
        let streetAddressValid = this.state.streetAddressValid;
        let cityValid = this.state.cityValid;
        let stateValid = this.state.stateValid;
        let zipCodeValid = this.state.zipCodeValid

        switch(fieldName) {
            case 'recipient':
                recipientValid = value.length >= 2;
                fieldValidationErrors.recipient = recipientValid ? '' : ' Please add a recipient ';
                break;
            case 'streetAddress':
                streetAddressValid = value.length >= 2;
                fieldValidationErrors.streetAddress = streetAddressValid ? '' : ' Please add a Street Address ';
                break;
            case 'city':
                cityValid = value.length >= 2;
                fieldValidationErrors.city = cityValid ? '' : ' Please add a city ';
                break;
            case 'state':
                stateValid = value.length === 2;
                fieldValidationErrors.state = stateValid ? '' : ' Please add a state ';
                break;
            case 'zipCode':
                zipCodeValid = value.length === 5;
                fieldValidationErrors.zipCode = zipCodeValid ? '' : ' Please add a zip code ';
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                    recipientValid: recipientValid,
                    streetAddressValid: streetAddressValid,
                    cityValid: cityValid,
                    stateValid: stateValid,
                    zipCodeValid: zipCodeValid
                }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.recipientValid && this.state.streetAddressValid && this.state.cityValid && this.state.stateValid && this.state.zipCodeValid})
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.closeOrder(this.state, this.props.user_id, this.props.order_id)
        this.setState(initialState);
        this.props.clearItems()
    }

    render(){
        const { recipient, streetAddress, city, state, zipCode, allFieldsValidated } = this.state;
        return(
            <div>
                <br></br><br></br>
                Confirm shipping information for your current order:
                <br></br><br></br><br></br><br></br>
                <form onSubmit={e => this.handleSubmit(e)}>
                <div className = {`form-group ${this.errorClass(this.state.formErrors.recipient)}`}>
                    <label>Recipient:</label>
                    <input 
                        type='text' 
                        name='recipient' 
                        value = {recipient.value}  
                        placeholder='Recipient' 
                        className="form-control"
                        onChange={e => 
                            this.handleUserInput(e)
                        }
                    />
                </div>
                <br></br>
                    <div className = {`form-group ${this.errorClass(this.state.formErrors.streetAddress)}`}>
                    <label>Street address:</label>
                    <input 
                        type='text' 
                        name='streetAddress' 
                        value = {streetAddress.value}  
                        placeholder='Street Address' 
                        className="form-control"
                        onChange={e => 
                            this.handleUserInput(e)
                        }
                    />
                </div>
                <br></br>
                <div className = {`form-group ${this.errorClass(this.state.formErrors.city)}`}>
                    <label>City:</label>
                    <input 
                        type='text' 
                        name='city' 
                        value = {city.value}  
                        placeholder='City' 
                        className="form-control"
                        onChange={e => 
                            this.handleUserInput(e)
                        }
                    />
                </div>
                <br></br>
                <div className = {`form-group ${this.errorClass(this.state.formErrors.state)}`}>
                    <label>State:</label>
                    <input 
                        type='text' 
                        name='state' 
                        value = {state.value}  
                        placeholder='state' 
                        className="form-control"
                        onChange={e => 
                            this.handleUserInput(e)
                        }
                    />
                </div>
                <br></br>
                <div className = {`form-group ${this.errorClass(this.state.formErrors.zipCode)}`}>
                    <label>Zip Code:</label>
                    <input 
                        type='text' 
                        name='zipCode' 
                        value = {zipCode.value}  
                        placeholder='Zip Code' 
                        className="form-control"
                        onChange={e => 
                            this.handleUserInput(e)
                        }
                    />
                </div>
                <br></br>
                <div className = "panel panel-default">
                    <em><FormErrors formErrors={this.state.formErrors} /></em>
                </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!this.state.formValid}
                    >
                        Submit Order
                    </button>
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

export default connect(mapStateToProps, { closeOrder, clearItems })(CheckoutValidated)