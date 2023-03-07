import React, { useState } from 'react';
import Shop from '../Shop';

import './index.css';

const LoginInfo = (props) => {
    const[isLogInVisible, setLoginVisibility] = useState(props.location.isLogInVisible);

    const logInButtonHandler = () => {
        setLoginVisibility(!isLogInVisible);
    }
    
    return (
        <>
            <Shop />
            <div className={`info-container${ isLogInVisible ? '' : 'hidden'}`}>
                <h3>Please go to the user menu and login to check your shopping cart.</h3>
                <div className="btn-container" >
                    <button type="button" onClick={logInButtonHandler} >Got it!</button>
                </div>
            </div>
        </>
    )
}

export default LoginInfo;