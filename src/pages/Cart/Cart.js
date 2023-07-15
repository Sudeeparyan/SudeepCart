import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart({cartItems,cart,setCart,handleChange}) {
  const [price,setPrice]=useState(0)
  const navigate=useNavigate()
    const handlePrice=()=>{
      let ans=0;
      cart.map((item)=>(
        
        ans+=parseInt(item.amount) *parseInt(item.price?item.price:item.Price) 
      ))
      console.log("cart",cart);
      setPrice(ans);
    }
    const handleRemove=(id)=>{
      const arr=cart.filter((item)=>item.id!==id);
      setCart(arr)
    }
    useEffect(()=>{
      handlePrice();
    })
    console.log("cdata",cart);
  return (
    <div>
      <h1>Cart Items</h1>
      <article>
        {
          cart?.map((item)=>(
            <div className='cart_box' key={item.id} >
              <div className='cart_img'>
                <img src={item.img?item.img:item.image?item.image:item.thumbnail?item.Image:item.Image} alt={item.id}/>
                <p>{item.title}</p>
              </div>
              <div>
                <button className='btn btn-primary' onClick={()=>handleChange(item,+1)}>+</button>
                <p>{item.amount}</p>
                <button className='btn btn-warning' onClick={()=>handleChange(item,-1)}>-</button>
              </div>
              <div>
                <span><button className='btn btn-success'>{item.price?item.price: item.Price}</button></span>
                <button className='btn btn-danger' onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        }
        <div className='total'>
          <h2>Total Price of your Cart</h2>
          <h2>Rs {price}/-</h2>
        </div>
      </article>
        
        <div className='cart-container'>
        {
            cartItems.map((item) => 
            <div>
                
                <div className='container'>                
                <h2>{item.name}</h2>
                <img src={require(`../../images/groceries/${item.category}/${item.name}.jpg`)}  alt={item.name}/> 
                
                <h4>Total Price - {item.price}</h4>
                </div>
                
            </div>)
        }
        </div>
        <button className='btn btn-info ' onClick={()=>navigate('/payment')}><h4>Buy Items</h4> </button>
    </div>
    
  )
}

export default Cart