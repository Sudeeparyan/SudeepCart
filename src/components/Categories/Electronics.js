import React from 'react'
import electronicData from '../../pages/Electronics/ElectronicData'
import Electronic from '../../pages/Electronics/Electronic'
function Electronics({handleClick}) {
  return (
    <div className='electronic'>
      {
        electronicData.map(item=>(
          <Electronic item={item} handleClick={handleClick}/>
        ))
      }
      
    </div>
  )
}

export default Electronics