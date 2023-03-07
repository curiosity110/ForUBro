import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../store/actions/userLoginAction.js';
import './style.css';
import { checkForm } from '../../helpers/checkForms.js';

const LogIn = (props) => {
    const [email, setEmailName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const submitLoginButtonHandler = async (event) => {
        event.preventDefault();
        

        const formErrors = checkForm({
            email: email,
            password: password
        })
    
        if(Object.keys(formErrors).length) setErrors({ ...formErrors })
        else {
            const errorsFromServer = await props.dispatch(userLogin({
                email: email,
                password: password
            }));

            if (errorsFromServer) setErrors({ ...errorsFromServer });
            else props.logInButtonHandler()
        }
    }

    return (
        <>
            <form className={`form-login-container ${props.visibility ? '' : 'hidden'}`}>
                <h2>Login</h2>
                <div className="form-tab">
                    <input type="email" placeholder="E-mail..." value={email} onChange={ event => setEmailName(event.target.value) } />
                    { errors.hasOwnProperty('email') ? <em className="error"> { errors.email } </em> : null }
                    <input type="password" placeholder="Password..." value={password} onChange={ event => setPassword(event.target.value) } />
                    { errors.hasOwnProperty('password') ? <em className="error"> { errors.password } </em> : null }
                    { errors.hasOwnProperty('detail') ? <em className="error"> { errors.detail } </em> : null }
                </div>
                
                <div className="btn-container" >
                    <button type="button" onClick={submitLoginButtonHandler} >Login</button>
                </div>
            </form>
        </>
    )
}

export default connect()(LogIn);