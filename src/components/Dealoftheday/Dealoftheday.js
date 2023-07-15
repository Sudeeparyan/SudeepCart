import React from 'react'
import './Dealoftheday.css'
import fig1 from './1.png'
import fig2 from './2.png'
import fig3 from './3.png'
import fig4 from './4.png'
import fig5 from './5.png'
import fig6 from './6.png'
import {
  BrowserRouter,
  Switch ,
  Route,
  Link
} from "react-router-dom"

const explore=()=>{
  
}

function Dealoftheday({handleClick}) {
    return (
        <div>
          <div className="dealcomponent">
            <div className="subdrop">
              <h2> Deals of the day</h2>
            </div>
              </div>
                <div className="deals">
                      <div className="component">
                      <Link to={`/product/1`}><img className='product-img' src={fig1} alt="laptop"/></Link>
                      </div>
                      <div className="component">
                      <Link to={`/product/2`}><img className='product-img' src={fig2} alt="laptop"/></Link>                        
                    </div>
                    <div className="component">
                    <Link to={`/product/3`}><img className='product-img' src={fig3} alt="laptop"/></Link> 
                     
                    </div>
                    <div className="component">
                    <Link to={`/product/4`}><img className='product-img' src={fig4} alt="laptop"/></Link> 
                     
                    </div>
                    <div className="component">
                    <Link to={`/product/5`}><img className='product-img' src={fig5} alt="laptop"/></Link>
                    </div>
                    <div className="component">
                    <Link to={`/product/6`}><img className='product-img' src={fig6} alt="laptop"/></Link>
                    </div>                    
                </div>
                <button id='explore' className='btn btn-warning' onClick={explore}>Explore More ...</button>
        </div>

    )
}

export default Dealoftheday
