import React from 'react'
import './FashionStore.css'
function FashionStore({item,handleClick}) {
    const {title,id,thumbnail,description,category,price}=item
  return (
    <div className='fashionCard' >
        <h3 data-testid="title" ><u>{title}</u></h3>
        <img  data-testid="image" className='fashionImg' src={thumbnail} alt={id}/>
        <div className='container' >
            <p  data-testid="description" >{description}</p>
            <h3  data-testid="price">Price: {price}/-Rs</h3>
            <h5  data-testid="category">{category}</h5>
            <button className='btn btn-info'onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default FashionStore