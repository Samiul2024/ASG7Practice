import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Home = () => {
    const [price, setPrice] = useState(0)
    const [selectedProducts, setSelectedProducts] = useState([]);


    const handleAddToFav = (product, currentBidPrice) => {
        setPrice(price + currentBidPrice);
        setSelectedProducts([...selectedProducts, product]);
        toast.success(`
            ${product.title} Added to favourites !
            `,{
                position:"top-right",
                autoClose:5000,
                draggable:true,

            })

    }

    const handleDelete = (id, productPrice) => {
        // console.log(typeof productPrice);
        setPrice(price - productPrice);
        const remainingProducts = selectedProducts.filter(p => p.id !== id);
        setSelectedProducts(remainingProducts);
    }
    // console.log(selectedProducts);
    return (
        <div className='bg-white m-auto'>
            <Navbar selectedProducts={selectedProducts}></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div className='flex justify-center h-auto  pb-32 bg-[#ebf0f5] text-black mx-auto'>
                <div className='flex gap-6'>
                    <Products handleAddToFav={handleAddToFav}></Products>
                    <Cart selectedProducts={selectedProducts} price={price} handleDelete={handleDelete}></Cart>
                </div>
                <div>
                </div>
            </div>

            <div className=''>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;