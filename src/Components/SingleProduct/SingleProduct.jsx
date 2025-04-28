import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const SingleProduct = ({ product, handleAddToFav }) => {
    const [status, setStatus] = useState(false);
    const { id, title, currentBidPrice, timeLeft, image } = product;

    const handleSelect = () => {
        handleAddToFav(product, currentBidPrice)
        // console.log(currentBidPrice);
        setStatus(true)
    }
    // console.log(product);
    return (
        <tr className='border-b'>
            <td className="py-3 px-6">
                <img src={image} alt={title} className="h-16 w-24 object-cover rounded" />
            </td>
            <td className="py-3 px-6 font-semibold">{title}</td>
            <td className="py-3 px-6 text-blue-600 font-bold">${currentBidPrice}</td>
            <td className="py-3 px-6">{timeLeft}</td>
            <td className="py-3 px-6">
                <button
                    disabled={status}
                    onClick={handleSelect}
                    className={`text-2xl ${status ? 'text-red-500 cursor-not-allowed' : 'text-gray-400 border-black cursor-pointer'}`}
                ><FontAwesomeIcon icon={faHeart} />
                </button>
            </td>
        </tr>

    );
};

export default SingleProduct;