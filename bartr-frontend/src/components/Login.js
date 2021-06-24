import { useDispatch } from 'react-redux'
import { addUser } from '.././actions/user'
import React, { useState } from 'react'

export default function LoginComponent(props) {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length){
        dispatch(addUser(name))
        }
        
    };

    return(
        <div>
            <h3>Please enter a name to continue:</h3>
            <form onSubmit = {handleSubmit}>
                <label for = "username">Username:</label>
                <input
                    onChange = {handleChange}
                    id = "username"
                    name = "username"
                    value = {name}
                />
                <input type = "submit" value = "Sign in" />
            </form>
        </div>
    );
}