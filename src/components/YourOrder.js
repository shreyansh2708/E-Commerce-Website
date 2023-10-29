import React from 'react';
import "./YourOrder.css";

function YourOrder({ id, image, title, price, rating}) {

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                    </p>
                <p className="checkoutProduct_price">
                    <strong className='Rs'>Rs</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                  {rating}
                </div>
            </div>
        </div>
    )
}

export default YourOrder;