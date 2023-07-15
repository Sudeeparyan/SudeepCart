import React from 'react'
import './Pantary.css'
import data from './pantryStock.json';
import ItemCard from './ItemCard'
function Pantary({currCategory, cartItems, setCartItems}){
    let currItems=data[currCategory];
    return(
        <div>
            <div className='dealcomponent'>
                <div className='subdrop' >
                    <h2>Deal of the Day</h2>
                </div>
            </div>
            <div className='itemCardPantary'>
                {currItems.map((item)=><ItemCard item={item} currCategory = {currCategory} cartItems={cartItems} setCartItems={setCartItems} />)}
            </div>
        </div>
    )
}

export default Pantary
