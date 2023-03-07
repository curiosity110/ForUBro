import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logOutAction } from '../../store/actions/userLogoutAction';
import { emptyCart } from '../../store/actions/cartActions';
import SignUp from '../SignUp';
import LogIn from '../LogIn';

import './style.css';

import userIconLogin from '../../assets/userIconLogin.svg';
import userIconLogout from '../../assets/userIconLogout.svg';

 const UserMenu = (props) => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisibility] = useState(false);
    const [isLogInVisible, setLoginVisibility] = useState(false);

    const logOutHandler = (event) => {
        event.preventDefault();
        props.dispatch(emptyCart());
        props.dispatch(logOutAction());
        setOptionsVisible(false);
    }

    const signUpButtonHandler = (e, showLogin) => {
        if(showLogin) {
            setOptionsVisible(false);
            setLoginVisibility(true);
            setSignUpVisibility(!isSignUpVisible);
        }
        else {
            setOptionsVisible(false);
            if(!isSignUpVisible) setLoginVisibility(false);
            setSignUpVisibility(!isSignUpVisible);
        } 
    }

    const logInButtonHandler = () => {
        setOptionsVisible(false);
        if(!isLogInVisible) setSignUpVisibility(false);
        setLoginVisibility(!isLogInVisible);
    }

    return (
        <>
            <div className="user-container">
                                                
                <div className={`option-container ${isOptionsVisible ? '' : 'hidden'}`} >
                { !props.authenticated && (  
                    <>  
                        <button onClick={ (e) => signUpButtonHandler(e, false) }>
                            Sign Up
                        </button>
                        <button onClick={ logInButtonHandler }>
                            Login
                        </button>
                    </>
                )} 
                { props.authenticated && (   
                    <button onClick={ logOutHandler }>
                        Logout
                    </button>
                )} 
                </div>
                <div>
                    <button onClick={() => setOptionsVisible(!isOptionsVisible)}>
                        <img src={props.authenticated ? userIconLogin : userIconLogout } alt="user icon"/>
                    </button>
                </div>
            </div>
 
            {
                isSignUpVisible && (
                    <SignUp visibility={isSignUpVisible} signUpButtonHandler={signUpButtonHandler} />
                ) 
            }
            {
                isLogInVisible && (
                    <LogIn visibility={isLogInVisible} logInButtonHandler={logInButtonHandler} />
                ) 
            }
        </>
    )
}

const mapStateToProps = ({ userLoginReducer: { authenticated } }) => {
    return {
        authenticated: authenticated
    };
}

export default connect(mapStateToProps)(UserMenu);



