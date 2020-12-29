import React from 'react';
import './Login.css';
// import linkedUp from '../images/LinkedUp.png';

function Login() {
    return (
        <div className="login">
            {/* <h1>You're not logged in right now</h1> */}
            {/* <img src={linkedUp} alt=""/> */}
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_1R0Vks" alt=""/>

            <form>
                <input placeholder="Full Name {Required if registering}" type="text"/>
            </form>
        </div>
    )
}

export default Login
