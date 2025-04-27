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
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
                    <p className="mb-5">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn btn-primary">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;