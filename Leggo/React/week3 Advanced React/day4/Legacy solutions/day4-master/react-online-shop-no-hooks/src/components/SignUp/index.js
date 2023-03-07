import React, { useState,  useEffect } from 'react';
import { connect } from 'react-redux';
import { userValidationAction } from '../../store/actions/userValidationAction.js'
import { userRegistrationAction } from '../../store/actions/userRegistrationAction.js'
import { checkForm } from '../../helpers/checkForms.js';
import './style.css';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [code, setValidationCode] = useState('');
    const [username, setUserName] = useState('');
    const [firstName, setUserFirstName] = useState('');
    const [lastName, setUserLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [registerStep, setRegisterStep] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        formStepIndicator(0);
    }, [])

    const nextButtonHandler = async (event) => {
        event.preventDefault();
       
        if (registerStep === 0 ) {

            const formErrors = checkForm({ email: email})
            
            if(Object.keys(formErrors).length) setErrors({ ...formErrors })
            else {
                const errorsFromServer = await props.dispatch(userRegistrationAction({email: email}));
    
                if (errorsFromServer) setErrors({ ...errorsFromServer });
                else {
                    formStepIndicator(registerStep + 1);
                    setRegisterStep(registerStep + 1);
                }
            }

        }
        else if(registerStep < 2) {
            formStepIndicator(registerStep + 1);
            setRegisterStep(registerStep + 1); 
        }
        else {      
            const formErrors = checkForm({
                email: email,
                username: username,
                code: code,
                password: password,
                password_repeat: passwordRepeat,	
                first_name: firstName,	
                last_name: lastName
            })
            
            if(Object.keys(formErrors).length) setErrors({ ...formErrors })
            else {
                const errorsFromServer = await props.dispatch(userValidationAction({
                    email: email,
                    username: username,
                    code: code,
                    password: password,
                    password_repeat: passwordRepeat,	
                    first_name: firstName,	
                    last_name: lastName
                }));
                            
                if (errorsFromServer) setErrors({ ...errorsFromServer });
                else {
                    formStepIndicator(0);
                    setRegisterStep(0);
                    props.signUpButtonHandler(event, true);
                }
            }
        }
    }

    const formStepIndicator = (step) => {
        const steps = document.getElementsByClassName("step");
        for (let i = 0; i < steps.length; i++) {
        // remove active class from all form steps
        steps[i].className = steps[i].className.replace(" active", "");
        }
        // add the active class to the current form step
        steps[step].className += " active";
    }

    return (
        <>  
            <form className={`form-signup-container ${props.visibility ? '' : 'hidden'}`} >
                {
                    registerStep === 0 ?
                        <>
                            <h2>Sign Up</h2>
                            <div className="form-tab">
                                <input type="email" placeholder="E-mail" value={email} onChange={ event => setEmail(event.target.value) } />
                                { errors.hasOwnProperty('email') ? <em className="error"> { errors.email } </em> : null }
                                { errors.hasOwnProperty('detail') ? <em className="error"> { errors.detail } </em> : null }
                            </div>
                        </>
                    : null 
                }
                {
                    registerStep === 1 ?
                    <>
                        <div className="form-tab">
                            <h2>Congratulations</h2>
                            <p>We have sent a confirmation code to your email { email }</p>    
                        </div>
                    </>
                    : null 
                }
                {
                    registerStep === 2 ?
                    <>
                        <h2>Verification</h2>
                        <div className="form-tab">
                            <input type="text" placeholder="Code" value={code} onChange={ event => setValidationCode(event.target.value) } />
                            { errors.hasOwnProperty('code') ? <em className="error"> { errors.code } </em> : null }
                            { errors.hasOwnProperty('code_detail') ? <em className="error"> { errors.code_detail } </em> : null }
                            <input type="email" placeholder="E-mail" value={email} onChange={ event => setEmail(event.target.value) } />
                            { errors.hasOwnProperty('email') ? <em className="error"> { errors.email } </em> : null }
                            { errors.hasOwnProperty('email_detail') ? <em className="error"> { errors.email_detail } </em> : null }
                            <input type="text" placeholder="Username" value={username} onChange={ event => setUserName(event.target.value) } />
                            { errors.hasOwnProperty('username') ? <em className="error"> { errors.username } </em> : null }
                            { errors.hasOwnProperty('username_detail') ? <em className="error"> { errors.username_detail } </em> : null }
                            <input type="text" placeholder="First name" value={firstName} onChange={ event => setUserFirstName(event.target.value) } />
                            { errors.hasOwnProperty('first_name') ? <em className="error"> { errors.first_name } </em> : null }
                            <input type="text" placeholder="Last name" value={lastName} onChange={ event => setUserLastName(event.target.value) } />
                            { errors.hasOwnProperty('last_name') ? <em className="error"> { errors.last_name } </em> : null }
                            <input type="password" placeholder="Password" value={password} onChange={ event => setPassword(event.target.value) } />
                            { errors.hasOwnProperty('password') ? <em className="error"> { errors.password } </em> : null }
                            <input type="password" placeholder="Password repeat" value={passwordRepeat} onChange={ event => setPasswordRepeat(event.target.value) } />
                            { errors.hasOwnProperty('password_repeat') ? <em className="error"> { errors.password_repeat } </em> : null }
                        </div>
                    </>
                    : null 
                }
                <div className="btn-container" >
                    <button type="button" onClick={nextButtonHandler} >Next</button>
                </div>
    
                <div className="steps-container">
                    <span className="step"></span>
                    <span className="step"></span>
                    <span className="step"></span>
                </div>
            </form>
        </>
    )
}

const mapStateToProps = ({ userLoginReducer: { authenticated } }) => {
    return {
        authenticated: authenticated
    };
}

export default connect(mapStateToProps)(SignUp);