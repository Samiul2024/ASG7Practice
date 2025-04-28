import React from 'react';
import heroImg from '../../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/B5zQjSMW/Banner-min.jpg)",

            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content ">
                <div className="max-w-md flex flex-col justify-between items-start text-start ml-[-800px]">
                    <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
                    <p className="mb-5 text-2xl">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn text-black bg-white rounded-4xl">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;