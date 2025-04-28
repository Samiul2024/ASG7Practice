import React from 'react';

const Footer = () => {
    return (
        <div className='py-32 bg-white  text-black mt-8'>

            {/* ul menus */}
            <div className="flex flex-col items-center gap-4 w-2/4 mx-auto ">
                <ul className='flex justify-around text-2xl'>
                    <a className="btn btn-ghost text-4xl"><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337] ml-[-8px]'>Gallery</span></a>

                </ul>
                <ul className='flex items-center justify-center gap-2 text-2xl'>
                    <a href="">Bid.</a>
                    <a href="">Win.</a>
                    <a href="">Own.</a>
                </ul>
                <ul className='flex justify-center gap-8 text-2xl'>
                    <a href="">Home</a>
                    <a href="">Auctions</a>
                    <a href="">Categories</a>
                    <a href="">How to works</a>
                </ul>
                <p>&copy; 2025 AuctionHub. All rights reserved.</p>

            </div>
        </div>
    );
};

export default Footer;