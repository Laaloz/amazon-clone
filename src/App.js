/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51J8314BRKotOAzudOYwZqn4qSI99tlVY6ET2ShjRKuK3yk6hspMdF1Ur698AYinRIc1YReRFTl43OevwQcI0HPcj00k0GSXrZR"
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when app loads...
        auth.onAuthStateChanged((authUser) => {
            console.log("The user is -->", authUser);

            if (authUser) {
                // the user just logged in / was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                //the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        //BEM
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
