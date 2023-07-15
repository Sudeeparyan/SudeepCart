import React, { useState } from 'react';
import bot from './bot.gif'
import './Chatbot.css'
import Profile from './Profile.gif'

const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
//   const [chatResponse, setChatResponse] = useState('');
  const [showChatBot, setShowChatBot] = useState(false);
  const [message, setMessage] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt:inputValue })
      });

      if (response.ok) {
        // Request succeeded
        const data = await response.json();
        console.log(data);
        setMessage((message)=>[...message, {bot: data["message"]}] )
      } else {
        // Request failed
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function handleFormSubmit(){
    setMessage((message)=> [...message, {user: inputValue}]); 
    setInputValue("");
    // console.log('messages are', message)
  }

  return (
    <div className='chatbot'>
        <div className='chatlines'></div>
        {!showChatBot && <img className='chatimg' onClick={()=> setShowChatBot(!showChatBot)} src={bot} alt='bot' />}
        {showChatBot && 
        <div className='chatform'> 
        <button className='btn btn-danger' id='close' onClick={()=> setShowChatBot(!showChatBot)}> X </button>
            <u><h3 className='chatboxHeading'>Welcome to Balayya Bot! </h3></u>
            <div className='chatmessages'>
                {
                message.map((curr)=> {
                    if(curr.bot){
                    return( <div className='bot'><img className='botimg' src={bot} alt='bot'/>{curr.bot}</div>)
                    }
                    else{
                        return (<div className='user'><img className='profimg' src={Profile} alt='Profile' />{curr.user}</div>)
                    }
                })
                }
            </div>
            <form onSubmit={handleSubmit} className="send-message">
            <input className='inputMessage'
                type="text"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                placeholder="Enter some data"
            />
            <button type="submit"className='btn btn-success' onClick={handleFormSubmit} >Send</button>
            </form>                     
        </div>}
    </div>
  );
};

export default Chatbot;