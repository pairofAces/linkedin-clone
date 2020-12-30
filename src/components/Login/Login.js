import React, { useState } from 'react';
import './Login.css';
import { auth } from '../Firebase/Firebase.js';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
// import linkedUp from '../images/LinkedUp.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }));
            });
        })
        .catch((error) => alert(error));
    };

    const signIn = (e) => {
        e.preventDefault();
        // auth
    }

    return (
        <div className="login">
            {/* <h1>You're not logged in right now</h1> */}
            {/* <img src={linkedUp} alt=""/> */}
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_1R0Vks" alt=""/>

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name {Required if registering}" type="text"/>

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile Picture URL (Optional)" type="text"/>

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>

                <button type="submit" onClick={signIn}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
