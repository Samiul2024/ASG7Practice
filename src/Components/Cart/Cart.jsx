import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ selectedProducts, price, handleDelete }) => {

    return (
        <div className=' bg-white shadow-md rounded-3xl py-8  mt-60 mx-auto overflow-hidden'>
            <h1 className='text-3xl px-20 pb-4'><FontAwesomeIcon icon={faHeart} /> Favourite Items </h1>
            <hr />

            {/* no favs added yet message */}
            {selectedProducts.length === 0 ? (
                <div className='flex flex-col items-center justify-around py-12 text-center gap-6'>
                    <h3 className='text-2xl font-medium'>No favorites yet</h3>
                    <p>Click the heart icon on any item to add it to your favorites</p>
                </div>

            ) : (
                <div>
                    {
                        selectedProducts.map(p => <div key={p.id} className='p-3'>
                            <div className='flex justify-between items-start gap-6'>
                                <img className='w-32' src={p.image} alt="" />
                                <div className='flex flex-col'>
                                    {p.title}
                                    <div className='flex gap-6 py-3'>
                                        ${p.currentBidPrice}
                                        <p>Bids:{p.bidsCount}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(p.id, p.currentBidPrice)} className=''><FontAwesomeIcon icon={faXmark} /></button>
                            </div>
                            <hr className='mt-3' />

                        </div>)
                    }
                    {/* <div className='flex justify-between px-6'>

                        <h1 className='text-3xl '>Total bids Amount</h1>
                        <h1 className='text-3xl '>${price} </h1>
                    </div> */}
                </div>
            )}

            {/* total bids amount */}
            <div className='flex justify-between px-6'>

                <h1 className='text-3xl '>Total bids Amount</h1>
                <h1 className='text-3xl '>${price} </h1>
            </div>
        </div>
    );
};

export default Cart;