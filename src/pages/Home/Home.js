import React from 'react'
import Imageslider from '../../components/Imageslider/Imageslider'
import Dealoftheday from '../../components/Dealoftheday/Dealoftheday'
import HomeProducts from './HomeProducts'

function Home({ handleClick }) {
  return (
    <div>
      <Imageslider/>
      <Dealoftheday/>
      <HomeProducts handleClick={ handleClick }/>
    </div>
  )
}

export default Home