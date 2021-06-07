import { useSelector, useDispatch } from 'react-redux'
import { login, addUser } from '.././actions/user'
import React, { useState, useHistory } from 'react'



export default function LoginComponent(props) {

    const dispatch = useDispatch();
    const username = useSelector(state => state.user.username);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length){
        dispatch(addUser(name))
        dispatch(login(name))
        props.history.push("/")
        }
    };

    console.log("props from LoginComponent", props)

    return(
        <div>
            <h3>Login:</h3>
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

