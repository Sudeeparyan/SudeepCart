import React from 'react'
import './Laptops.css'
function Laptops({item,handleClick}) {
    const {title,id,description,price,discountPercentage,rating,stock,brand,category,thumbnail}=item
  return (
    <div className='laptopCard '>
        <h2  data-testid="brand">{brand}</h2>
        <h2><u>{title}</u></h2>
        <img className='laptopImg'src={thumbnail}  alt={title} />        
        <div className='details' >
                <h5 data-testid="description">Description {description}</h5>
                <h5>Price: {price}Rs/-</h5>
                <h5>Rating: {rating}</h5>
                <h5>Discount Percentage: {discountPercentage}%</h5>
                <button className='btn btn-info' onClick={()=>handleClick(item)} >Add to Cart</button>
            </div>
    </div>
  )
}

export default Laptops