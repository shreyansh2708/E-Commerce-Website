import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { useStateValue } from './StateProvider';
import YourOrder from './YourOrder';
import { useNavigate } from 'react-router-dom';
function Orders() {

    const[{ basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const homepage = (e) => {
        basket.length = 0;
        navigate("/");
    }
  return (
    <div className='orders'>
            <h1>Your Orders</h1>
            {basket.map(item => (
            <YourOrder
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

            <button onClick={homepage}>Go To Home Page</button>
        </div>
  )
}

export default Orders;