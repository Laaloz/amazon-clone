import React from "react";
import CurrencyFormat from "react-currency-format";
import "../subtotal/subtotal.css";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import { useHistory } from "react-router";

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length}): <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"EUR"}
            />
            <button onClick={(e) => history.push("/payment")}>
                Proceed to checkout
            </button>
        </div>
    );
}

export default Subtotal;
