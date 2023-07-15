import React, { useState } from 'react'
import './Payment.css'
const Payment = () => {
    // const handleChange = (event) => {
    //     // useState({[event.target.name]:event.target.value})
    // }
    // const handleSubmit = () => {
    //     fetch(
    //         {
    //             method:'POST',
    //             headers:{
    //                 'accept':'application/json',
    //                 'content-type':'application/json'
    //             },
    //             body:JSON.stringify()
    //         }
    //     )
    //     .then(console.log("payment gateway"))
    // }
  return (
    // <div>
    //     <div className="container">
    //             <br/>
    //             <div className="panel panel-info">
    //                 <div className="panel-heading">
    //                     <h3>
    //                         {/* Your order from {this.props.match.params.restName} is below: */}
    //                     </h3>
    //                 </div>
    //                 <div className="panel-body">
    //                 <form method="POST" action="http://zompay.herokuapp.com/paynow">
    //                     <div className="row">
                            
    //                         <div className="col-md-12">
    //                             <div className="col-md-6">
    //                                 <div className="form-group">
    //                                     <label>Name</label>
    //                                     <input className="form-control" name="name" value={''}
    //                                     onChange={handleChange}/>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <div className="form-group">
    //                                     <label>EmailId</label>
    //                                     <input className="form-control" name="email" value={''}
    //                                     onChange={handleChange}/>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <div className="form-group">
    //                                     <label>Phone</label>
    //                                     <input className="form-control" name="phone" value={''}
    //                                     onChange={handleChange}/>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <div className="form-group">
    //                                     <label>Address</label>
    //                                     <input className="form-control" name="address" value={''}
    //                                     onChange={handleChange}/>
    //                                 </div>
    //                             </div>
                                
    //                         </div>
    //                         <input type="hidden" name="amount" value={''}/>
    //                         <input type="hidden" name="id" value={''}/>
    //                     </div>
    //                     {/* {this.renderItems(this.state.details)} */}
    //                     <div className="row">
    //                         <div className="col-md-12">
    //                             <h2>Total Cost is Rs.{}</h2>
    //                         </div>
    //                     </div>
    //                     <button className="btn btn-success" onClick={handleSubmit} 
    //                     type="submit">
    //                                 Checkout
    //                     </button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    // </div>
    <div>
        <center>
            <h2>Payment </h2>
        <div className='paymentDetails' >
            <div className="row my-5">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                <div className="card-body">
                    <form className="" action="http://zompay.herokuapp.com/paynow" method="post">
                    <div className="form-group">
                        <label for="">Name: </label>
                        <input className="form-control" type="text" name="name" value=""/>
                    </div>
                    <div className="form-group">
                        <label for="">Email: </label>
                        <input className="form-control" type="text" name="email" value=""/>
                    </div>
                    <div className="form-group">
                        <label for="">Phone: </label>
                        <input className="form-control" type="text" name="phone" value=""/>
                    </div>
                        <div className="form-group">
                        <label for="">Amount: </label>
                        <input className="form-control" type="text" name="amount" value=""/>
                    </div>
                    <div className="form-group">
                        <button className="btn form-control btn-primary">Checkout</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </div>
        </center>
    </div>
  )
}

export default Payment