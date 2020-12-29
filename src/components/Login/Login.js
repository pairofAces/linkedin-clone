import React from 'react';
import './Login.css';
import linkedUp from '../images/LinkedUp.png';

function Login() {
    return (
        <div className="login">
            {/* <h1>You're not logged in right now</h1> */}
            <img src={linkedUp} alt=""/>

            <form>
                <input placeholder="Full Name {Required if registering}" type="text"/>
            </form>
        </div>
    )
}

export default Login
