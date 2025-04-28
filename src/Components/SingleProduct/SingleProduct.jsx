import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
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
            <td className="py-3 px-6"> <button disabled={status} onClick={handleSelect}><FontAwesomeIcon icon={faHeart} /> </button></td>
        </tr>

    );
};

export default SingleProduct;