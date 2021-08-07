/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useStateValue } from "../../../StateProvider.js";
import "../product/product.css";

function Product({ id, title, price, image, rating }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div>
            <div className="product">
                <div className="product-info">
                    <p>{title}</p>
                    <p className="product-price">
                        <small>EUR</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))}
                    </div>
                </div>
                <img src={image} />
                <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    );
}

export default Product;
