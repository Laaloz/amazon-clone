/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkout/checkoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate stripe secret witch allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                //stripeexpects the total in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("Client Secret Is -->", clientSecret);

    const handleSubmit = async (event) => {
        //stripe setup
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //paymentIntent is stripes payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replace("/orders");
            });
    };

    const handleChange = (event) => {
        //Listen changes in the cardElement
        //display any errors as the customer types their card details
        setDisabled(event.empty ? event.error.message : "");
        setError(event.error);
    };

    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1>
                    Checkout -{" "}
                    <Link to="/checkout">{basket?.length} items</Link>
                </h1>
                {/* section for user and adress */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="paymentAddress">
                        <p>{user?.email}</p>
                        <p>kompassi 1</p>
                        <p>40100, Jyväskylä</p>
                    </div>
                </div>
                {/* section for preview items */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="paymentItems">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* section for payment method */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Payment method</h3>
                    </div>
                    <div className="paymentDetails">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="paymentPriceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    suffix={"€"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            "buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {/* errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
