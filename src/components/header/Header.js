/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../header/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider.js";
import { auth } from "../../firebase";
import { animateScroll as scroll } from "react-scroll";

function Header() {
    const [{ basket, user }] = useStateValue();

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div scrollnav={useStateValue.toString()} className="header">
            <Link to="/" onClick={toggleHome}>
                <img
                    className="header-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                />
            </Link>

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <Link to={!user && "/login"}>
                    <div
                        onClick={handleAuthentication}
                        className="header-option"
                    >
                        <span className="header-optionLineOne">
                            Hello, {user ? user?.email : "guest"}
                        </span>
                        <span className="header-optionLineTwo">
                            {user ? "Sign Out" : "Sign in"}
                        </span>
                    </div>
                </Link>

                <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>

                <Link to="checkout">
                    <div className="header-optionBasket">
                        <ShoppingBasket />
                        <span className="header-basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
