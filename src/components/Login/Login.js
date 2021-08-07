/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => alert(error.message));

        // firebase login
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));

        // firebase register
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="loginLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="loginContainer">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="loginSignInButton"
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signin-in you agree to FAKE AMAZON DEMO! conditions of
                    Use & sale. Please see out privacy Notice, out Cookies
                    Notice and our Interest-Based Ads
                </p>

                <button
                    type="submit"
                    onClick={register}
                    className="loginRegisterButton"
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
