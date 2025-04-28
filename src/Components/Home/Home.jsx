import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Home = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const handleAddToFav = (product) => {
        console.log(product);
    }
    return (
        <div className='bg-white m-auto'>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div className='flex justify-around h-auto w-4/4 pb-32 bg-[#ebf0f5] text-black mx-auto'>
                <div>
                    <Products handleAddToFav={handleAddToFav}></Products>
                </div>
                <div>
                    <Cart></Cart>
                </div>
            </div>
            
            <div className=''>

            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;