import React from 'react'
import FashionStore from './FashionStore'

const FashionCategory = ({fashion, handleClick}) => {
  return (
    <div className='Fashion'>
    {
      fashion.products.map(item=>(
        <FashionStore item={item} handleClick={handleClick} />
      ))
    }
  </div> 
  )
}

export default FashionCategory