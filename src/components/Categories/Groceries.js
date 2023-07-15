import React from 'react'
import Pantary from '../../pages/Groceries/Pantary'
import { useState } from 'react';
import './Groceries.css'
function Groceries({cartItems, setCartItems,currCategory,setcurrCategory}) {
  // const [currCategory,setCurrCategory]=useState("fruits")
  return (
    <>
      <div>
        <h2>Welcome to Groceries Shop !</h2>
        <div id='menu'>
          <ul className='nav navbar-nav greybg sidenav'>
            <li>
              <div onClick={()=>setcurrCategory("fruits")}>Fruits</div>
              <div onClick={()=>setcurrCategory("vegetables")}>Vegetables</div>
              <div onClick={()=>setcurrCategory("beverages")}>Beverages</div>
              <div onClick={()=> setcurrCategory("dairy")}>Dairy</div>
              <div onClick={()=> setcurrCategory("pasteries")}>Pasteries</div>
              <div onClick={()=> setcurrCategory("snacks")}>Snacks</div>
            </li>
          </ul>
          <div><Pantary currCategory={currCategory} cartItems={cartItems} setCartItems={setCartItems}/></div>
        </div>
      </div>
    </>
  )
}

export default Groceries
