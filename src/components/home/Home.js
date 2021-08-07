/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../home/home.css";
import Product from "./product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    className="home-image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                />

                <div className="home-row">
                    <Product
                        id="1"
                        title="The Lean Startup"
                        price={9.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="Innova Disc Golf Starter Set – Colors May Vary 160-180g – DX Putter, Mid-Range, Driver"
                        price={33.98}
                        image="https://m.media-amazon.com/images/I/91+p-s-RxjL._AC_UL640_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="3"
                        title="Pokémon Assorted Cards, 50 Pieces"
                        price={7.86}
                        image="https://images-na.ssl-images-amazon.com/images/I/51cEng9OPTL.jpg"
                        rating={5}
                    />
                </div>
                <div className="home-row">
                    <Product
                        id="4"
                        title="Muc-Off MOX-904 Nano Tech Bike Cleaner - 1 Liter"
                        price={16.33}
                        image="https://m.media-amazon.com/images/I/31quvW10ARS._AC_UL640_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="5"
                        title="BREEZEWELL 2-in-1 Evaporative Air Cooler, Cooling Fan, Swamp Cooler w/ 3 Wind Speeds"
                        price={178.42}
                        image="https://m.media-amazon.com/images/I/61j6xdI8mMS._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="6"
                        title="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model"
                        price={125.75}
                        image="https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UL640_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home-row">
                    <Product
                        id="7"
                        title="Jade Face Roller - Rose Quartz 100% Natural Jade Stone"
                        price={8.48}
                        image="https://m.media-amazon.com/images/I/71nRYaqHvYL._AC_UL640_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="8"
                        title="Apple Watch Series 4 (GPS, 40MM) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
                        price={219.21}
                        image="https://m.media-amazon.com/images/I/517IoYaKCmL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
