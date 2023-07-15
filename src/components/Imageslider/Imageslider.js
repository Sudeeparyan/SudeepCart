import React from 'react'
import img1 from './electronics.png'
import img2 from './electronics1.png'
import img3 from './electronics2.png'
import './Imageslider.css'
function Imageslider() {
    return (
        <div>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
          
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
        
          
          <div className="carousel-inner">
            <div className="item active">
              <img src={img1} alt="fashon"  />
            </div>
        
            <div className="item">
              <img src={img2} alt="electronics"/>
            </div>
        
            <div className="item">
              <img src={img3} alt="electronics1" />
            </div>
            <div className="item">
              <img src={img2} alt="electronics2" x/>
            </div>
          </div>
        
          
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
    )
}

export default Imageslider
