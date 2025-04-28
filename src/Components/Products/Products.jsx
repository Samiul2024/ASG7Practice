import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/singleProduct';
// import SingleProduct from '../SingleProduct/SingleProduct';

const Products = ({ handleAddToFav }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("./Products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <div className='w-2/3 mb-4'>
            <div className="max-w-7xl  mx-auto  px-4 ">
                <div className='mb-8 my-32 flex  flex-col gap-5'>
                    <h1 className="text-3xl font-medium text-start ">Active Auctions</h1>
                    <p className="text-xl font-normal text-start ">Discover and bid on extraordinary items</p>
                </div>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="border-b">
                            <tr>
                                <th className="py-3 px-6 text-left">Items</th>
                                <th className="py-3 px-6 text-left"></th>
                                <th className="py-3 px-6 text-left">Current Bid</th>
                                <th className="py-3 px-6 text-left">Time Left</th>
                                <th className="py-3 px-6 text-left">Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map((p) => <SingleProduct key={p.id}
                                    product={p}
                                    handleAddToFav={handleAddToFav}
                                ></SingleProduct>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;