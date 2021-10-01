import React, { useState } from 'react';
import "./Login.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router';
import Button from './UI/Button';
import People from './People';
import {  updateProfile } from "firebase/auth";

function Login() {
    const history = useHistory();
    const auth = getAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(null);

    async function createUser() {
        try {
            setError(null)
            const res = await createUserWithEmailAndPassword(auth, email, password, displayName).then(
                userCredential => {
                    const user = userCredential.user;
    
                }
            )
            await loginUser()            
        } catch(error) {
            setError(error.message)
        }
    }

    async function loginUser() {
        try {
            setError(null)
            await signInWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: displayName
            })
            localStorage.setItem('authenticated', true)
            history.push('/general');

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.email;
                    localStorage.setItem('email', uid);
                    localStorage.setItem('name', user.displayName)

                } else {
                    
                }
                });
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <div className="loginContainer">
            <form className="loginForm">
                <div className='loginDetails'>
                    <h1>Login</h1>
                    {error && <h2 style={{color: "tomato"}}>{error}</h2>}
                    <label>
                        <span className="label">
                            Username:
                        </span>
                        <input type="text" name="user" id='email' value={email} onChange={e => setEmail(e.target.value)} className="loginInput" />
                    </label>
                    <label>
                        <span className="label">
                            Name:
                        </span>
                        <input type="text" name="name" id='name' value={displayName} onChange={e => setDisplayName(e.target.value)} className="loginInput" />
                    </label>
                    <label>
                        <span className="label">
                            Password:
                        </span>
                        <input type="text" name="pass" id='password' value={password} onChange={e => setPassword(e.target.value)} className="loginInput" />
                    </label>
                </div>
                <div className='buttonCenter'>
                    <Button type="button" margins onClick={createUser} >Register</Button>
                    <Button type="button" margins onClick={loginUser} >Login</Button>
                </div>
                </form>
        </div>
    );
}

export default Login;