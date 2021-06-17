import validator from 'validator'

class ValidateFields {

    validateGeneral(field){
        if(validator.isEmpty(field)){
            return 'Please fill out this field'
        }
        return false;
    }
}

const validateFields = new ValidateFields();

export { validateFields }