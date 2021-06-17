import validator from 'validator'

class ValidateFields {

    validateRecipient(field){
        if(validator.isEmpty(field)){
            return 'Please fill out the recipient field'
        }
        return false;
    }

    validateStreetAddress(field){
        if(validator.isEmpty(field)){
            return 'Please fill out the street address field'
        }
        return false;
    }

    validateCity(field){
        if(validator.isEmpty(field)){
            return 'Please fill out the city field'
        }
        return false;
    }

    validateState(field){
        if(validator.isEmpty(field)){
            return 'Please fill out the state field'
        }
        return false;
    }

    validateZipCode(field){
        if(validator.isEmpty(field)){
            return 'Please fill out the zip code field'
        }
        return false;
    }
}


const validateFields = new ValidateFields();

export { validateFields }