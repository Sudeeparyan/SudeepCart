import React from 'react'
import './BooksCards.css'

function BooksCards({item,handleClick}) {
    const {title,author,price,img}=item
  return (
    <div className='cards '>
        <div className='image_box'>
            <img src={img}  alt={title} />
        </div>
        <div className='details' >
                <h4><u>{title}</u></h4>
                <h6>Author {author}</h6>
                <h5>Price: {price} Rs</h5>
                <button className='btn btn-info' onClick={()=>handleClick(item)} >Add to Cart</button>
            </div>
    </div>
  )
}

export default BooksCards
