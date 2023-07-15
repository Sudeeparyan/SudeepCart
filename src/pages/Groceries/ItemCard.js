import React, { useState } from 'react'
import './Pantary.css'
// import Cart from '../Cart/Cart';

function ItemCard({item, currCategory, cartItems, setCartItems}) {
  item.category = currCategory;
  return (
    <div>
        <div className='pantary'>
            <div className='container'>
                <h2>{item.name}</h2>
                <img src={require(`../../images/groceries/${currCategory}/${item.name}.jpg`)}  alt={item.name}/>            
                <h4>Price - {item.price}</h4>
                <button className='btn btn-warning' onClick={()=> setCartItems((curr)=> [...curr, item])}>Add to Cart</button>            
            </div>
        </div>
        
    </div>
  )
}

export default ItemCard