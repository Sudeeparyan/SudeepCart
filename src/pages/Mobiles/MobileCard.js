import React from 'react'
import './MobileCard.css'
function MobileCard({smartPhone,handleClick}) {
  return (
    <div className='mobile'>
        <div className='mobileCard'>
            <h2 data-testid="brand" >{smartPhone.brand}</h2>            
            <img className='mobileImg' src={smartPhone.thumbnail} alt={smartPhone.title}></img>
            <div data-testid="title"><u><h1>{smartPhone.title}</h1></u></div>
            <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target= {`#${smartPhone.id}`}  >Details</button>
            </div> 
        </div>

            {/* PopUP */}
            <div id= {smartPhone.id} className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h3 className="modal-title"><h1 className='mobileHeading'>{smartPhone.title}</h1></h3>
                    </div>
                    <div className='modal-body' >
                        <p>
                        <h3>{smartPhone.description}</h3>
                        </p>
                        <img className='mobileImg' src={smartPhone.thumbnail} alt={smartPhone.title}></img>
                        <h2>Price: {smartPhone.price}/-</h2>
                        <h3>Discount Percentage {smartPhone.discountPercentage}%</h3>
                        
                        <h3>Stock {smartPhone.stock} left</h3>
                        <h4>{smartPhone.category}</h4>
                        <h4>Rating: {smartPhone.rating}</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={()=>handleClick(smartPhone)}>
                            Add to Cart
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MobileCard