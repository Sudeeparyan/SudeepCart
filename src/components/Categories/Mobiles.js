import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import MobileCard from '../../pages/Mobiles/MobileCard';

function Mobiles({handleClick}) {
  const [smartPhones,setSmartPhones] =useState({products:[]})
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/category/smartphones')
      .then(res=>{
        setSmartPhones(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  },[]);
  // console.log(smartPhones.products)  
  return (
    <div>
      <div>
        <h1>Welcome to Mobile Store</h1>
      </div>
      <div className='mobile'>
        {smartPhones.products.map(smartPhone=>(
          <MobileCard smartPhone={smartPhone} handleClick={handleClick}/>
        ))} 
      </div>
    </div>
  )
}

export default Mobiles