import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ selectedProducts, price }) => {

    return (
        <div className=' bg-white shadow-md rounded-3xl py-8  mt-60 mx-auto overflow-hidden'>
            <h1 className='text-3xl px-20'>Favourite Items </h1>
            <hr />
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
                            <button className=''><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <hr className='mt-3' />

                    </div>)
                }
                <div className='flex justify-between px-6'>

                    <h1 className='text-3xl '>Total bids Amount</h1>
                    <h1 className='text-3xl '>${price} </h1>
                </div>
            </div>

        </div>
    );
};

export default Cart;