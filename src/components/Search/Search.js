import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Search.css'
function Search({item,handleClick}) {
    const [post,setPost]=useState({})
    const [id,setId]=useState('')
    const [idFromButton,setIdFromButton]=useState(11)
    const inputRef = React.useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
        axios.get(`https://fakestoreapi.com/products/${idFromButton}`)
            .then(res=>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[idFromButton])
    let buttonClicked=()=>{
        setIdFromButton(id)
    }
  return (
    <div>
        <input ref={inputRef} type='text' className='search' value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={buttonClicked} className="btn btn-info" >Search</button>
        <div>{post.title}</div>

        <div className='fashionCard' >
        <h3><u>{post.title}</u></h3>
        <img className='fashionImg' src={post.image} alt={id}/>
        <div className='container' >
            <p>{post.description}</p>
            <h3>Price: {post.price}/-Rs</h3>
            <h5>{post.category}</h5>
            <button className='btn btn-info'onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>


        <div  className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h3 className="modal-title"><h1 className='mobileHeading'>{post.title}</h1></h3>
                    </div>
                    <div className='modal-body' >                        
                        <img className='BsellerImg' src={post.image} alt={post.title}></img>
                        <p><h3>{post.description}</h3></p>
                        <h2>Price: {post.price}/-</h2>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" >
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

export default Search