import React from 'react';
import './Login.css';
// import linkedUp from '../images/LinkedUp.png';

function Login() {
    const register = () => {

    }

    const signIn = () => {

    }

    return (
        <div className="login">
            {/* <h1>You're not logged in right now</h1> */}
            {/* <img src={linkedUp} alt=""/> */}
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_1R0Vks" alt=""/>

            <form>
                <input placeholder="Full Name {Required if registering}" type="text"/>

                <input placeholder="Profile Picture URL (Optional)" type="text"/>

                <input placeholder="Email" type="email"/>

                <input placeholder="Password" type="password"/>

                <button type="submit" onClick={signIn}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
