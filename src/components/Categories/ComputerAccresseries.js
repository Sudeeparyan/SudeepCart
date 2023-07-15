import React from 'react'
import laptopsData from '../../pages/ComputerAccresseries/LaptopsData'
import Laptops from '../../pages/ComputerAccresseries/Laptops'
function ComputerAccresseries({handleClick}) {
  return (
    <div className='laptop'>
      {
        laptopsData.map(item=>(
          <Laptops item={item} key={item.id} handleClick={handleClick}/>
        ))
      }
    </div>
  )
}

export default ComputerAccresseries