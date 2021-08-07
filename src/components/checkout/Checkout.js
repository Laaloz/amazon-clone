/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useStateValue } from "../../StateProvider.js";
import "../checkout/checkout.css";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />

                <div>
                    <h3>hello, {user?.email}</h3>
                    <h2 className="checkout-title">
                        Your Orders - {basket?.length}
                    </h2>

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

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
