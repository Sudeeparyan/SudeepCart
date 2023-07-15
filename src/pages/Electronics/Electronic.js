import React from 'react'
import './Electronic.css'
function Electronic({item,handleClick}) {
  const {Title,Description,Category,Image,Price,Deals,Availability,Stars}=item
  
  return (
    <div className='electronicCard '>
        
        <h2 data-testid="electronictitle"><u>{Title}</u></h2>
        <img className='electronicImg'src={Image}  alt={Image} />        
        <div className='details' >
                <h5 data-testid="electronicdescription">Description {Description}</h5>
                <h5 data-testid="electronicprice">Price: {Price} Rs/-</h5>
                <h5 data-testid="electronicrating">Rating: {Stars}</h5>
                <h5 data-testid="electronicavailability">Availability : {Availability}%</h5>
                <h5 data-testid="electronictitle">Deals</h5>
                <button className='btn btn-info' onClick={()=>handleClick(item)} >Add to Cart</button>
            </div>
    </div>
  )
}

export default Electronic