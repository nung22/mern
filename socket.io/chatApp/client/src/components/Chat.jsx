import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function Chat(props) {
  const [socket] = useState(() => io(':8000'));
  const [outgoingMessage, setOutgoingMessage] = useState('');
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    socket.on("chat-history", hist => setMessages(hist));
    socket.on("new_message_from_server", msg =>
      // When setting state, you HAVE to use this exact
      // syntax. Any difference in syntax will not work
      // the way you expect.
      setMessages(prevMessages => {
        return [msg, ...prevMessages];
      }),
    );
    return () => socket.disconnect(true);
  }, []);

  const onSend = (e) => {
    e.preventDefault();
    const date = new Date();
    // Define that we only need hour and minute, not second
    const options = {hour: '2-digit', minute: '2-digit'}
    // Get the time without seconds
    const time = date.toLocaleTimeString('en-US',options)
    socket.emit("new_message_from_server", {
      "content": outgoingMessage, 
      "id": socket.id, 
      "name": props.userName,
      "time": time
    });
    e.target.reset();
    setOutgoingMessage('');
  };

  return(
    <div className="rounded-2xl border-2 border-gray-500 p-5 max-w-lg">
      <div className="overflow-y-auto h-96 flex flex-col-reverse">
        {messages !== [] &&
        messages.map( msg => 
          typeof msg !== "object"
          ? <div className='italic text-center my-2 text-lg'>{msg} has joined the chat.</div> :
          <div className={`chat ${socket.id === msg.id ? 'chat-end': 'chat-start'}`}>
            <div className="chat-header mb-1">
              <span>{socket.id === msg.id ? 'You' : msg.name}</span>
              <time className="text-xs opacity-50 pl-1">{msg.time}</time>
            </div>
            <div className={`break-auto chat-bubble ${socket.id === msg.id && 'chat-bubble-primary'}`}>{msg.content}</div>
          </div>
        )}

      </div>
      <form className="flex mt-4 justify-end" onSubmit={onSend}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Message</span>
          </label>
          <div className="input-group">
            <input type="text" placeholder="Type here" className="input input-bordered w-96" 
            onChange={e => setOutgoingMessage(e.target.value)} value={outgoingMessage}/>
            {outgoingMessage === ''
            ? <input className='btn btn-accent' disabled type="submit" value="Send"/>
            : <input className='btn btn-accent' type="submit" value="Send"/>
            }
          </div>
        </div>
      </form>
    </div>
  )
}