import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bsellers from '../../pages/BestSellers/Bsellers'
import '../../pages/BestSellers/Bsellers.css'
import { useAuth } from '../../auth'
function BestSeller({handleClick,showAlert}) {
  
  const[bestSeller,setBestSeller] =useState([]);
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then(res=>{
        setBestSeller(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])
  return (
    <div>
      <div>
        <h1>Best Sellers of S-Cart</h1>
        {showAlert && <h2>Login to buy</h2>}
      </div>
      <div className='bsellers'>
        {
          bestSeller.map(item=>(
            <Bsellers item={item} handleClick={handleClick}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller