import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../pages/Fashion/FashionStore.css'
import FashionStore from '../../pages/Fashion/FashionStore'
import FashionCategory from '../../pages/Fashion/FashionCategory'
import FashionData from '../../pages/Fashion/FashionData'

function Fashion({handleClick}) {
  const [fashion,setFashion]=useState({products:[]});
  const [fashionCategory, setFashionCategory] = useState("womens");
  function fetchWomenData(){
    axios.get('https://dummyjson.com/products/category/womens-dresses')
    .then(res=>{
      setFashion(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  } 
  useEffect(()=>{
    if(fashionCategory === "womens"){
      fetchWomenData();
    }
    else if(fashionCategory === "men"){
      setFashion(FashionData);
    }
  }, [fashionCategory])

  return (
    <div>
      <div>
        <h1>Welcome to Fashion Store</h1>
        <ul className='nav navbar-nav greybg sidenav'>
            <li>
              <div onClick={()=>setFashionCategory("womens")}>Womens</div>
              <div onClick={()=>setFashionCategory("men")}>Men</div>
              <div onClick={()=>setFashionCategory("kids")}>Kids</div>
            </li>
          </ul>
          <FashionCategory fashion={fashion} handleClick={handleClick}/>
      </div>
     
    </div>
  )
}

export default Fashion