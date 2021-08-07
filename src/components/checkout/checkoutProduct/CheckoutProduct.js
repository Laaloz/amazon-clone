/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../checkoutProduct/checkoutProduct.css";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} />

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>EUR</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
